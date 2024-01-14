import PropTypes from 'prop-types'
import { Stack } from '@mui/material'

import { getStaticPaths } from '@/features/i18n/server'

import { AppLayout } from '@/features/layout'
import {
  HomeBannerToServices,
  HomeCTA,
  HomeHero,
  HomeServices,
  HomeTestimonials,
  HomeWho,
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

HomePage.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  depoimentos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      testimonial: PropTypes.string.isRequired,
      position: PropTypes.string,
    })
  ).isRequired,
  servicos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default function HomePage({ page, depoimentos, servicos }) {
  return (
    <AppLayout
      title={page.title}
      description={page.description}
      image={page.image}
    >
      <Stack gap={8}>
        <HomeHero />
        <HomeWho />
        <HomeBannerToServices />
        <HomeServices servicos={servicos} />
        <HomeTestimonials depoimentos={depoimentos} />
        <HomeCTA />
      </Stack>
    </AppLayout>
  )
}
