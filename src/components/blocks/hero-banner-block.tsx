import * as React from 'react'
import Image from 'next/image'

import { HeroBannerBlockProps } from '@/types/blocks'

export const HeroBannerBlock: React.FC<HeroBannerBlockProps> = ({
  headline,
  subheadline,
  backgroundImage,
  bottomNote,
  locations = [],
}) => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-foreground text-background">
      {backgroundImage?.url && (
        <Image
          src={backgroundImage.url}
          alt={backgroundImage.alt || 'Hero background'}
          fill
          className="object-cover z-10"
          priority
        />
      )}

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold uppercase leading-tight">{headline}</h1>
        <p className="text-xl md:text-2xl mt-2 uppercase">{subheadline}</p>

        {locations.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center text-sm">
            {locations.map((loc, i) => (
              <div key={i} className="flex flex-col items-center">
                {loc.label}
                <span className="mt-1">{loc.phone}</span>
              </div>
            ))}
          </div>
        )}

        {bottomNote && (
          <>
            <p className="text-xs uppercase tracking-wide opacity-75">{bottomNote}</p>
          </>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0" />
    </section>
  )
}
