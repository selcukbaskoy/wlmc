import { auth } from "@/auth";
import sql from "@/app/api/utils/sql";

// Utility functions from auth/check
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

// Generate unique slug
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
}

// Create content
export async function POST(request) {
  try {
    const session = await auth();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Rate limiting
    const rateLimitOk = await checkRateLimit(ip, '/admin/content', 30, 1);
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
    const {
      content_type,
      title,
      slug: customSlug,
      body: contentBody,
      summary,
      cover_image,
      status = 'draft',
      publish_at,
      unpublish_at,
      meta_title,
      meta_description,
      canonical,
      og_image,
      categories = [],
      tags = []
    } = body;
    
    // Validate required fields
    if (!content_type || !title) {
      return Response.json({ error: 'Content type and title are required' }, { status: 400 });
    }
    
    // Generate slug if not provided
    let finalSlug = customSlug || generateSlug(title);
    
    // Ensure slug is unique
    let slugSuffix = 0;
    let uniqueSlug = finalSlug;
    while (true) {
      const existing = await sql`SELECT id FROM cms_content WHERE slug = ${uniqueSlug}`;
      if (existing.length === 0) break;
      slugSuffix++;
      uniqueSlug = `${finalSlug}-${slugSuffix}`;
    }
    finalSlug = uniqueSlug;
    
    const [newContent] = await sql`
      INSERT INTO cms_content (
        content_type, title, slug, body, summary, cover_image, status,
        publish_at, unpublish_at, meta_title, meta_description, canonical, og_image,
        created_by, updated_by
      ) VALUES (
        ${content_type}, ${title}, ${finalSlug}, ${contentBody}, ${summary}, ${cover_image}, ${status},
        ${publish_at}, ${unpublish_at}, ${meta_title}, ${meta_description}, ${canonical}, ${og_image},
        ${session.user.id}, ${session.user.id}
      ) RETURNING *
    `;
    
    // Save version
    await sql`
      INSERT INTO cms_content_versions (
        content_id, version_number, title, body, summary, meta_title, meta_description,
        canonical, og_image, cover_image, status, created_by
      ) VALUES (
        ${newContent.id}, 1, ${title}, ${contentBody}, ${summary}, ${meta_title}, ${meta_description},
        ${canonical}, ${og_image}, ${cover_image}, ${status}, ${session.user.id}
      )
    `;
    
    // Associate categories
    if (categories.length > 0) {
      for (const categoryId of categories) {
        await sql`
          INSERT INTO cms_content_categories (content_id, category_id)
          VALUES (${newContent.id}, ${categoryId})
          ON CONFLICT DO NOTHING
        `;
      }
    }
    
    // Associate tags
    if (tags.length > 0) {
      for (const tagId of tags) {
        await sql`
          INSERT INTO cms_content_tags (content_id, tag_id)
          VALUES (${newContent.id}, ${tagId})
          ON CONFLICT DO NOTHING
        `;
      }
    }
    
    // Log the action
    await logAction(
      session.user.id,
      'create',
      'content',
      newContent.id,
      null,
      newContent,
      ip,
      request.headers.get('user-agent')
    );
    
    return Response.json(newContent, { status: 201 });
    
  } catch (error) {
    console.error('Content creation error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}

// List content with pagination and filtering
export async function GET(request) {
  try {
    const session = await auth();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Rate limiting
    const rateLimitOk = await checkRateLimit(ip, '/admin/content', 200, 1);
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
    
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const search = url.searchParams.get('search');
    const contentType = url.searchParams.get('type');
    const status = url.searchParams.get('status');
    const category = url.searchParams.get('category');
    
    const offset = (page - 1) * limit;
    
    // Build dynamic query
    let whereConditions = ['1=1'];
    let queryParams = [];
    let paramIndex = 1;
    
    if (search) {
      whereConditions.push(`(title ILIKE $${paramIndex} OR body ILIKE $${paramIndex} OR summary ILIKE $${paramIndex})`);
      queryParams.push(`%${search}%`);
      paramIndex++;
    }
    
    if (contentType) {
      whereConditions.push(`content_type = $${paramIndex}`);
      queryParams.push(contentType);
      paramIndex++;
    }
    
    if (status) {
      whereConditions.push(`status = $${paramIndex}`);
      queryParams.push(status);
      paramIndex++;
    }
    
    if (category) {
      whereConditions.push(`id IN (
        SELECT content_id FROM cms_content_categories 
        WHERE category_id = $${paramIndex}
      )`);
      queryParams.push(category);
      paramIndex++;
    }
    
    const whereClause = whereConditions.join(' AND ');
    
    // Get total count
    const countQuery = `SELECT COUNT(*) as total FROM cms_content c WHERE ${whereClause}`;
    const [countResult] = await sql(countQuery, queryParams);
    const total = parseInt(countResult.total);
    
    // Get content with pagination
    const contentQuery = `
      SELECT 
        c.*,
        u1.name as created_by_name,
        u2.name as updated_by_name,
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
      LEFT JOIN auth_users u1 ON c.created_by = u1.id
      LEFT JOIN auth_users u2 ON c.updated_by = u2.id
      LEFT JOIN cms_content_categories cc ON c.id = cc.content_id
      LEFT JOIN cms_categories cat ON cc.category_id = cat.id
      LEFT JOIN cms_content_tags ct ON c.id = ct.content_id
      LEFT JOIN cms_tags tag ON ct.tag_id = tag.id
      WHERE ${whereClause}
      GROUP BY c.id, u1.name, u2.name
      ORDER BY c.updated_at DESC
      LIMIT $${paramIndex} OFFSET $${paramIndex + 1}
    `;
    
    queryParams.push(limit, offset);
    const content = await sql(contentQuery, queryParams);
    
    return Response.json({
      content,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
    
  } catch (error) {
    console.error('Content list error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}