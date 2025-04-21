import type { Block } from 'payload'

export const ColorsAccordionBlock: Block = {
  slug: 'color-accordion',
  labels: {
    singular: 'Color Palette Accordion',
    plural: 'Color Palette Accordions',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Anchor / Section Name',
      required: false,
      defaultValue: 'colors-accordion',
    },
    {
      name: 'colors',
      type: 'array',
      required: true,
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'hex', type: 'text', required: true },
        {
          name: 'textColor',
          type: 'text',
          required: false,
          defaultValue: '#2d241f',
        },
        {
          name: 'backgroundPattern',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
    {
      name: 'rightImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
      required: false,
      defaultValue: '',
    },
  ],
}
