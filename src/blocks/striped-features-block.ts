import type { Block } from 'payload'

export const StripedFeatureBlock: Block = {
  slug: 'striped-features',
  labels: {
    singular: 'Striped Feature Block',
    plural: 'Striped Feature Blocks',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Anchor / Section Name',
      required: false,
      defaultValue: 'feautres',
    },
    {
      name: 'features',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
