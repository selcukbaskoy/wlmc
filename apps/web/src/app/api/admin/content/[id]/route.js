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

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
}

// Get single content item
export async function GET(request, { params }) {
  try {
    const session = await auth();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const { id } = params;
    
    // Rate limiting
    const rateLimitOk = await checkRateLimit(ip, `/admin/content/${id}`, 100, 1);
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
    
    const content = await sql`
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
      WHERE c.id = ${id}
      GROUP BY c.id, u1.name, u2.name
    `;
    
    if (content.length === 0) {
      return Response.json({ error: 'Content not found' }, { status: 404 });
    }
    
    return Response.json(content[0]);
    
  } catch (error) {
    console.error('Content get error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}

// Update content
export async function PUT(request, { params }) {
  try {
    const session = await auth();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const { id } = params;
    
    // Rate limiting
    const rateLimitOk = await checkRateLimit(ip, `/admin/content/${id}`, 30, 1);
    if (!rateLimitOk) {
      return Response.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }
    
    if (!session?.user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Check permissions
    const hasPermission = await checkPermissions(session.user.id, 'content', 'update');
    if (!hasPermission) {
      return Response.json({ error: 'Insufficient permissions' }, { status: 403 });
    }
    
    // Get existing content for audit log
    const [existing] = await sql`SELECT * FROM cms_content WHERE id = ${id}`;
    if (!existing) {
      return Response.json({ error: 'Content not found' }, { status: 404 });
    }
    
    const body = await request.json();
    const {
      title,
      slug: customSlug,
      body: contentBody,
      summary,
      cover_image,
      status,
      publish_at,
      unpublish_at,
      meta_title,
      meta_description,
      canonical,
      og_image,
      categories = [],
      tags = []
    } = body;
    
    // Handle slug update
    let finalSlug = existing.slug;
    if (customSlug && customSlug !== existing.slug) {
      // Check if new slug is unique
      const slugExists = await sql`SELECT id FROM cms_content WHERE slug = ${customSlug} AND id != ${id}`;
      if (slugExists.length > 0) {
        return Response.json({ error: 'Slug already exists' }, { status: 400 });
      }
      finalSlug = customSlug;
    } else if (title && title !== existing.title && !customSlug) {
      // Auto-generate slug from new title if no custom slug provided
      let newSlug = generateSlug(title);
      let slugSuffix = 0;
      let uniqueSlug = newSlug;
      while (true) {
        const slugExists = await sql`SELECT id FROM cms_content WHERE slug = ${uniqueSlug} AND id != ${id}`;
        if (slugExists.length === 0) break;
        slugSuffix++;
        uniqueSlug = `${newSlug}-${slugSuffix}`;
      }
      finalSlug = uniqueSlug;
    }
    
    // Build update query dynamically
    let updateFields = [];
    let updateValues = [];
    let paramIndex = 1;
    
    const fieldsToUpdate = {
      title, slug: finalSlug, body: contentBody, summary, cover_image, status,
      publish_at, unpublish_at, meta_title, meta_description, canonical, og_image
    };
    
    Object.entries(fieldsToUpdate).forEach(([field, value]) => {
      if (value !== undefined) {
        updateFields.push(`${field} = $${paramIndex}`);
        updateValues.push(value);
        paramIndex++;
      }
    });
    
    updateFields.push(`updated_by = $${paramIndex}`, `updated_at = NOW()`, `version = version + 1`);
    updateValues.push(session.user.id);
    
    const updateQuery = `
      UPDATE cms_content 
      SET ${updateFields.join(', ')}
      WHERE id = $${paramIndex + 1}
      RETURNING *
    `;
    updateValues.push(id);
    
    const [updatedContent] = await sql(updateQuery, updateValues);
    
    // Save new version
    await sql`
      INSERT INTO cms_content_versions (
        content_id, version_number, title, body, summary, meta_title, meta_description,
        canonical, og_image, cover_image, status, created_by
      ) VALUES (
        ${id}, ${updatedContent.version}, ${updatedContent.title}, ${updatedContent.body}, 
        ${updatedContent.summary}, ${updatedContent.meta_title}, ${updatedContent.meta_description},
        ${updatedContent.canonical}, ${updatedContent.og_image}, ${updatedContent.cover_image}, 
        ${updatedContent.status}, ${session.user.id}
      )
    `;
    
    // Update categories
    await sql`DELETE FROM cms_content_categories WHERE content_id = ${id}`;
    if (categories.length > 0) {
      for (const categoryId of categories) {
        await sql`
          INSERT INTO cms_content_categories (content_id, category_id)
          VALUES (${id}, ${categoryId})
        `;
      }
    }
    
    // Update tags
    await sql`DELETE FROM cms_content_tags WHERE content_id = ${id}`;
    if (tags.length > 0) {
      for (const tagId of tags) {
        await sql`
          INSERT INTO cms_content_tags (content_id, tag_id)
          VALUES (${id}, ${tagId})
        `;
      }
    }
    
    // Log the action
    await logAction(
      session.user.id,
      'update',
      'content',
      id,
      existing,
      updatedContent,
      ip,
      request.headers.get('user-agent')
    );
    
    return Response.json(updatedContent);
    
  } catch (error) {
    console.error('Content update error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}

// Delete content
export async function DELETE(request, { params }) {
  try {
    const session = await auth();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const { id } = params;
    
    // Rate limiting
    const rateLimitOk = await checkRateLimit(ip, `/admin/content/${id}`, 10, 1);
    if (!rateLimitOk) {
      return Response.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }
    
    if (!session?.user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Check permissions
    const hasPermission = await checkPermissions(session.user.id, 'content', 'delete');
    if (!hasPermission) {
      return Response.json({ error: 'Insufficient permissions' }, { status: 403 });
    }
    
    // Get existing content for audit log
    const [existing] = await sql`SELECT * FROM cms_content WHERE id = ${id}`;
    if (!existing) {
      return Response.json({ error: 'Content not found' }, { status: 404 });
    }
    
    // Delete content (cascading deletes will handle related records)
    await sql`DELETE FROM cms_content WHERE id = ${id}`;
    
    // Log the action
    await logAction(
      session.user.id,
      'delete',
      'content',
      id,
      existing,
      null,
      ip,
      request.headers.get('user-agent')
    );
    
    return Response.json({ success: true });
    
  } catch (error) {
    console.error('Content delete error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}