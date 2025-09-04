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

// Get all users with their roles
export async function GET(request) {
  try {
    const session = await auth();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Rate limiting
    const rateLimitOk = await checkRateLimit(ip, '/admin/users', 50, 1);
    if (!rateLimitOk) {
      return Response.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }
    
    if (!session?.user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Check permissions
    const hasPermission = await checkPermissions(session.user.id, 'users', 'read');
    if (!hasPermission) {
      return Response.json({ error: 'Insufficient permissions' }, { status: 403 });
    }
    
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const search = url.searchParams.get('search');
    
    const offset = (page - 1) * limit;
    
    // Build dynamic query
    let whereConditions = ['1=1'];
    let queryParams = [];
    let paramIndex = 1;
    
    if (search) {
      whereConditions.push(`(u.name ILIKE $${paramIndex} OR u.email ILIKE $${paramIndex})`);
      queryParams.push(`%${search}%`);
      paramIndex++;
    }
    
    const whereClause = whereConditions.join(' AND ');
    
    // Get total count
    const countQuery = `SELECT COUNT(*) as total FROM auth_users u WHERE ${whereClause}`;
    const [countResult] = await sql(countQuery, queryParams);
    const total = parseInt(countResult.total);
    
    // Get users with their roles
    const usersQuery = `
      SELECT 
        u.*,
        COALESCE(
          JSON_AGG(
            DISTINCT JSON_BUILD_OBJECT('id', r.id, 'name', r.name, 'permissions', r.permissions)
          ) FILTER (WHERE r.id IS NOT NULL), 
          '[]'
        ) as roles
      FROM auth_users u
      LEFT JOIN cms_user_roles ur ON u.id = ur.user_id
      LEFT JOIN cms_roles r ON ur.role_id = r.id
      WHERE ${whereClause}
      GROUP BY u.id
      ORDER BY u.email
      LIMIT $${paramIndex} OFFSET $${paramIndex + 1}
    `;
    
    queryParams.push(limit, offset);
    const users = await sql(usersQuery, queryParams);
    
    return Response.json({
      users,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
    
  } catch (error) {
    console.error('Users list error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}

// Assign role to user
export async function POST(request) {
  try {
    const session = await auth();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Rate limiting
    const rateLimitOk = await checkRateLimit(ip, '/admin/users', 20, 1);
    if (!rateLimitOk) {
      return Response.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }
    
    if (!session?.user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Check permissions
    const hasPermission = await checkPermissions(session.user.id, 'users', 'update');
    if (!hasPermission) {
      return Response.json({ error: 'Insufficient permissions' }, { status: 403 });
    }
    
    const body = await request.json();
    const { user_id, role_id, action } = body;
    
    if (!user_id || !role_id || !action) {
      return Response.json({ error: 'User ID, role ID, and action are required' }, { status: 400 });
    }
    
    // Check if user exists
    const [user] = await sql`SELECT id, email FROM auth_users WHERE id = ${user_id}`;
    if (!user) {
      return Response.json({ error: 'User not found' }, { status: 404 });
    }
    
    // Check if role exists
    const [role] = await sql`SELECT id, name FROM cms_roles WHERE id = ${role_id}`;
    if (!role) {
      return Response.json({ error: 'Role not found' }, { status: 404 });
    }
    
    let result;
    let oldValues = null;
    let newValues = null;
    
    if (action === 'assign') {
      // Assign role to user
      const [assignment] = await sql`
        INSERT INTO cms_user_roles (user_id, role_id)
        VALUES (${user_id}, ${role_id})
        ON CONFLICT DO NOTHING
        RETURNING *
      `;
      
      if (assignment) {
        result = { message: `Role ${role.name} assigned to ${user.email}` };
        newValues = assignment;
      } else {
        result = { message: `User already has role ${role.name}` };
      }
      
    } else if (action === 'remove') {
      // Remove role from user
      const removed = await sql`
        DELETE FROM cms_user_roles 
        WHERE user_id = ${user_id} AND role_id = ${role_id}
        RETURNING *
      `;
      
      if (removed.length > 0) {
        result = { message: `Role ${role.name} removed from ${user.email}` };
        oldValues = removed[0];
      } else {
        return Response.json({ error: 'User does not have this role' }, { status: 400 });
      }
      
    } else {
      return Response.json({ error: 'Invalid action. Use "assign" or "remove"' }, { status: 400 });
    }
    
    // Log the action
    await logAction(
      session.user.id,
      `${action}_role`,
      'user_role',
      user_id,
      oldValues,
      newValues,
      ip,
      request.headers.get('user-agent')
    );
    
    return Response.json(result);
    
  } catch (error) {
    console.error('User role management error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}