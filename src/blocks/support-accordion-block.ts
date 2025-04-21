import type { Block } from 'payload'

export const SupportAccordionBlock: Block = {
  slug: 'support-accordion',
  labels: {
    singular: 'Support Accordion',
    plural: 'Support Accordions',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Anchor / Section Name',
      required: false,
      defaultValue: 'support-accordion',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'tagline',
          type: 'text',
          required: false,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'ctaLabel',
          type: 'text',
          required: false,
          defaultValue: 'Order',
        },
        {
          name: 'ctaLink',
          type: 'text',
          required: false,
        },
      ],
    },
  ],
}
