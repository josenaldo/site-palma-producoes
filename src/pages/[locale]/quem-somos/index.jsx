import { Container } from '@mui/material'

import { sociaContentService, parceriaContentService } from '@/features/content'
import { getStaticPaths } from '@/features/i18n/server'
import { AppLayout } from '@/features/layout'
import { PageHeader } from '@/features/pages'
import { Parcerias, Socias } from '@/features/pages/quem-somos'
import { buildStaticProps } from '@/features/pages/server'
import { ImageBox } from '@/features/ui'

export async function getStaticProps({ params }) {
  const propsWrapper = await buildStaticProps(params, 'quem-somos')
  const locale = params?.locale || 'pt'
  const socias = sociaContentService.getAllSocias(locale)
  const parcerias = parceriaContentService.getAllParcerias(locale)

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
          priority
        />

        <Socias socias={socias} />
      </Container>

      <Parcerias parcerias={parcerias} />
    </AppLayout>
  )
}
