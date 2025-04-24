'use client'

import Image from 'next/image'
import Video from 'next-video'
import type { Media } from '@/payload-types'

type HeroVideoProps = {
  video?: Media
  fallbackImage?: Media
}

export const HeroVideo = ({ video, fallbackImage }: HeroVideoProps) => {
  const videoUrl = video?.url
  const imageUrl = fallbackImage?.url
  const altText = fallbackImage?.alt || 'hero background'

  if (!videoUrl && !imageUrl) return null

  return (
    <div className="absolute inset-0 z-10 w-full h-full">
      <Video src={videoUrl!} autoPlay loop muted playsInline className="object-cover w-full h-full">
        <Image
          slot="poster"
          src={imageUrl!}
          fill
          alt={altText}
          placeholder="blur"
          className="object-cover"
        />
      </Video>
    </div>
  )
}
