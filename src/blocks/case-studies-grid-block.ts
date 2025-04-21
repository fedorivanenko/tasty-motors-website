import type { Block } from 'payload'

export const CaseStudiesGridBlock: Block = {
  slug: 'case-studies',
  labels: {
    singular: 'Case Study Grid',
    plural: 'Case Study Grids',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Anchor / Section Name',
      required: true,
      defaultValue: 'case-studies',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'images',
          type: 'array',
          required: true,
          minRows: 3,
          maxRows: 3,
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        {
          name: 'request',
          type: 'text',
          required: true,
        },
        {
          name: 'solution',
          type: 'textarea',
          required: true,
        },
        {
          name: 'model',
          type: 'text',
          required: true,
        },
        {
          name: 'price',
          type: 'number',
          required: true,
        },
        {
          name: 'timeframe',
          type: 'text',
          required: true,
          defaultValue: 'WEEK',
        },
      ],
    },
  ],
}
