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
