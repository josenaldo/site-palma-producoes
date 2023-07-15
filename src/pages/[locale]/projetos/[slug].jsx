import { useTranslation } from 'next-i18next'

import {
  getStaticPaths as i18nGetStaticPaths,
  makeStaticProps,
} from '@/features/i18n/server'

import { MarkdownContent, projetoContentService } from '@/features/content'
import { Box, Container, Typography } from '@mui/material'
import { ImageBox, PageTitle } from '@/features/ui'

export function getStaticPaths() {
  const i18nPaths = i18nGetStaticPaths()
  const projetos = projetoContentService.getAllProjetos('pt')
  const paths = []

  projetos.map((projeto) => {
    const p = i18nPaths.paths.map((path) => {
      const { locale } = path.params

      return {
        params: {
          locale,
          slug: projeto.slug,
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
  const i18nPropsFunc = makeStaticProps(['common', 'projeto'])
  const { slug, locale } = ctx.params
  const url = `/${locale}/projetos/${slug}`

  const i18nProps = await i18nPropsFunc(ctx)
  const projeto = projetoContentService.getProjetoData(url)

  const props = {
    props: {
      ...i18nProps.props,
      projeto,
    },
  }

  return props
}

export default function ProjetosPage({ projeto, ...props }) {
  const { t } = useTranslation(['common', 'projeto'])
  console.log('props', props)

  return (
    <Box>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        <PageTitle title={projeto.title} />

        <ImageBox
          src={projeto.image.url}
          alt={projeto.image.alt}
          width={projeto.image.width}
          height={projeto.image.height}
        />

        <Box>
          <MarkdownContent content={projeto.body.raw} />
        </Box>
      </Container>
    </Box>
  )
}
