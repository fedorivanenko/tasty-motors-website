import * as React from 'react'

import { WhyUsBlockProps } from '@/types/blocks'

export const WhyUsBlock: React.FC<WhyUsBlockProps> = ({
  title,
  features,
  image,
  badgeTextTop = '',
  badgeTextBottom = '',
}) => {
  return (
    <section className="w-full bg-[#fdf9e9] text-[#2d241f] px-4 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Image + badge */}
        <div className="relative w-full md:w-1/2">
          {image?.url && (
            <img
              src={image.url}
              alt={image.alt || ''}
              className="w-full h-full object-cover rounded-md"
            />
          )}
          <div className="absolute bottom-4 left-4 w-[120px] h-[120px] border-2 border-white rounded-full flex flex-col justify-center items-center text-white text-xs uppercase font-black tracking-wide text-center px-2 leading-tight bg-black/40 backdrop-blur-sm">
            <div className="whitespace-pre-line">{badgeTextTop}</div>
            <div className="text-xl mt-1 whitespace-pre-line">{badgeTextBottom}</div>
          </div>
        </div>

        {/* Features */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-2xl font-bold uppercase">{title}</h2>
          {features.map((feature, i) => (
            <div key={i} className="border-t pt-4">
              <div className="flex gap-4 items-start">
                <span className="text-lg font-black tabular-nums w-8">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-extrabold uppercase text-md tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed tracking-wide">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
