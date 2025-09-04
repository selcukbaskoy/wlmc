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

// Get dashboard statistics
export async function GET(request) {
  try {
    const session = await auth();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Rate limiting
    const rateLimitOk = await checkRateLimit(ip, '/admin/stats', 50, 1);
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
    
    // Get content statistics
    const contentStats = await sql`
      SELECT 
        content_type,
        status,
        COUNT(*) as count
      FROM cms_content 
      GROUP BY content_type, status
    `;
    
    // Get media count
    const [mediaCount] = await sql`SELECT COUNT(*) as count FROM cms_media`;
    
    // Process statistics
    const stats = {
      blogPosts: 0,
      pages: 0,
      faqs: 0,
      media: parseInt(mediaCount.count),
      drafts: 0,
      published: 0,
      review: 0
    };
    
    contentStats.forEach(stat => {
      const type = stat.content_type;
      const status = stat.status;
      const count = parseInt(stat.count);
      
      // Count by content type
      if (type === 'blog_post') stats.blogPosts += count;
      else if (type === 'page') stats.pages += count;
      else if (type === 'faq') stats.faqs += count;
      
      // Count by status
      if (status === 'draft') stats.drafts += count;
      else if (status === 'published') stats.published += count;
      else if (status === 'review') stats.review += count;
    });
    
    return Response.json(stats);
    
  } catch (error) {
    console.error('Stats get error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}