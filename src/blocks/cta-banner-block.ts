import type { Block } from 'payload'

export const CTABannerBlock: Block = {
  slug: 'cta-banner',
  labels: {
    singular: 'CTA Banner',
    plural: 'CTA Banners',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Anchor / Section Name',
      required: false,
      defaultValue: 'cta-banner',
    },
    {
      name: 'topText',
      type: 'text',
      required: true,
      defaultValue: 'Still thinking?',
    },
    {
      name: 'ctaText',
      type: 'text',
      required: true,
      defaultValue: "Let's talk",
    },
    {
      name: 'ctaLink',
      type: 'text',
      required: true,
      defaultValue: '/contact',
    },
  ],
}
