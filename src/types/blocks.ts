export type HeroBannerBlockProps = {
  blockType: 'hero-banner'
  name?: string
  headline: string
  subheadline?: string
  backgroundImage: {
    url?: string
    alt?: string
  }
  bottomNote?: string
  locations?: {
    label: string
    phone: string
  }[]
}

export type BrandStatementBlockProps = {
  blockType: 'brand-statement'
  name?: string
  heading: string
  body: string
  alignment?: 'left' | 'center' | 'reverse'
}

export type WhyUsBlockProps = {
  blockType: 'why-us'
  name?: string
  title: string
  features: {
    title: string
    description: string
  }[]
  image: {
    url?: string
    alt?: string
  }
  badgeTextTop?: string
  badgeTextBottom?: string
}

export type StripedFeatureBlockProps = {
  blockType: 'striped-features'
  name?: string
  features: {
    text: string
  }[]
}

export type CarGridBlockProps = {
  blockType: 'car-grid'
  name?: string
  cars: {
    model: string
    price: number
    image: {
      url?: string
      alt?: string
    }
    orderLink?: string
  }[]
}

export type SplitHeadlineBlockProps = {
  blockType: 'split-headline'
  name?: string
  lines: {
    columns: {
      text: string
    }[]
  }[]
}

export type ColorsAccordionBlockProps = {
  blockType: 'colors-accordion'
  name?: string
  colors: {
    label: string
    hex: string
    textColor?: string
    backgroundPattern?: {
      url?: string
    }
  }[]
  rightImage: {
    url?: string
    alt?: string
  }
  caption?: string
}

export type CaseStudiesGridBlockProps = {
  blockType: 'case-studies'
  name?: string
  items: {
    request: string
    solution: string
    model: string
    price: number
    timeframe: string
    highlighted?: boolean
    images: {
      image: {
        url?: string
        alt?: string
      }
    }[]
  }[]
}

export type SupportAccordionBlockProps = {
  blockType: 'support-accordion'
  name?: string
  items: {
    title: string
    tagline?: string
    description: string
    ctaLabel?: string
    ctaLink?: string
  }[]
}

export type CTABannerBlockProps = {
  blockType: 'cta-banner'
  name?: string
  topText: string
  ctaText: string
  ctaLink: string
}
