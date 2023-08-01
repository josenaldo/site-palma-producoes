import { Container } from '@mui/material'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

import { pagesContentService, servicoContentService } from '@/features/content'
import { AppLayout } from '@/features/layout'
import { PageHeader } from '@/features/pages'
import { BannerPortfolio, ServiceList } from '@/features/pages/servicos'
import { ImageBox } from '@/features/ui'

export { getStaticPaths }

// TODO: refatorar getStaticProps
export async function getStaticProps({ params }) {
  const props = await makeStaticProps(['common', 'servicos'])({ params })
  const locale = params?.locale || 'pt'
  const url = `/${locale}/servicos`

  const page = pagesContentService.getPageData(url)
  const servicos = servicoContentService.getAllServicos(locale)

  props.props.page = page
  props.props.servicos = servicos

  return props
}

export default function ServicosPage({ page, servicos }) {
  return (
    <AppLayout
      title={page.title}
      description={page.description}
      image={page.image}
    >
      <Container sx={{ mb: 4 }}>
        <PageHeader title={page.title} text={page.body.raw} />

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
