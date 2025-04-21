import * as React from 'react'

import { CaseStudiesGridBlockProps } from '@/types/blocks'

export const CaseStudiesGridBlock: React.FC<CaseStudiesGridBlockProps> = ({ items }) => {
  return (
    <section className="w-full bg-[#fdf9e9] py-16 px-4 text-[#2d241f]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {items.map((item, i) => {
          return (
            <div key={i} className={`p-4 border bg-[#fdf9e9]'`}>
              {/* Images row */}
              <div className="flex gap-2 mb-4 relative z-10">
                {item.images.map(({ image }, index) => (
                  <img
                    key={index}
                    src={image?.url}
                    alt={image?.alt || ''}
                    className="w-1/3 object-cover aspect-[4/3] rounded"
                  />
                ))}
              </div>

              {/* Request & Solution */}
              <div className="text-xs font-bold uppercase text-gray-600 relative z-10">Request</div>
              <p className="text-md font-semibold mb-4 relative z-10">{item.request}</p>

              <div className="text-xs font-bold uppercase text-gray-600 relative z-10">
                Solution
              </div>
              <p className="text-md mb-4 relative z-10">{item.solution}</p>

              {/* Footer badges */}
              <div className="flex flex-wrap gap-2 mt-2 text-xs font-bold uppercase tracking-wide relative z-10">
                <span className="bg-[#2d241f] text-white px-2 py-1 rounded">{item.model}</span>
                <span className="bg-[#2d241f] text-white px-2 py-1 rounded">
                  ${item.price.toLocaleString()}
                </span>
                <span className="bg-[#2d241f] text-white px-2 py-1 rounded">{item.timeframe}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
