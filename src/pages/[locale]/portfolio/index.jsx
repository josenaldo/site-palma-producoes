import { useTranslation } from 'next-i18next'

import { Box, Card, CardContent, Container, Typography } from '@mui/material'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

import {
  ContentImageCard,
  pagesContentService,
  portfolioContentService,
} from '@/features/content'

import { ImageBox, Link, PageHeader, Tag } from '@/features/ui'

export async function getStaticProps({ params }) {
  const props = await makeStaticProps(['common', 'portfolio'])({ params })
  const locale = params?.locale || 'pt'
  const url = `/${locale}/portfolio`

  const page = pagesContentService.getPageData(url)
  const portfolioList = portfolioContentService.getAllPortfolio(locale)

  props.props.page = page
  props.props.portfolioList = portfolioList

  return props
}

import { useState } from 'react'
import { AppLayout } from '@/features/layout'

export { getStaticPaths }

export default function PortfolioPage({ isoLocale, page, portfolioList }) {
  const { t } = useTranslation(['common', 'portfolio'])

  return (
    <AppLayout
      title={page.title}
      description={page.description}
      image={page.image}
      isoLocale={isoLocale}
      t={t}
    >
      <Container>
        <PageHeader
          title={page.title}
          text={page.body.raw}
          direction="column"
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            gap: 4,
            mb: 8,
          }}
        >
          {portfolioList.map((portfolio) => (
            <ContentImageCard
              key={portfolio.slug}
              t={t}
              url={portfolio.url}
              title={portfolio.title}
              description={portfolio.description}
              image={portfolio.image}
              tags={portfolio.tags}
              
            />
          ))}
        </Box>
      </Container>
    </AppLayout>
  )
}
