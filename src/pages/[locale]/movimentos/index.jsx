import { useTranslation } from 'next-i18next'

import { Box, Container } from '@mui/material'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

import {
  ContentCard,
  ContentImageCard,
  pagesContentService,
  postContentService,
} from '@/features/content'

import { PageHeader } from '@/features/ui'

export async function getStaticProps({ params }) {
  const props = await makeStaticProps(['common', 'movimentos'])({ params })
  const locale = params?.locale || 'pt'
  const url = `/${locale}/movimentos`

  const page = pagesContentService.getPageData(url)
  const posts = postContentService.getPosts(locale)

  props.props.page = page
  props.props.posts = posts

  return props
}

import { AppLayout } from '@/features/layout'

export { getStaticPaths }

export default function MovimentosPage({ isoLocale, page, posts }) {
  const { t } = useTranslation(['common', 'movimentos'])

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

        <Box>
          <ContentImageCard
            key={posts[0].slug}
            t={t}
            url={posts[0].url}
            title={posts[0].title}
            description={posts[0].description}
            image={posts[0].image}
            tags={posts[0].tags}
          />
        </Box>

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
          {posts.slice(1, 5).map((post) => (
            <ContentImageCard
              key={post.slug}
              t={t}
              url={post.url}
              title={post.title}
              description={post.description}
              image={post.image}
              tags={post.tags}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1fr 1fr 1fr',
            },
            gap: 4,
            mb: 8,
          }}
        >
          {posts.slice(5, posts.length).map((post) => (
            <ContentCard
              key={post.slug}
              t={t}
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
      </Container>
    </AppLayout>
  )
}
