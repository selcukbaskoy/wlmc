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

function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
}

// Get all tags
export async function GET(request) {
  try {
    const session = await auth();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Rate limiting
    const rateLimitOk = await checkRateLimit(ip, '/admin/tags', 100, 1);
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
    
    const tags = await sql`
      SELECT 
        t.*,
        COUNT(ct.content_id) as content_count
      FROM cms_tags t
      LEFT JOIN cms_content_tags ct ON t.id = ct.tag_id
      GROUP BY t.id
      ORDER BY t.name
    `;
    
    return Response.json(tags);
    
  } catch (error) {
    console.error('Tags get error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}

// Create tag
export async function POST(request) {
  try {
    const session = await auth();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Rate limiting
    const rateLimitOk = await checkRateLimit(ip, '/admin/tags', 20, 1);
    if (!rateLimitOk) {
      return Response.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }
    
    if (!session?.user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Check permissions
    const hasPermission = await checkPermissions(session.user.id, 'content', 'create');
    if (!hasPermission) {
      return Response.json({ error: 'Insufficient permissions' }, { status: 403 });
    }
    
    const body = await request.json();
    const { name, slug: customSlug } = body;
    
    if (!name) {
      return Response.json({ error: 'Name is required' }, { status: 400 });
    }
    
    // Generate slug
    let finalSlug = customSlug || generateSlug(name);
    
    // Ensure slug is unique
    let slugSuffix = 0;
    let uniqueSlug = finalSlug;
    while (true) {
      const existing = await sql`SELECT id FROM cms_tags WHERE slug = ${uniqueSlug}`;
      if (existing.length === 0) break;
      slugSuffix++;
      uniqueSlug = `${finalSlug}-${slugSuffix}`;
    }
    finalSlug = uniqueSlug;
    
    const [newTag] = await sql`
      INSERT INTO cms_tags (name, slug)
      VALUES (${name}, ${finalSlug})
      RETURNING *
    `;
    
    // Log the action
    await logAction(
      session.user.id,
      'create',
      'tag',
      newTag.id,
      null,
      newTag,
      ip,
      request.headers.get('user-agent')
    );
    
    return Response.json(newTag, { status: 201 });
    
  } catch (error) {
    console.error('Tag creation error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}