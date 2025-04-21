import type { Block } from 'payload'

export const WhyUsBlock: Block = {
  slug: 'why-us',
  labels: {
    singular: 'Why Us Block',
    plural: 'Why Us Blocks',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Anchor / Section Name',
      required: true,
      defaultValue: 'why-us',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'WHY',
    },
    {
      name: 'features',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'badgeTextTop',
      type: 'text',
      defaultValue: 'MERCEDES\nLIMITED\nEDITION',
    },
    {
      name: 'badgeTextBottom',
      type: 'text',
      defaultValue: 'SCARLET\nCHERRY',
    },
  ],
}
