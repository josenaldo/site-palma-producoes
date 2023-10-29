import { Container } from '@mui/material'

import { ContentPageHeader, servicoContentService } from '@/features/content'
import { AppLayout } from '@/features/layout'
import { getStaticPaths } from '@/features/i18n/server'
import { buildStaticProps } from '@/features/pages/server'
import { BannerPortfolio, ServiceList } from '@/features/pages/servicos'
import { ImageBox } from '@/features/ui'
import { useTranslation } from '@/features/i18n'

export { getStaticPaths }

export async function getStaticProps({ params }) {
  const propsWrapper = await buildStaticProps(params, 'servicos')

  const locale = params?.locale || 'pt'

  const servicos = servicoContentService.getAllServicos(locale)

  propsWrapper.props.servicos = servicos

  return propsWrapper
}

export default function ServicosPage({ page, servicos }) {
  const { t } = useTranslation(['common'])

  return (
    <AppLayout
      title={page.title}
      description={page.description}
      image={page.image}
      crumbs={[
        { text: t('common:breadcrumbs.home'), href: '/' },
        {
          text: t('common:breadcrumbs.services'),
          href: '/servicos',
          last: true,
        },
      ]}
    >
      <Container>
        <ContentPageHeader title={page.title} text={page.body} />
      </Container>

      <ImageBox
        src={page.image.url}
        alt={page.image.alt}
        width={page.image.width}
        height={page.image.height}
        aspectRatio="21/9"
        cover
        fullWidth
      />

      <Container>
        <ServiceList services={servicos} />
      </Container>
      <BannerPortfolio />
    </AppLayout>
  )
}
