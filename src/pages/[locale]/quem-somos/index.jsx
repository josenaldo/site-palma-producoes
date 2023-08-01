import { Container } from '@mui/material'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

import {
  pagesContentService,
  sociaContentService,
  parceriaContentService,
} from '@/features/content'

import { AppLayout } from '@/features/layout'
import { Parcerias, Socias } from '@/features/pages/quem-somos'
import { PageHeader } from '@/features/pages'
import { ImageBox } from '@/features/ui'

// TODO: refatorar getStaticProps
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
  return (
    <AppLayout
      title={page.title}
      description={page.description}
      image={page.image}
    >
      <Container>
        <PageHeader title={page.title} text={page.body.raw} />

        <ImageBox
          src={page.image.url}
          alt={page.image.alt}
          width={page.image.width}
          height={page.image.height}
        />

        <Socias socias={socias} />
      </Container>

      <Parcerias parcerias={parcerias} />
    </AppLayout>
  )
}
