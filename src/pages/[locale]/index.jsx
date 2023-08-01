import { Stack } from '@mui/material'

import { getStaticPaths } from '@/features/i18n/server'

import { AppLayout } from '@/features/layout'
import {
  HomeHero,
  HomeIntro,
  HomeServices,
  HomeTestimonials,
  HomeVideo,
  HomeWho,
  HomeWish,
} from '@/features/pages/home'

import {
  depoimentoContentService,
  servicoContentService,
} from '@/features/content'
import { buildStaticProps } from '@/features/pages/server'

export async function getStaticProps({ params }) {
  const propsWrapper = await buildStaticProps(params, 'home')

  const locale = params?.locale || 'pt'

  const depoimentos = depoimentoContentService.getAllDepoimentos(locale)
  const servicos = servicoContentService.getAllServicos(locale)

  propsWrapper.props.depoimentos = depoimentos
  propsWrapper.props.servicos = servicos

  return propsWrapper
}

export { getStaticPaths }

// TODo: add SEO
export default function HomePage({ page, depoimentos, servicos }) {
  return (
    <AppLayout
      title={page.title}
      description={page.description}
      image={page.image}
    >
      <Stack>
        <HomeHero />
        <HomeIntro />
        <HomeWho />
        <HomeVideo />
        <HomeServices servicos={servicos} />
        <HomeTestimonials depoimentos={depoimentos} />
        <HomeWish />
      </Stack>
    </AppLayout>
  )
}
