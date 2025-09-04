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

// Get all roles
export async function GET(request) {
  try {
    const session = await auth();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Rate limiting
    const rateLimitOk = await checkRateLimit(ip, '/admin/roles', 50, 1);
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
    
    const roles = await sql`
      SELECT 
        r.*,
        COUNT(ur.user_id) as user_count
      FROM cms_roles r
      LEFT JOIN cms_user_roles ur ON r.id = ur.role_id
      GROUP BY r.id
      ORDER BY r.name
    `;
    
    return Response.json(roles);
    
  } catch (error) {
    console.error('Roles get error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}

// Create new role
export async function POST(request) {
  try {
    const session = await auth();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Rate limiting
    const rateLimitOk = await checkRateLimit(ip, '/admin/roles', 10, 1);
    if (!rateLimitOk) {
      return Response.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }
    
    if (!session?.user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Check permissions (only admins should create roles)
    const hasPermission = await checkPermissions(session.user.id, 'users', 'create');
    if (!hasPermission) {
      return Response.json({ error: 'Insufficient permissions' }, { status: 403 });
    }
    
    const body = await request.json();
    const { name, permissions } = body;
    
    if (!name || !permissions) {
      return Response.json({ error: 'Name and permissions are required' }, { status: 400 });
    }
    
    // Check if role name already exists
    const existing = await sql`SELECT id FROM cms_roles WHERE name = ${name}`;
    if (existing.length > 0) {
      return Response.json({ error: 'Role name already exists' }, { status: 400 });
    }
    
    const [newRole] = await sql`
      INSERT INTO cms_roles (name, permissions)
      VALUES (${name}, ${JSON.stringify(permissions)})
      RETURNING *
    `;
    
    // Log the action
    await logAction(
      session.user.id,
      'create',
      'role',
      newRole.id,
      null,
      newRole,
      ip,
      request.headers.get('user-agent')
    );
    
    return Response.json(newRole, { status: 201 });
    
  } catch (error) {
    console.error('Role creation error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}