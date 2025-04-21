'use client'

import React from 'react'
import { HeroBannerBlock as HeroBanner } from '@/components/blocks/hero-banner-block'
import { HeroBannerBlockProps } from '@/types/blocks'

type Block = HeroBannerBlockProps

interface LayoutRendererProps {
  layout: Block[]
}

export const LayoutRenderer: React.FC<LayoutRendererProps> = ({ layout }) => {
  return (
    <>
      {layout.map((block, i) => {
        const anchorId = `block-${block.name}`
        switch (block.blockType) {
          case 'hero-banner':
            return (
              <section key={i} id={anchorId}>
                <HeroBanner key={i} {...block} />
              </section>
            )
          default:
            return <div key={i}>Unknown block</div>
        }
      })}
    </>
  )
}
