import { useTranslation } from 'next-i18next'

import { Box, Container } from '@mui/material'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

import {
  ContentImageCard,
  pagesContentService,
  portfolioContentService,
} from '@/features/content'

import { PageHeader, Pagination } from '@/features/ui'
import { AppLayout } from '@/features/layout'
import { useState } from 'react'

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

export { getStaticPaths }

export default function PortfolioPage({ isoLocale, page, portfolioList }) {
  const { t } = useTranslation(['common', 'portfolio'])
  const [pageIndex, setPageIndex] = useState(1)
  const [loading, setLoading] = useState(false)

  const pageSize = 6
  const currentPage = pageIndex > 0 ? pageIndex - 1 : 0

  const portfoliosToShow = portfolioList.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize
  )

  const handleChangePage = (event, value) => {
    console.log('handleChangePage', { event, value })
    setPageIndex(value)
    setLoading(false)
  }

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
          {portfoliosToShow.map((portfolio) => (
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
        <Pagination
          onChange={handleChangePage}
          page={pageIndex}
          count={8}
          loading={false}
          showEllipses={false}
        />
      </Container>
    </AppLayout>
  )
}
