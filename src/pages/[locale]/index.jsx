import { Stack } from '@mui/material'
import { useTranslation } from 'next-i18next'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'
import {
  HomeHero,
  HomeIntro,
  HomeServices,
  HomeTestimonials,
  HomeVideo,
  HomeWho,
  HomeWish,
} from '@/features/pages/home'
import { AppLayout } from '@/features/layout'

import {
  depoimentoContentService,
  servicoContentService,
} from '@/features/content'

export { getStaticPaths }

export async function getStaticProps({ params }) {
  const propsWrapper = await makeStaticProps(['common', 'home'])({ params })
  const locale = params?.locale || 'pt'

  const depoimentos = depoimentoContentService.getAllDepoimentos(locale)
  const servicos = servicoContentService.getAllServicos(locale)

  propsWrapper.props.depoimentos = depoimentos
  propsWrapper.props.servicos = servicos

  return propsWrapper
}

export default function HomePage({ depoimentos, servicos }) {
  const { t } = useTranslation(['common', 'home'])

  return (
    <AppLayout t={t}>
      <Stack>
        <HomeHero t={t} />
        <HomeIntro t={t} />
        <HomeWho t={t} />
        <HomeVideo t={t} />
        <HomeServices t={t} servicos={servicos} />
        <HomeTestimonials t={t} depoimentos={depoimentos} />
        <HomeWish t={t} />
      </Stack>
    </AppLayout>
  )
}
