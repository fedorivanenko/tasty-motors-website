import type { Block } from 'payload'

export const HeroBannerBlock: Block = {
  slug: 'hero-banner',
  labels: {
    singular: 'Hero Banner',
    plural: 'Hero Banners',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Anchor / Section Name',
      required: true,
      defaultValue: 'hero-banner',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      defaultValue: 'TASTIEST CARS.',
    },
    {
      name: 'subheadline',
      type: 'text',
      defaultValue: 'IN DUBAI IN 7 DAYS.',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'locations',
      type: 'array',
      label: 'Locations / Contacts',
      defaultValue: [
        {
          label: 'ALL WORLD',
          phone: '(675) 393-3102',
        },
        {
          label: 'DUBAI',
          phone: '(675) 393-3102',
        },
      ],
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'phone',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'bottomNote',
      type: 'text',
      label: 'Bottom Note',
      defaultValue: 'IMPORTED WITH TASTE & DELIVERED WITH PACE',
    },
  ],
}
