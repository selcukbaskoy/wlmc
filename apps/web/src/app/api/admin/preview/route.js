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

// Generate random token
function generateToken() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 32; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Create preview token
export async function POST(request) {
  try {
    const session = await auth();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Rate limiting
    const rateLimitOk = await checkRateLimit(ip, '/admin/preview', 20, 1);
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
    
    const body = await request.json();
    const { content_id, expires_hours = 24 } = body;
    
    if (!content_id) {
      return Response.json({ error: 'Content ID is required' }, { status: 400 });
    }
    
    // Check if content exists
    const [content] = await sql`SELECT id FROM cms_content WHERE id = ${content_id}`;
    if (!content) {
      return Response.json({ error: 'Content not found' }, { status: 404 });
    }
    
    // Generate unique token
    let token;
    let attempts = 0;
    do {
      token = generateToken();
      const existing = await sql`SELECT id FROM cms_preview_tokens WHERE token = ${token}`;
      attempts++;
      if (attempts > 10) {
        throw new Error('Could not generate unique token');
      }
    } while (existing.length > 0);
    
    // Calculate expiration time
    const expiresAt = new Date(Date.now() + expires_hours * 60 * 60 * 1000);
    
    // Clean up old tokens for this content
    await sql`DELETE FROM cms_preview_tokens WHERE content_id = ${content_id}`;
    
    // Create new token
    const [previewToken] = await sql`
      INSERT INTO cms_preview_tokens (token, content_id, expires_at)
      VALUES (${token}, ${content_id}, ${expiresAt})
      RETURNING *
    `;
    
    // Log the action
    await logAction(
      session.user.id,
      'create_preview',
      'preview_token',
      previewToken.id,
      null,
      previewToken,
      ip,
      request.headers.get('user-agent')
    );
    
    return Response.json({
      token: previewToken.token,
      preview_url: `/preview?token=${previewToken.token}`,
      expires_at: previewToken.expires_at
    }, { status: 201 });
    
  } catch (error) {
    console.error('Preview token creation error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}

// Get preview content (public endpoint but token-protected)
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const token = url.searchParams.get('token');
    
    if (!token) {
      return Response.json({ error: 'Preview token is required' }, { status: 400 });
    }
    
    // Find valid token
    const [previewData] = await sql`
      SELECT pt.*, c.*
      FROM cms_preview_tokens pt
      JOIN cms_content c ON pt.content_id = c.id
      WHERE pt.token = ${token} AND pt.expires_at > NOW()
    `;
    
    if (!previewData) {
      return Response.json({ error: 'Invalid or expired preview token' }, { status: 404 });
    }
    
    // Get content with categories and tags
    const [content] = await sql`
      SELECT 
        c.*,
        COALESCE(
          JSON_AGG(
            DISTINCT JSON_BUILD_OBJECT('id', cat.id, 'name', cat.name, 'slug', cat.slug)
          ) FILTER (WHERE cat.id IS NOT NULL), 
          '[]'
        ) as categories,
        COALESCE(
          JSON_AGG(
            DISTINCT JSON_BUILD_OBJECT('id', tag.id, 'name', tag.name, 'slug', tag.slug)
          ) FILTER (WHERE tag.id IS NOT NULL), 
          '[]'
        ) as tags
      FROM cms_content c
      LEFT JOIN cms_content_categories cc ON c.id = cc.content_id
      LEFT JOIN cms_categories cat ON cc.category_id = cat.id
      LEFT JOIN cms_content_tags ct ON c.id = ct.content_id
      LEFT JOIN cms_tags tag ON ct.tag_id = tag.id
      WHERE c.id = ${previewData.content_id}
      GROUP BY c.id
    `;
    
    return Response.json({
      ...content,
      preview_mode: true
    });
    
  } catch (error) {
    console.error('Preview get error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}