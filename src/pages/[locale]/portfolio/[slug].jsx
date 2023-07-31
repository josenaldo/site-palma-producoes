import { Container } from '@mui/material'

import { ContentPage, portfolioContentService } from '@/features/content'
import { AppLayout } from '@/features/layout'
import {
  getStaticPaths as i18nGetStaticPaths,
  makeStaticProps,
} from '@/features/i18n/server'

export function getStaticPaths() {
  const i18nPaths = i18nGetStaticPaths()
  const portfolioList = portfolioContentService.getAllPortfolio('pt')
  const paths = []

  portfolioList.map((portfolio) => {
    const p = i18nPaths.paths.map((path) => {
      const { locale } = path.params

      return {
        params: {
          locale,
          slug: portfolio.slug,
        },
      }
    })

    paths.push(...p)
  })

  const newPathsObject = {
    ...i18nPaths,
    paths: paths,
  }

  return newPathsObject
}

export async function getStaticProps(ctx) {
  const i18nPropsFunc = makeStaticProps(['common', 'portfolio'])
  const { slug, locale } = ctx.params
  const url = `/${locale}/portfolio/${slug}`

  const i18nProps = await i18nPropsFunc(ctx)
  const portfolio = portfolioContentService.getPortfolioData(url)

  const props = {
    props: {
      ...i18nProps.props,
      portfolio,
    },
  }

  return props
}

export default function PortfolioPage({ portfolio }) {
  return (
    <AppLayout
      title={portfolio.title}
      description={portfolio.description}
      image={portfolio.image}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        <ContentPage
          title={portfolio.title}
          image={portfolio.image}
          body={portfolio.body}
          tags={portfolio.tags}
          author={portfolio.author}
          date={portfolio.date}
          url={portfolio.url}
          ns={['common', 'portfolio']}
        />
      </Container>
    </AppLayout>
  )
}
