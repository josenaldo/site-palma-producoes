import { useEffect, useState } from 'react'

import { Box, Card, Container } from '@mui/material'

import {
  ContentPageHeader,
  ContentCard,
  ContentImageCard,
  ContentCategoryCard,
  postContentService,
} from '@/features/content'
import { AppLayout } from '@/features/layout'
import { useTranslation } from '@/features/i18n'
import { getStaticPaths } from '@/features/i18n/server'
import { buildStaticProps } from '@/features/pages/server'
import { Pagination } from '@/features/ui'

export async function getStaticProps({ params }) {
  const propsWrapper = await buildStaticProps(params, 'blog')

  const locale = params?.locale || 'pt'

  const startPage = 1
  const itemsPerPage = process.env.NEXT_PUBLIC_DEFAULT_PAGE_SIZE || 10
  const pageCount = postContentService.getPostsPageCount(locale, itemsPerPage)
  const posts = postContentService.getPosts(locale, startPage, itemsPerPage)

  propsWrapper.props.itemsPerPage = itemsPerPage
  propsWrapper.props.pageCount = pageCount
  propsWrapper.props.posts = posts

  return propsWrapper
}

export { getStaticPaths }

export default function BlogPage({ page, itemsPerPage, posts, pageCount }) {
  const { t, isoLocale, locale } = useTranslation(['common'])

  const [pageIndex, setPageIndex] = useState(1)
  const [loading, setLoading] = useState(false)
  const [postsToShow, setPostsToShow] = useState(posts)

  // const startOfNotHighlighted = pageIndex !== 1 ? 0 : 5

  const handleChangePage = (event, value) => {
    setLoading(true)
    setPageIndex(value)
    setLoading(false)
  }

  useEffect(() => {
    const startPage = pageIndex - 1
    const newPosts = postContentService.getPosts(
      locale,
      startPage,
      itemsPerPage
    )
    setPostsToShow(newPosts)
  }, [locale, pageIndex, itemsPerPage])

  return (
    <AppLayout
      title={page.title}
      description={page.description}
      image={page.image}
      isoLocale={isoLocale}
      t={t}
      crumbs={[
        { text: t('common:breadcrumbs.home'), href: '/' },
        {
          text: t('common:breadcrumbs.blog'),
          href: '/blog',
          last: true,
        },
      ]}
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
            gridAutoColumns: '1fr',
            gap: 4,
            '& :first-child': {
              gridColumn: {
                xs: 'span 1',
                md: 'span 2',
              },
              gridRow: {
                xs: 'span 1',
                md: 'span 2',
              },
            },

            '& :nth-child(2n):last-child': {
              gridColumn: {
                xs: 'span 1',
                md: 'span 2',
              },
            },
          }}
        >
          {postsToShow.map((post) => (
            <ContentCard
              key={post.slug}
              url={post.url}
              title={post.title}
              description={post.description}
              image={post.image}
              tags={post.tags}
              date={post.date}
              author={post.author}
              isoLocale={isoLocale}
            />
          ))}
        </Box>

        <Pagination
          onChange={handleChangePage}
          page={pageIndex}
          count={pageCount}
          loading={loading}
          showEllipses={false}
          siblingCount={1}
          boundaryCount={1}
        />
      </Container>
    </AppLayout>
  )
}

function NonHighlightPosts({ t, posts, isoLocale }) {
  if (posts.length <= 0) return null

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat( auto-fit, minmax(300px, 1fr) )',
        gap: 4,
        mb: 8,
        mt: 8,
      }}
    >
      {posts.map((post) => (
        <ContentCard
          key={post.slug}
          url={post.url}
          title={post.title}
          description={post.description}
          image={post.image}
          tags={post.tags}
          date={post.date}
          author={post.author}
          isoLocale={isoLocale}
        />
      ))}
    </Box>
  )
}
