import { useEffect, useState } from 'react'

import { Box, Container } from '@mui/material'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

import { AppLayout } from '@/features/layout'
import { useTranslation } from '@/features/i18n'
import { PageHeader, Pagination } from '@/features/ui'
import {
  ContentCard,
  ContentImageCard,
  pagesContentService,
  postContentService,
} from '@/features/content'

export async function getStaticProps({ params }) {
  const propsWrapper = await makeStaticProps(['common', 'movimentos'])({
    params,
  })
  const locale = params?.locale || 'pt'
  const url = `/${locale}/movimentos`

  const page = pagesContentService.getPageData(url)

  const startPage = 1
  const itemsPerPage = process.env.NEXT_PUBLIC_DEFAULT_PAGE_SIZE || 10
  const pageCount = postContentService.getPostsPageCount(locale, itemsPerPage)
  const posts = postContentService.getPosts(locale, startPage, itemsPerPage)

  propsWrapper.props.locale = locale
  propsWrapper.props.page = page
  propsWrapper.props.itemsPerPage = itemsPerPage
  propsWrapper.props.pageCount = pageCount
  propsWrapper.props.posts = posts

  return propsWrapper
}

export { getStaticPaths }

export default function MovimentosPage({
  page,
  itemsPerPage,
  posts,
  pageCount,
}) {
  const { t, isoLocale, locale } = useTranslation(['common', 'movimentos'])

  const [pageIndex, setPageIndex] = useState(1)
  const [loading, setLoading] = useState(false)
  const [postsToShow, setPostsToShow] = useState(posts)

  const startOfNotHighlighted = pageIndex !== 1 ? 0 : 5

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
    >
      <Container>
        <PageHeader
          title={page.title}
          text={page.body.raw}
          direction="column"
        />

        {pageIndex === 1 && postsToShow.length > 0 && (
          <FirstTierHighlightPost t={t} post={postsToShow[0]} />
        )}

        {pageIndex === 1 && postsToShow.length > 1 && (
          <SecondTierHighlightPosts
            t={t}
            posts={postsToShow.slice(1, startOfNotHighlighted)}
          />
        )}

        <NonHighlightPosts
          t={t}
          posts={postsToShow.slice(startOfNotHighlighted)}
          isoLocale={isoLocale}
        />

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

function FirstTierHighlightPost({ t, post }) {
  return (
    <Box>
      <ContentImageCard
        key={post.slug}
        url={post.url}
        title={post.title}
        description={post.description}
        image={post.image}
        tags={post.tags}
      />
    </Box>
  )
}

function SecondTierHighlightPosts({ t, posts }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          md: '1fr 1fr',
        },
        gap: 4,
        my: 4,
      }}
    >
      {posts.map((post) => (
        <ContentImageCard
          key={post.slug}
          url={post.url}
          title={post.title}
          description={post.description}
          image={post.image}
          tags={post.tags}
        />
      ))}
    </Box>
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
