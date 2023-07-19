import { useTranslation } from 'next-i18next'

import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from '@mui/material'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

import { pagesContentService, postContentService } from '@/features/content'

import { ButtonLink, ImageBox, Link, PageHeader, Tag } from '@/features/ui'

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

import { useState } from 'react'
import { AppLayout } from '@/features/layout'

export { getStaticPaths }

export default function MovimentosPage({ isoLocale, page, posts }) {
  const { t } = useTranslation(['common', 'movimentos'])
  console.log('posts', posts)

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
          <PostCard post={posts[0]} />
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
            <PostCard key={posts.id} post={post} />
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
            <PostCardOpen key={posts.id} post={post} />
          ))}
        </Box>
      </Container>
    </AppLayout>
  )
}

function PostCard({ post }) {
  const [elevation, setElevation] = useState(2)
  const [brightness, setBrightness] = useState(40)

  return (
    <Link href={`/posts/${post.slug}`}>
      <Card
        elevation={elevation}
        sx={{
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
        }}
        onMouseOver={(e) => {
          setElevation(20)
          setBrightness(60)
        }}
        onMouseOut={(e) => {
          setElevation(2)
          setBrightness(40)
        }}
        onClick={(e) => {
          const oldElevation = elevation
          const oldBrightness = brightness

          setElevation(10)
          setBrightness(50)

          setTimeout(() => {
            setElevation(oldElevation)
            setBrightness(oldBrightness)
          }, 100)
        }}
      >
        <ImageBox
          src={post.image.url}
          alt={post.image.alt}
          width={1200}
          height={628}
          sx={{
            filter: `brightness(${brightness}%)`,
            zIndex: 0,
          }}
        />
        <CardContent
          sx={{
            position: 'absolute',
            display: 'flex',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="h5" component="h3" color="text.light">
              {post.title}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              {post.tags &&
                post.tags.map((tag) => <Tag key={tag} label={tag} />)}
            </Box>
            <Typography
              variant="caption"
              color="text.light"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                '-webkit-line-clamp': '2',
                '-webkit-box-orient': 'vertical',
              }}
            >
              {post.description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  )
}

function PostCardOpen({ post }) {
  const [brightness, setBrightness] = useState(40)

  return (
    <Link
      href={`/posts/${post.slug}`}
      sx={{
        textDecoration: 'none',
      }}
    >
      <Card
        elevation={0}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRadius: 4,
        }}
        onMouseOver={(e) => {
          setBrightness(60)
        }}
        onMouseOut={(e) => {
          setBrightness(40)
        }}
        onClick={(e) => {
          const oldBrightness = brightness

          setBrightness(50)

          setTimeout(() => {
            setBrightness(oldBrightness)
          }, 100)
        }}
      >
        <ImageBox
          src={post.image.url}
          alt={post.image.alt}
          width={1200}
          height={628}
          sx={{
            filter: `brightness(${brightness}%)`,
            zIndex: 0,
          }}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: 2,
          }}
        >
          <Typography variant="h5" component="h3" color="primary.main">
            {post.title}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 1,
            }}
          >
            {post.tags &&
              post.tags.map((tag) => (
                <Tag key={tag} label={tag} backgroundColor="tertiary.main" />
              ))}
          </Box>
          <Typography variant="body1">{post.description}</Typography>
        </CardContent>
        <CardActions>
          <ButtonLink href={post.url} color="primary">
            Saiba mais
          </ButtonLink>
        </CardActions>
      </Card>
    </Link>
  )
}
