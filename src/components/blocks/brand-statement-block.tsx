import * as React from 'react'

import { BrandStatementBlockProps } from '@/types/blocks'

export const BrandStatementBlock: React.FC<BrandStatementBlockProps> = ({
  heading,
  body,
  alignment = 'left',
}) => {
  const layoutClass =
    alignment === 'center'
      ? 'text-center items-center justify-center'
      : alignment === 'reverse'
        ? 'md:flex-row-reverse'
        : 'md:flex-row'

  return (
    <section className="w-full px-6 py-16 bg-background text-foreground">
      <div className={`flex flex-col md:flex-row gap-8 max-w-7xl mx-auto ${layoutClass}`}>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight">
            {heading}
          </h2>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-md md:text-lg leading-relaxed font-medium tracking-wide whitespace-pre-line">
            {body}
          </p>
        </div>
      </div>
    </section>
  )
}
;``
