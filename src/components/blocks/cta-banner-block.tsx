import * as React from 'react'
import { ArrowRight } from 'lucide-react'

type CTABannerBlockProps = {
  topText: string
  ctaText: string
  ctaLink: string
}

export const CTABannerBlock: React.FC<CTABannerBlockProps> = ({ topText, ctaText, ctaLink }) => {
  return (
    <section className="w-full bg-[#fdf9e9] text-[#2d241f]">
      <a href={ctaLink} className="block w-full">
        <div className="text-4xl md:text-5xl font-black uppercase tracking-tight px-6 pt-16 pb-6 text-left max-w-7xl mx-auto">
          {topText}
        </div>

        <div className="w-full relative bg-[#f15a29] text-[#2d241f] px-6 py-10 md:py-14">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-5xl md:text-6xl font-black uppercase tracking-tight">
            <span>{ctaText}</span>
            <ArrowRight className="w-12 h-12" />
          </div>
        </div>
      </a>
    </section>
  )
}
