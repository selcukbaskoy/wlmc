import { auth } from "@/auth";
import sql from "@/app/api/utils/sql";
import { upload } from "@/app/api/utils/upload";

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

// Get media library with pagination
export async function GET(request) {
  try {
    const session = await auth();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Rate limiting
    const rateLimitOk = await checkRateLimit(ip, '/admin/media', 100, 1);
    if (!rateLimitOk) {
      return Response.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }
    
    if (!session?.user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Check permissions
    const hasPermission = await checkPermissions(session.user.id, 'media', 'read');
    if (!hasPermission) {
      return Response.json({ error: 'Insufficient permissions' }, { status: 403 });
    }
    
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '24');
    const search = url.searchParams.get('search');
    const mimeType = url.searchParams.get('type');
    
    const offset = (page - 1) * limit;
    
    // Build dynamic query
    let whereConditions = ['1=1'];
    let queryParams = [];
    let paramIndex = 1;
    
    if (search) {
      whereConditions.push(`(filename ILIKE $${paramIndex} OR original_filename ILIKE $${paramIndex} OR alt_text ILIKE $${paramIndex})`);
      queryParams.push(`%${search}%`);
      paramIndex++;
    }
    
    if (mimeType) {
      whereConditions.push(`mime_type LIKE $${paramIndex}`);
      queryParams.push(`${mimeType}%`);
      paramIndex++;
    }
    
    const whereClause = whereConditions.join(' AND ');
    
    // Get total count
    const countQuery = `SELECT COUNT(*) as total FROM cms_media WHERE ${whereClause}`;
    const [countResult] = await sql(countQuery, queryParams);
    const total = parseInt(countResult.total);
    
    // Get media with pagination
    const mediaQuery = `
      SELECT 
        m.*,
        u.name as uploaded_by_name
      FROM cms_media m
      LEFT JOIN auth_users u ON m.uploaded_by = u.id
      WHERE ${whereClause}
      ORDER BY m.created_at DESC
      LIMIT $${paramIndex} OFFSET $${paramIndex + 1}
    `;
    
    queryParams.push(limit, offset);
    const media = await sql(mediaQuery, queryParams);
    
    return Response.json({
      media,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
    
  } catch (error) {
    console.error('Media list error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}

// Upload media
export async function POST(request) {
  try {
    const session = await auth();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Rate limiting
    const rateLimitOk = await checkRateLimit(ip, '/admin/media', 10, 1);
    if (!rateLimitOk) {
      return Response.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }
    
    if (!session?.user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Check permissions
    const hasPermission = await checkPermissions(session.user.id, 'media', 'create');
    if (!hasPermission) {
      return Response.json({ error: 'Insufficient permissions' }, { status: 403 });
    }
    
    const body = await request.json();
    const { url: fileUrl, base64, alt_text, original_filename } = body;
    
    if (!fileUrl && !base64) {
      return Response.json({ error: 'File URL or base64 data is required' }, { status: 400 });
    }
    
    // Upload file using existing upload utility
    const uploadResult = await upload(fileUrl ? { url: fileUrl } : { base64 });
    
    if (uploadResult.error) {
      return Response.json({ error: uploadResult.error }, { status: 400 });
    }
    
    // Extract filename from URL or use provided name
    const filename = uploadResult.url.split('/').pop() || 'uploaded-file';
    const finalOriginalFilename = original_filename || filename;
    
    // For images, we might want to get dimensions (placeholder for now)
    let width = null;
    let height = null;
    let fileSize = 0; // We don't have access to actual file size from upload util
    
    // Save media record to database
    const [mediaRecord] = await sql`
      INSERT INTO cms_media (
        filename, original_filename, mime_type, file_size, width, height, 
        url, alt_text, uploaded_by
      ) VALUES (
        ${filename}, ${finalOriginalFilename}, ${uploadResult.mimeType}, ${fileSize}, 
        ${width}, ${height}, ${uploadResult.url}, ${alt_text}, ${session.user.id}
      ) RETURNING *
    `;
    
    // Log the action
    await logAction(
      session.user.id,
      'upload',
      'media',
      mediaRecord.id,
      null,
      mediaRecord,
      ip,
      request.headers.get('user-agent')
    );
    
    return Response.json(mediaRecord, { status: 201 });
    
  } catch (error) {
    console.error('Media upload error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}