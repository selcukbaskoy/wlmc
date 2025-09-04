import { auth } from "@/auth";
import sql from "@/app/api/utils/sql";

// One-time setup endpoint to assign admin role to first user
export async function POST(request) {
  try {
    const session = await auth();
    
    if (!session?.user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Check if user already has any roles
    const existingRoles = await sql`
      SELECT * FROM cms_user_roles WHERE user_id = ${session.user.id}
    `;
    
    if (existingRoles.length > 0) {
      return Response.json({ message: 'User already has roles assigned' });
    }
    
    // Check if this is the first user in the system
    const [userCount] = await sql`SELECT COUNT(*) as count FROM auth_users`;
    
    if (parseInt(userCount.count) === 1) {
      // This is the first user, assign admin role
      const [adminRole] = await sql`SELECT id FROM cms_roles WHERE name = 'admin'`;
      
      if (adminRole) {
        await sql`
          INSERT INTO cms_user_roles (user_id, role_id)
          VALUES (${session.user.id}, ${adminRole.id})
        `;
        
        // Log the action
        await sql`
          INSERT INTO cms_audit_log (user_id, action, resource_type, resource_id, new_values, ip_address, user_agent)
          VALUES (${session.user.id}, 'auto_assign_admin', 'user_role', ${session.user.id}, 
                  ${JSON.stringify({user_id: session.user.id, role_id: adminRole.id})}, 
                  ${request.headers.get('x-forwarded-for') || 'unknown'}, 
                  ${request.headers.get('user-agent')})
        `;
        
        return Response.json({ 
          message: 'Admin role assigned successfully',
          user: {
            id: session.user.id,
            email: session.user.email,
            role: 'admin'
          }
        });
      }
    }
    
    // Manual role assignment for existing users
    const body = await request.json();
    const { role_name = 'editor' } = body;
    
    const [role] = await sql`SELECT id FROM cms_roles WHERE name = ${role_name}`;
    
    if (!role) {
      return Response.json({ error: 'Role not found' }, { status: 404 });
    }
    
    await sql`
      INSERT INTO cms_user_roles (user_id, role_id)
      VALUES (${session.user.id}, ${role.id})
      ON CONFLICT DO NOTHING
    `;
    
    // Log the action
    await sql`
      INSERT INTO cms_audit_log (user_id, action, resource_type, resource_id, new_values, ip_address, user_agent)
      VALUES (${session.user.id}, 'self_assign_role', 'user_role', ${session.user.id}, 
              ${JSON.stringify({user_id: session.user.id, role_id: role.id})}, 
              ${request.headers.get('x-forwarded-for') || 'unknown'}, 
              ${request.headers.get('user-agent')})
    `;
    
    return Response.json({ 
      message: `${role_name} role assigned successfully`,
      user: {
        id: session.user.id,
        email: session.user.email,
        role: role_name
      }
    });
    
  } catch (error) {
    console.error('Setup error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}