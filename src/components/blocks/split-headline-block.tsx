import * as React from 'react'

import { SplitHeadlineBlockProps } from '@/types/blocks'

export const SplitHeadlineBlock: React.FC<SplitHeadlineBlockProps> = ({ lines }) => {
  return (
    <section className="w-full bg-[#fdf9e9] px-6 py-12 text-[#2d241f]">
      <div className="flex flex-col gap-y-6 max-w-7xl mx-auto">
        {lines.map((line, i) => (
          <div
            key={i}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-5xl md:text-6xl font-black uppercase leading-none tracking-tight gap-4 border-b border-[#dcd6be] pb-2"
          >
            {line.columns.map((col, j) => (
              <div key={j}>{col.text}</div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
