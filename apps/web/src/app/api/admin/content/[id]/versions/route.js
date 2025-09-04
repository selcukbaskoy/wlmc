import { auth } from "@/auth";
import sql from "@/app/api/utils/sql";

// Utility functions
async function checkRateLimit(ip, endpoint, maxRequests = 100, windowMinutes = 15) {
  const windowStart = new Date(Date.now() - windowMinutes * 60 * 1000);
  
  const result = await sql`
    INSERT INTO cms_rate_limits (ip_address, endpoint, request_count, window_start)
    VALUES (${ip}, ${endpoint}, 1, NOW())
    ON CONFLICT (ip_address, endpoint)
    DO UPDATE SET 
      request_count = CASE 
        WHEN cms_rate_limits.window_start < ${windowStart} THEN 1
        ELSE cms_rate_limits.request_count + 1
      END,
      window_start = CASE 
        WHEN cms_rate_limits.window_start < ${windowStart} THEN NOW()
        ELSE cms_rate_limits.window_start
      END
    RETURNING request_count
  `;
  
  return result[0].request_count <= maxRequests;
}

async function logAction(userId, action, resourceType, resourceId, oldValues, newValues, ip, userAgent) {
  await sql`
    INSERT INTO cms_audit_log (user_id, action, resource_type, resource_id, old_values, new_values, ip_address, user_agent)
    VALUES (${userId}, ${action}, ${resourceType}, ${resourceId}, ${JSON.stringify(oldValues)}, ${JSON.stringify(newValues)}, ${ip}, ${userAgent})
  `;
}

async function checkPermissions(userId, resource, action) {
  const roles = await sql`
    SELECT r.permissions 
    FROM cms_user_roles ur
    JOIN cms_roles r ON ur.role_id = r.id
    WHERE ur.user_id = ${userId}
  `;
  
  if (roles.length === 0) {
    return false;
  }
  
  for (const role of roles) {
    const permissions = role.permissions;
    if (permissions[resource] && permissions[resource].includes(action)) {
      return true;
    }
  }
  
  return false;
}

// Get content version history
export async function GET(request, { params }) {
  try {
    const session = await auth();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const { id } = params;
    
    // Rate limiting
    const rateLimitOk = await checkRateLimit(ip, `/admin/content/${id}/versions`, 50, 1);
    if (!rateLimitOk) {
      return Response.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }
    
    if (!session?.user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Check permissions
    const hasPermission = await checkPermissions(session.user.id, 'content', 'read');
    if (!hasPermission) {
      return Response.json({ error: 'Insufficient permissions' }, { status: 403 });
    }
    
    // Check if content exists
    const [content] = await sql`SELECT id, title FROM cms_content WHERE id = ${id}`;
    if (!content) {
      return Response.json({ error: 'Content not found' }, { status: 404 });
    }
    
    // Get all versions
    const versions = await sql`
      SELECT 
        v.*,
        u.name as created_by_name,
        u.email as created_by_email
      FROM cms_content_versions v
      LEFT JOIN auth_users u ON v.created_by = u.id
      WHERE v.content_id = ${id}
      ORDER BY v.version_number DESC
    `;
    
    return Response.json({
      content_id: id,
      content_title: content.title,
      versions
    });
    
  } catch (error) {
    console.error('Content versions get error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}

// Rollback to specific version
export async function POST(request, { params }) {
  try {
    const session = await auth();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const { id } = params;
    
    // Rate limiting
    const rateLimitOk = await checkRateLimit(ip, `/admin/content/${id}/versions`, 10, 1);
    if (!rateLimitOk) {
      return Response.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }
    
    if (!session?.user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Check permissions
    const hasPermission = await checkPermissions(session.user.id, 'content', 'update');
    if (!hasPermission) {
      return Response.json({ error: 'Insufficient permissions' }, { status: 403 });
    }
    
    const body = await request.json();
    const { version_number } = body;
    
    if (!version_number) {
      return Response.json({ error: 'Version number is required' }, { status: 400 });
    }
    
    // Get the version to rollback to
    const [targetVersion] = await sql`
      SELECT * FROM cms_content_versions 
      WHERE content_id = ${id} AND version_number = ${version_number}
    `;
    
    if (!targetVersion) {
      return Response.json({ error: 'Version not found' }, { status: 404 });
    }
    
    // Get current content for audit log
    const [currentContent] = await sql`SELECT * FROM cms_content WHERE id = ${id}`;
    if (!currentContent) {
      return Response.json({ error: 'Content not found' }, { status: 404 });
    }
    
    // Update content to match the target version
    const [updatedContent] = await sql`
      UPDATE cms_content SET
        title = ${targetVersion.title},
        body = ${targetVersion.body},
        summary = ${targetVersion.summary},
        meta_title = ${targetVersion.meta_title},
        meta_description = ${targetVersion.meta_description},
        canonical = ${targetVersion.canonical},
        og_image = ${targetVersion.og_image},
        cover_image = ${targetVersion.cover_image},
        status = ${targetVersion.status},
        updated_by = ${session.user.id},
        updated_at = NOW(),
        version = version + 1
      WHERE id = ${id}
      RETURNING *
    `;
    
    // Create new version entry for the rollback
    await sql`
      INSERT INTO cms_content_versions (
        content_id, version_number, title, body, summary, meta_title, meta_description,
        canonical, og_image, cover_image, status, created_by
      ) VALUES (
        ${id}, ${updatedContent.version}, ${targetVersion.title}, ${targetVersion.body}, 
        ${targetVersion.summary}, ${targetVersion.meta_title}, ${targetVersion.meta_description},
        ${targetVersion.canonical}, ${targetVersion.og_image}, ${targetVersion.cover_image}, 
        ${targetVersion.status}, ${session.user.id}
      )
    `;
    
    // Log the rollback action
    await logAction(
      session.user.id,
      'rollback',
      'content',
      id,
      currentContent,
      { ...updatedContent, rollback_to_version: version_number },
      ip,
      request.headers.get('user-agent')
    );
    
    return Response.json({
      message: `Content rolled back to version ${version_number}`,
      new_version: updatedContent.version,
      rollback_to_version: version_number
    });
    
  } catch (error) {
    console.error('Content rollback error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}