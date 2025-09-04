import { auth } from "@/auth";
import sql from "@/app/api/utils/sql";

// Rate limiting helper
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

// Audit logging helper
async function logAction(userId, action, resourceType, resourceId, oldValues, newValues, ip, userAgent) {
  await sql`
    INSERT INTO cms_audit_log (user_id, action, resource_type, resource_id, old_values, new_values, ip_address, user_agent)
    VALUES (${userId}, ${action}, ${resourceType}, ${resourceId}, ${JSON.stringify(oldValues)}, ${JSON.stringify(newValues)}, ${ip}, ${userAgent})
  `;
}

// Check user permissions
async function checkPermissions(userId, resource, action) {
  const roles = await sql`
    SELECT r.permissions 
    FROM cms_user_roles ur
    JOIN cms_roles r ON ur.role_id = r.id
    WHERE ur.user_id = ${userId}
  `;
  
  if (roles.length === 0) {
    return false; // No roles assigned
  }
  
  // Check if any role has the required permission
  for (const role of roles) {
    const permissions = role.permissions;
    if (permissions[resource] && permissions[resource].includes(action)) {
      return true;
    }
  }
  
  return false;
}

export async function GET(request) {
  try {
    const session = await auth();
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    // Rate limiting
    const rateLimitOk = await checkRateLimit(ip, '/admin/auth/check', 60, 1);
    if (!rateLimitOk) {
      return Response.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }
    
    if (!session?.user) {
      return Response.json({ authenticated: false }, { status: 401 });
    }
    
    // Get user roles and permissions
    const userRoles = await sql`
      SELECT r.name, r.permissions 
      FROM cms_user_roles ur
      JOIN cms_roles r ON ur.role_id = r.id
      WHERE ur.user_id = ${session.user.id}
    `;
    
    // Log authentication check
    await logAction(
      session.user.id, 
      'auth_check', 
      'user', 
      session.user.id, 
      null, 
      null, 
      ip, 
      request.headers.get('user-agent')
    );
    
    return Response.json({
      authenticated: true,
      user: {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name,
        roles: userRoles.map(r => r.name),
        permissions: userRoles.reduce((acc, role) => {
          const perms = role.permissions;
          Object.keys(perms).forEach(resource => {
            if (!acc[resource]) acc[resource] = [];
            acc[resource] = [...new Set([...acc[resource], ...perms[resource]])];
          });
          return acc;
        }, {})
      }
    });
    
  } catch (error) {
    console.error('Auth check error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}