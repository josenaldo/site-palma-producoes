import { Container } from '@mui/material'

import { ContentPage, postContentService } from '@/features/content'
import { AppLayout } from '@/features/layout'
import {
  getStaticPaths as i18nGetStaticPaths,
  makeStaticProps,
} from '@/features/i18n/server'

export function getStaticPaths() {
  const i18nPaths = i18nGetStaticPaths()
  const posts = postContentService.getAllPosts('pt')

  const paths = []

  posts.map((posts) => {
    const p = i18nPaths.paths.map((path) => {
      const { locale } = path.params

      return {
        params: {
          locale,
          slug: posts.slug,
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
  const i18nPropsFunc = makeStaticProps(['common', 'movimentos'])
  const { slug, locale } = ctx.params
  const url = `/${locale}/movimentos/${slug}`

  const i18nProps = await i18nPropsFunc(ctx)
  const post = postContentService.getPostData(url)

  const props = {
    props: {
      ...i18nProps.props,
      post: post,
    },
  }

  return props
}

export default function PortfolioPage({ post }) {
  return (
    <AppLayout
      title={post.title}
      description={post.description}
      image={post.image}
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
          title={post.title}
          titleBorderBottomColor="transparent"
          image={post.image}
          body={post.body}
          tags={post.tags}
          author={post.author}
          date={post.date}
          url={post.url}
          ns={['common', 'movimentos']}
        />
      </Container>
    </AppLayout>
  )
}
