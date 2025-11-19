import type { CollectionConfig } from 'payload'

export const Eras: CollectionConfig = {
  slug: 'eras',
  admin: {
    useAsTitle: 'name',
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
      name: 'startYear',
      type: 'number',
      required: true,
    },
    {
      name: 'endYear',
      type: 'number',
    },
    {
      name: 'description',
      type: 'richText',
      admin: {
        description: 'Historical context for this era',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Used for sorting eras chronologically',
      },
    },
  ],
}
