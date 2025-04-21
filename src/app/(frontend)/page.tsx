import { headers as getHeaders } from 'next/headers'
import { notFound } from 'next/navigation'

import { getPayload } from 'payload'
import config from '@/payload.config'

import type { Page } from '@/payload-types'

import { LayoutRenderer } from '@/components/layout-renderer'
import { Menu } from '@/components/menu'

import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payload = await getPayload({ config })

  const { user } = await payload.auth({ headers })

  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
    limit: 1,
    user,
  })

  const page = result.docs[0] as Page | undefined

  if (!page) return notFound()

  return (
    <>
      {page.layout && (
        <>
          <Menu blocks={page.layout as any} />
          <LayoutRenderer layout={page.layout as any} />
        </>
      )}
    </>
  )
}
