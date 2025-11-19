import type { CollectionConfig } from 'payload'

export const Bios: CollectionConfig = {
  slug: 'bios',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Researcher',
          value: 'researcher',
        },
        {
          label: 'User/Patient',
          value: 'user_patient',
        },
        {
          label: 'Personal History',
          value: 'personal_history',
        },
        {
          label: 'Other',
          value: 'other',
        },
      ],
    },
    {
      name: 'portrait',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'birthDate',
      type: 'text',
      admin: {
        description: 'Can be approximate (e.g., "c. 1920" or "1920-1930")',
      },
    },
    {
      name: 'deathDate',
      type: 'text',
      admin: {
        description: 'Can be approximate',
      },
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Brief summary for listings',
      },
    },
    {
      name: 'biography',
      type: 'richText',
      required: true,
    },
    {
      name: 'relatedEntries',
      type: 'relationship',
      relationTo: 'entries',
      hasMany: true,
    },
    {
      name: 'externalLinks',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
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
  ],
}
