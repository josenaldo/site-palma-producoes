import { Stack } from '@mui/material'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

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

export { getStaticPaths }

// TODO: refatorar getStaticProps
export async function getStaticProps({ params }) {
  const propsWrapper = await makeStaticProps(['common', 'home'])({ params })
  const locale = params?.locale || 'pt'

  const depoimentos = depoimentoContentService.getAllDepoimentos(locale)
  const servicos = servicoContentService.getAllServicos(locale)

  propsWrapper.props.depoimentos = depoimentos
  propsWrapper.props.servicos = servicos

  return propsWrapper
}

// TODo: add SEO
export default function HomePage({ depoimentos, servicos }) {
  return (
    <AppLayout>
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
