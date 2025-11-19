import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
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
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'icon',
      type: 'text',
      admin: {
        description: 'Lucide icon name (e.g., FileText, Video, User)',
      },
    },
    {
      name: 'color',
      type: 'select',
      options: [
        { label: 'Purple', value: 'purple' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
        { label: 'Orange', value: 'orange' },
        { label: 'Red', value: 'red' },
        { label: 'Pink', value: 'pink' },
      ],
      defaultValue: 'purple',
    },
  ],
}
