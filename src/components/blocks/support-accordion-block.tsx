'use client'

import * as React from 'react'

import { SupportAccordionBlockProps } from '@/types/blocks'

export const SupportAccordionBlock: React.FC<SupportAccordionBlockProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <section className="bg-[#fdf9e9] text-[#2d241f] px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-2">
        {items.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={index}
              className={`transition-all ${isOpen ? 'bg-[#b236a4] text-white' : 'bg-[#fdf9e9]'}`}
            >
              <button
                className="w-full text-left px-6 py-5 flex gap-6 items-start"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="text-2xl font-black tabular-nums w-8">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-black uppercase">{item.title}</h3>
                  {item.tagline && (
                    <p
                      className={`text-xs font-semibold uppercase tracking-wider mt-1 ${
                        isOpen ? 'text-white/80' : 'text-[#555]'
                      }`}
                    >
                      {item.tagline}
                    </p>
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="px-20 pb-6 pt-0 text-sm leading-relaxed">
                  <p className="mb-3">{item.description}</p>
                  {item.ctaLink && (
                    <a
                      href={item.ctaLink}
                      className="text-yellow-300 font-bold uppercase text-sm tracking-wide"
                    >
                      {item.ctaLabel || 'Order'}
                    </a>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
