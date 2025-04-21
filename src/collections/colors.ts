import type { CollectionConfig } from 'payload'

export const BrandColors: CollectionConfig = {
  slug: 'brand-colors',
  labels: {
    singular: 'Brand Color',
    plural: 'Brand Colors',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'hex',
      type: 'text',
      required: true,
    },
    {
      name: 'textColor',
      type: 'text',
      required: false,
      defaultValue: '#2d241f',
    },
  ],
}
