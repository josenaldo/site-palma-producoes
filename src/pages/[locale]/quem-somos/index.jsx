import { Container, useMediaQuery, useTheme } from '@mui/material'

import {
  ContentPageHeader,
  sociaContentService,
  parceriaContentService,
} from '@/features/content'
import { getStaticPaths } from '@/features/i18n/server'
import { AppLayout } from '@/features/layout'
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
  const theme = useTheme()

  const isBiggerScreen = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <AppLayout
      title={page.title}
      description={page.description}
      image={page.image}
    >
      <Container>
        <ContentPageHeader
          title={page.title}
          text={page.body}
          titleTextWrap={isBiggerScreen ? 'nowrap' : 'normal'}
        />
      </Container>
      <ImageBox
        src={page.image.url}
        alt={page.image.alt}
        width={page.image.width}
        height={page.image.height}
        priority
        aspectRatio="21/9"
        fullWidth
        cover
      />

      <Container>
        <Socias socias={socias} />
      </Container>

      <Parcerias parcerias={parcerias} />
    </AppLayout>
  )
}
