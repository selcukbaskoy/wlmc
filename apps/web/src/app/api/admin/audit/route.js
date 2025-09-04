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

// Get audit log with pagination and filtering
export async function GET(request) {
  try {
    const session = await auth();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Rate limiting
    const rateLimitOk = await checkRateLimit(ip, '/admin/audit', 50, 1);
    if (!rateLimitOk) {
      return Response.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }
    
    if (!session?.user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Check permissions (assuming audit logs require admin permissions)
    const hasPermission = await checkPermissions(session.user.id, 'users', 'read') || 
                          await checkPermissions(session.user.id, 'content', 'read');
    if (!hasPermission) {
      return Response.json({ error: 'Insufficient permissions' }, { status: 403 });
    }
    
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '50');
    const action = url.searchParams.get('action');
    const resourceType = url.searchParams.get('resource_type');
    const userId = url.searchParams.get('user_id');
    const startDate = url.searchParams.get('start_date');
    const endDate = url.searchParams.get('end_date');
    
    const offset = (page - 1) * limit;
    
    // Build dynamic query
    let whereConditions = ['1=1'];
    let queryParams = [];
    let paramIndex = 1;
    
    if (action) {
      whereConditions.push(`action = $${paramIndex}`);
      queryParams.push(action);
      paramIndex++;
    }
    
    if (resourceType) {
      whereConditions.push(`resource_type = $${paramIndex}`);
      queryParams.push(resourceType);
      paramIndex++;
    }
    
    if (userId) {
      whereConditions.push(`user_id = $${paramIndex}`);
      queryParams.push(userId);
      paramIndex++;
    }
    
    if (startDate) {
      whereConditions.push(`created_at >= $${paramIndex}`);
      queryParams.push(startDate);
      paramIndex++;
    }
    
    if (endDate) {
      whereConditions.push(`created_at <= $${paramIndex}`);
      queryParams.push(endDate);
      paramIndex++;
    }
    
    const whereClause = whereConditions.join(' AND ');
    
    // Get total count
    const countQuery = `SELECT COUNT(*) as total FROM cms_audit_log WHERE ${whereClause}`;
    const [countResult] = await sql(countQuery, queryParams);
    const total = parseInt(countResult.total);
    
    // Get audit log entries with pagination
    const auditQuery = `
      SELECT 
        a.*,
        u.email as user_email,
        u.name as user_name
      FROM cms_audit_log a
      LEFT JOIN auth_users u ON a.user_id = u.id
      WHERE ${whereClause}
      ORDER BY a.created_at DESC
      LIMIT $${paramIndex} OFFSET $${paramIndex + 1}
    `;
    
    queryParams.push(limit, offset);
    const activities = await sql(auditQuery, queryParams);
    
    return Response.json({
      activities,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
    
  } catch (error) {
    console.error('Audit log error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}