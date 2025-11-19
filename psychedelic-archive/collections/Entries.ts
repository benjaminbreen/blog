import type { CollectionConfig } from 'payload'

export const Entries: CollectionConfig = {
  slug: 'entries',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'era', 'status', 'updatedAt'],
  },
  access: {
    read: ({ req: { user } }) => {
      // Public can read published entries
      if (!user) {
        return {
          status: { equals: 'published' },
        }
      }
      // Authenticated users can read all
      return true
    },
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => {
      if (!user) return false
      // Admins and editors can update all
      if (user.role === 'admin' || user.role === 'editor') return true
      // Contributors can only update their own drafts (would need createdBy field)
      return false
    },
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly version of the title',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Brief description for search results and previews',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      hasMany: false,
    },
    {
      name: 'era',
      type: 'relationship',
      relationTo: 'eras',
      required: true,
      hasMany: false,
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'attachments',
      type: 'array',
      fields: [
        {
          name: 'file',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
        },
      ],
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        description: 'Original date of the document/content',
      },
    },
    {
      name: 'author',
      type: 'text',
      admin: {
        description: 'Original author(s) of the document',
      },
    },
    {
      name: 'source',
      type: 'text',
      admin: {
        description: 'Where this document was originally published or found',
      },
    },
    {
      name: 'externalUrl',
      type: 'text',
      admin: {
        description: 'Link to original source if available online',
      },
    },
    {
      name: 'relatedBios',
      type: 'relationship',
      relationTo: 'bios',
      hasMany: true,
      admin: {
        description: 'People mentioned or related to this entry',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Display this entry on the homepage',
      },
    },
  ],
}
