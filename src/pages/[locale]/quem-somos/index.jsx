import { useState } from 'react'
import { useTranslation } from '@/features/i18n'

import { Container } from '@mui/material'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

import {
  pagesContentService,
  sociaContentService,
  parceriaContentService,
} from '@/features/content'

import { ImageBox, PageHeader } from '@/features/ui'
import { AppLayout } from '@/features/layout'
import { Parcerias, Socias } from '@/features/pages/quem-somos'

export async function getStaticProps({ params }) {
  const propsWrapper = await makeStaticProps(['common', 'quem-somos'])({
    params,
  })
  const locale = params?.locale || 'pt'
  const url = `/${locale}/quem-somos`

  const page = pagesContentService.getPageData(url)
  const socias = sociaContentService.getAllSocias(locale)
  const parcerias = parceriaContentService.getAllParcerias(locale)

  propsWrapper.props.page = page
  propsWrapper.props.socias = socias
  propsWrapper.props.parcerias = parcerias

  return propsWrapper
}

export { getStaticPaths }

export default function QuemSomosPage({ isoLocale, page, socias, parcerias }) {
  const { t } = useTranslation(['common', 'quem-somos'])

  return (
    <AppLayout
      title={page.title}
      description={page.description}
      image={page.image}
      isoLocale={isoLocale}
      t={t}
    >
      <Container>
        <PageHeader title={page.title} text={page.body.raw} />

        <ImageBox
          src={page.image.url}
          alt={page.image.alt}
          width={page.image.width}
          height={page.image.height}
        />

        <Socias socias={socias} t={t} />
      </Container>

      <Parcerias parcerias={parcerias} t={t} />
    </AppLayout>
  )
}
