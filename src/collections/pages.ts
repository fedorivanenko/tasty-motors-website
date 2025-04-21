import { CollectionConfig } from 'payload'
import { HeroBannerBlock } from '../blocks/hero-banner-block'
import { BrandStatementBlock } from '@/blocks/brand-statement-block'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [HeroBannerBlock, BrandStatementBlock],
    },
  ],
}
