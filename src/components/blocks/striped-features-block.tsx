import * as React from 'react'

import { StripedFeatureBlockProps } from '@/types/blocks'

export const StripedFeatureBlock: React.FC<StripedFeatureBlockProps> = ({ features }) => {
  const getStripeColor = (index: number) => {
    if (index % 4 === 0) return 'bg-brand-violet text-background' // Orange
    if (index % 4 === 2) return 'bg-brand-orange text-background' // Violet
    return 'text-foreground' // Cream
  }

  return (
    <div className="w-full text-5xl font-extrabold uppercase tracking-tight leading-none">
      {features.map((item, i) => (
        <div key={i} className={`w-full px-6 py-6 md:py-10 ${getStripeColor(i)}`}>
          {item.text}
        </div>
      ))}
    </div>
  )
}
