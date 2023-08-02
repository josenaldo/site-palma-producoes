import { Container } from '@mui/material'

import { servicoContentService } from '@/features/content'
import { getStaticPaths } from '@/features/i18n/server'
import { AppLayout } from '@/features/layout'
import { PageHeader } from '@/features/pages'
import { buildStaticProps } from '@/features/pages/server'
import { BannerPortfolio, ServiceList } from '@/features/pages/servicos'
import { ImageBox } from '@/features/ui'

export { getStaticPaths }

export async function getStaticProps({ params }) {
  const propsWrapper = await buildStaticProps(params, 'servicos')

  const locale = params?.locale || 'pt'

  const servicos = servicoContentService.getAllServicos(locale)

  propsWrapper.props.servicos = servicos

  return propsWrapper
}

export default function ServicosPage({ page, servicos }) {
  return (
    <AppLayout
      title={page.title}
      description={page.description}
      image={page.image}
    >
      <Container sx={{ mb: 4 }}>
        <PageHeader title={page.title} text={page.body} />

        <ImageBox
          src={page.image.url}
          alt={page.image.alt}
          width={page.image.width}
          height={page.image.height}
        />

        <ServiceList services={servicos} />

        <BannerPortfolio />
      </Container>
    </AppLayout>
  )
}
