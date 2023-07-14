import { useTranslation } from 'next-i18next'

import { Box, Card, CardContent, Container, Typography } from '@mui/material'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

import { pagesContentService, projetoContentService } from '@/features/content'

import { ImageBox, Link, PageHeader } from '@/features/ui'

export async function getStaticProps({ params }) {
  const props = await makeStaticProps(['common', 'projetos'])({ params })
  const locale = params?.locale || 'pt'
  const url = `/${locale}/projetos`

  const page = pagesContentService.getPageData(url)
  const projetos = projetoContentService.getAllProjetos(locale)

  props.props.page = page
  props.props.projetos = projetos

  return props
}

import { useState } from 'react'

export { getStaticPaths }

export default function ServicosPage({ page, projetos }) {
  const { t } = useTranslation(['common', 'projetos'])

  return (
    <Box>
      <Container>
        <PageHeader
          title={page.title}
          subtitle={page.subtitle}
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
            mt: 4,
            mb: 8,
          }}
        >
          {projetos.map((projeto) => (
            <ProjetoCard key={projeto.id} projeto={projeto} />
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function ProjetoCard({ projeto }) {
  const [elevation, setElevation] = useState(2)
  const [brightness, setBrightness] = useState(40)

  return (
    <Link href={`/projetos/${projeto.slug}`}>
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
          src={projeto.image.url}
          alt={projeto.image.alt}
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
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            zIndex: 2,
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: 'rgb(255 255 255 / 0.4)',
            }}
          >
            {`${projeto.id}`.padStart(2, '0')}
          </Typography>
          <Box>
            <Typography variant="h5" component="h3" color="text.light">
              {projeto.title}
            </Typography>
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
              {projeto.description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  )
}
