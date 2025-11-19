import type { CollectionConfig } from 'payload'

export const Submissions: CollectionConfig = {
  slug: 'submissions',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'submitterEmail', 'status', 'createdAt'],
  },
  access: {
    create: () => true, // Public can submit
    read: ({ req: { user } }) => !!user, // Only authenticated users can read submissions
    update: ({ req: { user } }) => {
      // Only admins and editors can update
      return user?.role === 'admin' || user?.role === 'editor'
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
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Text (Historical Document)',
          value: 'text',
        },
        {
          label: 'Audio/Video',
          value: 'media',
        },
        {
          label: 'Biography',
          value: 'bio',
        },
        {
          label: 'Personal Experience',
          value: 'experience',
        },
        {
          label: 'Other',
          value: 'other',
        },
      ],
    },
    {
      name: 'suggestedEra',
      type: 'text',
      admin: {
        description: 'When this document/content is from',
      },
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Full text or detailed description',
      },
    },
    {
      name: 'sourceInformation',
      type: 'textarea',
      admin: {
        description: 'Where did you find this? Any background information?',
      },
    },
    {
      name: 'attachments',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'submitterName',
      type: 'text',
      required: true,
    },
    {
      name: 'submitterEmail',
      type: 'email',
      required: true,
    },
    {
      name: 'submitterMessage',
      type: 'textarea',
      admin: {
        description: 'Any additional notes from the submitter',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        {
          label: 'Pending Review',
          value: 'pending',
        },
        {
          label: 'Approved',
          value: 'approved',
        },
        {
          label: 'Rejected',
          value: 'rejected',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
    },
    {
      name: 'reviewNotes',
      type: 'textarea',
      admin: {
        description: 'Internal notes for moderators',
      },
    },
    {
      name: 'convertedToEntry',
      type: 'relationship',
      relationTo: 'entries',
      admin: {
        description: 'Link to the entry created from this submission',
      },
    },
  ],
}
