import { useTranslation } from 'next-i18next'

import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Container,
  Typography,
} from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import StarIcon from '@mui/icons-material/Star'

import Carousel from 'react-material-ui-carousel'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

import { pagesContentService, projetoContentService } from '@/features/content'

import { ButtonLink, ImageBox, PageHeader, Title } from '@/features/ui'
import Image from 'next/image'

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

import { palette } from '@/features/styles'
import { useState } from 'react'

export { getStaticPaths }

const colors = [
  palette.primary.main,
  palette.secondary.main,
  palette.tertiary.main,
  palette.quaternary.main,
]

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
              sm: '1fr 1fr',
            },
            gap: 4,
            my: 4,
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
  console.log(projeto)

  const [elevation, setElevation] = useState(2)

  return (
    <Card
      elevation={elevation}
      sx={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
      }}
      onMouseOver={(e) => {
        setElevation(20)
      }}
      onMouseOut={(e) => {
        setElevation(2)
      }}
    >
      <ImageBox
        src={projeto.image.url}
        alt={projeto.image.alt}
        width={1200}
        height={628}
        sx={{
          filter: 'brightness(40%)',
          zIndex: 0,
        }}
      />
      <CardContent
        sx={{
          position: 'absolute',
          display: 'flex',
          width: '100%',
          height: '100%',
          padding: 6,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          zIndex: 2,
        }}
      >
        <Typography variant="h6" component="h2" color="text.light">
          {projeto.id}
        </Typography>
        <Typography variant="h5" component="h3" color="text.light">
          {projeto.title}
        </Typography>
        <Typography variant="caption" color="text.light">
          {projeto.description}
        </Typography>
      </CardContent>
    </Card>
  )
}
