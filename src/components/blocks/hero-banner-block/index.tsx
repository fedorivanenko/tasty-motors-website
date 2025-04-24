import * as React from 'react'

import type { Media } from '@/payload-types'
import { HeroVideo } from './hero-video'

export type HeroBannerBlockProps = {
  blockType: 'hero-banner'
  video: Media
  fallbackImage: Media
  headline: string
  subheadline: string
  bottomNote: string
  locations: {
    label: string
    phone: string
  }[]
}

export const HeroBannerBlock = ({
  headline,
  subheadline,
  bottomNote,
  video,
  fallbackImage,
  locations,
}: HeroBannerBlockProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <HeroVideo video={video} fallbackImage={fallbackImage} />

      <div className="relative z-20 text-white p-12">
        <h1 className="text-5xl font-bold">{headline}</h1>
        {subheadline && <p className="text-xl mt-4">{subheadline}</p>}
        {bottomNote && <p className="mt-2 text-sm opacity-70">{bottomNote}</p>}
      </div>
    </section>
  )
}
