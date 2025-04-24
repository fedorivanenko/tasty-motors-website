import type { Block } from 'payload'

export const HeroBannerBlock: Block = {
  slug: 'hero-banner',
  labels: {
    singular: 'Hero Banner',
    plural: 'Hero Banners',
  },
  fields: [
    {
      name: 'video',
      type: 'upload',
      relationTo: 'media',
      required: false,
      /*
      validate: (val, { siblingData }) => {
        if (!val && !siblingData?.fallbackImage) {
          return 'Either video or fallback image must be provided.'
        }
        return true
      },
       */
    },
    {
      name: 'fallbackImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
    },
    {
      name: 'subheadline',
      type: 'text',
      required: true,
    },
    {
      name: 'bottomNote',
      type: 'text',
      required: true,
    },
    {
      name: 'locations',
      type: 'array',
      required: true,
      fields: [
        { name: 'label', type: 'text' },
        { name: 'phone', type: 'text' },
      ],
    },
  ],
}
