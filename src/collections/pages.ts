import { CollectionConfig } from 'payload'
import { HeroBannerBlock } from '../blocks/hero-banner-block'
import { BrandStatementBlock } from '@/blocks/brand-statement-block'
import { CarGridBlock } from '@/blocks/car-grid-block'
import { CaseStudiesGridBlock } from '@/blocks/case-studies-grid-block'
import { ColorsAccordionBlock } from '@/blocks/colors-accordion-block'
import { CTABannerBlock } from '@/blocks/cta-banner-block'
import { SplitHeadlineBlock } from '@/blocks/split-headline-block'
import { SupportAccordionBlock } from '@/blocks/support-accordion-block'
import { WhyUsBlock } from '@/blocks/why-us-block'
import { StripedFeatureBlock } from '@/blocks/striped-features-block'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  versions: {
    drafts: true,
    maxPerDoc: 10,
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
      blocks: [
        HeroBannerBlock,
        BrandStatementBlock,
        CarGridBlock,
        CaseStudiesGridBlock,
        ColorsAccordionBlock,
        CTABannerBlock,
        SplitHeadlineBlock,
        StripedFeatureBlock,
        SupportAccordionBlock,
        WhyUsBlock,
      ],
    },
  ],
}
