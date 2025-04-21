import type { Block } from 'payload'

export const CarGridBlock: Block = {
  slug: 'car-grid',
  labels: {
    singular: 'Car Grid',
    plural: 'Car Grids',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Anchor / Section Name',
      required: true,
      defaultValue: 'car-grid',
    },
    {
      name: 'cars',
      type: 'array',
      required: true,
      fields: [
        { name: 'model', type: 'text', required: true },
        { name: 'price', type: 'number', required: true },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'orderLink',
          type: 'text',
          label: 'Order Link URL',
          required: false,
        },
      ],
    },
  ],
}
