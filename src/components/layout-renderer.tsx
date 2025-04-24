'use client'

import React from 'react'
import { HeroBannerBlock } from '@/components/blocks/hero-banner-block'
import { BrandStatementBlock } from '@/components/blocks/brand-statement-block'
import { WhyUsBlock } from '@/components/blocks/why-us-block'
import { StripedFeatureBlock } from '@/components/blocks/striped-features-block'
import { CarGridBlock } from '@/components/blocks/car-grid-block'
import { ColorsAccordionBlock } from '@/components/blocks/colors-accordion-block'
import { CaseStudiesGridBlock } from '@/components/blocks/case-studies-grid-block'
import { CTABannerBlock } from '@/components/blocks/cta-banner-block'

import {
  HeroBannerBlockProps,
  SplitHeadlineBlockProps,
  BrandStatementBlockProps,
  WhyUsBlockProps,
  StripedFeatureBlockProps,
  CarGridBlockProps,
  ColorsAccordionBlockProps,
  CaseStudiesGridBlockProps,
  CTABannerBlockProps,
  StatsBlockProps,
} from '@/types/blocks'

type Block =
  | HeroBannerBlockProps
  | BrandStatementBlockProps
  | WhyUsBlockProps
  | StripedFeatureBlockProps
  | CarGridBlockProps
  | SplitHeadlineBlockProps
  | ColorsAccordionBlockProps
  | CaseStudiesGridBlockProps
  | CTABannerBlockProps
  | StatsBlockProps

interface LayoutRendererProps {
  layout: Block[]
}

import { SplitHeadlineBlock } from '@/components/blocks/split-headline-block'

export const LayoutRenderer: React.FC<LayoutRendererProps> = ({ layout }) => {
  return (
    <>
      {layout.map((block, i) => {
        switch (block.blockType) {
          case 'cta-banner':
            return <CTABannerBlock key={i} {...block} />
          case 'case-studies':
            return <CaseStudiesGridBlock key={i} {...block} />
          case 'colors-accordion':
            return <ColorsAccordionBlock key={i} {...block} />
          case 'split-headline':
            return <SplitHeadlineBlock key={i} {...block} />
          case 'car-grid':
            return <CarGridBlock key={i} {...block} />
          case 'striped-features':
            return <StripedFeatureBlock key={i} {...block} />
          case 'why-us':
            return <WhyUsBlock key={i} {...block} />
          case 'brand-statement':
            return <BrandStatementBlock key={i} {...block} />
          case 'hero-banner':
            return <HeroBannerBlock key={i} {...block} />
          default:
            return <div key={i}>Unknown block</div>
        }
      })}
    </>
  )
}
