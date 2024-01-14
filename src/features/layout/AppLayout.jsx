import { Box } from '@mui/material'
import { NextSeo } from 'next-seo'

import Footer from '@/features/layout/Footer'
import { Header } from '@/features/layout/Header'
import { useMemo } from 'react'
import { seoConfig, APP_DEFAULT_IMAGE } from '@/data'

import { useTranslation } from '@/features/i18n'
import { Breadcrumbs } from '@/features/ui'
import useIsHome from '@/features/layout/useIsHome'
import ScrollTop from '@/features/layout/Header/ScrollTop'

export default function AppLayout({
  title,
  description,
  image,
  children,
  crumbs,
}) {
  const { t, isoLocale } = useTranslation(['common'])
  const isHome = useIsHome()

  const og = useMemo(() => {
    const imageObject = image
      ? {
          url: image.url
            ? `${process.env.NEXT_PUBLIC_SITE_URL}${image.url}`
            : APP_DEFAULT_IMAGE.url,
          width: image.width || APP_DEFAULT_IMAGE.width,
          height: image.height || APP_DEFAULT_IMAGE.height,
          alt: image.alt || APP_DEFAULT_IMAGE.alt,
          type: image.type || APP_DEFAULT_IMAGE.type,
        }
      : seoConfig.openGraph.images[0]

    const openGraph = {
      title: title || seoConfig.title,
      description: description || seoConfig.description,
      locale: isoLocale || seoConfig.openGraph.locale,
      images: [imageObject],
    }
    return openGraph
  }, [isoLocale, title, description, image])

  return (
    <>
      <Box
        sx={{
          contain: 'paint',
        }}
      >
        <NextSeo title={title} description={description} openGraph={og} />

        <Header />
        {!isHome && <Breadcrumbs crumbs={crumbs} />}
        <main id="__next">{children}</main>
        <Footer />
      </Box>
      <ScrollTop />
    </>
  )
}
