import { useState } from 'react'

import { Box, Container } from '@mui/material'

import { getStaticPaths } from '@/features/i18n/server'

import {
  ContentPageHeader,
  ContentImageCard,
  portfolioContentService,
} from '@/features/content'

import { AppLayout } from '@/features/layout'
import { Pagination } from '@/features/ui'
import { buildStaticProps } from '@/features/pages/server'

export async function getStaticProps({ params }) {
  const propsWrapper = await buildStaticProps(params, 'portfolio')

  const locale = params?.locale || 'pt'
  const portfolioList = portfolioContentService.getAllPortfolio(locale)
  propsWrapper.props.portfolioList = portfolioList

  return propsWrapper
}

export { getStaticPaths }

export default function PortfolioPage({ page, portfolioList }) {
  const [pageIndex, setPageIndex] = useState(1)
  const [loading, setLoading] = useState(false)

  const pageSize = process.env.NEXT_PUBLIC_DEFAULT_PAGE_SIZE || 10
  const currentPage = pageIndex > 0 ? pageIndex - 1 : 0

  const portfoliosToShow = portfolioList.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize
  )

  const handleChangePage = (event, value) => {
    setLoading(true)
    setPageIndex(value)
    setLoading(false)
  }

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
              url={portfolio.url}
              title={portfolio.title}
              image={portfolio.image}
              tags={portfolio.tags}
            />
          ))}
        </Box>
        <Pagination
          onChange={handleChangePage}
          page={pageIndex}
          count={portfolioList.length}
          loading={loading}
          showEllipses={false}
        />
      </Container>
    </AppLayout>
  )
}
