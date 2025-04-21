import * as React from 'react'

import { ColorsAccordionBlockProps } from '@/types/blocks'

export const ColorsAccordionBlock: React.FC<ColorsAccordionBlockProps> = ({
  colors,
  rightImage,
  caption,
}) => {
  return (
    <section className="w-full bg-[#fdf9e9] text-[#2d241f]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Column – Accordion */}
        <div className="flex flex-col divide-y divide-[#dcd6be]">
          {colors.map((color, i) => (
            <div
              key={i}
              className="p-6 font-black text-lg uppercase tracking-wide flex items-center gap-3"
              style={{
                backgroundColor: color.hex,
                color: color.textColor || '#2d241f',
                backgroundImage: color.backgroundPattern?.url
                  ? `url(${color.backgroundPattern.url})`
                  : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <span className="text-2xl leading-none">•</span>
              {color.label}
            </div>
          ))}
        </div>

        {/* Right Column – Image */}
        <div className="relative w-full h-full">
          {rightImage?.url && (
            <img
              src={rightImage.url}
              alt={rightImage.alt || ''}
              className="object-cover w-full h-full"
            />
          )}
          {caption && (
            <div className="absolute bottom-4 right-4 text-xs uppercase font-semibold text-white bg-black/60 px-2 py-1 rounded-sm backdrop-blur-sm">
              {caption}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
