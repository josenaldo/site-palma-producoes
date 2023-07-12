import { useState } from 'react'
import { useTranslation } from 'next-i18next'

import {
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

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

import {
  MarkdownContent,
  pagesContentService,
  servicoContentService,
} from '@/features/content'

import { ImageBox, PageHeader } from '@/features/ui'
import Image from 'next/image'

export async function getStaticProps({ params }) {
  const props = await makeStaticProps(['common', 'servicos'])({ params })
  const locale = params?.locale || 'pt'
  const url = `/${locale}/servicos`

  const page = pagesContentService.getPageData(url)

  const servicos = servicoContentService.getAllServicos(locale)

  props.props.page = page
  props.props.servicos = servicos

  return props
}

import { palette } from '@/features/styles'

export { getStaticPaths }

const colors = [
  palette.primary.main,
  palette.secondary.main,
  palette.tertiary.main,
  palette.quaternary.main,
]

export default function ServicosPage({ page, servicos }) {
  const { t } = useTranslation(['common', 'servicos'])
  console.log('🟢🟢🟢 servicos', servicos)

  return (
    <Box>
      <Container>
        <PageHeader
          title={page.title}
          subtitle={page.subtitle}
          text={page.body.raw}
        />

        <ImageBox
          src={page.image.url}
          alt={page.image.alt}
          width={page.image.width}
          height={page.image.height}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            my: 10,
            gap: 4,
          }}
        >
          {servicos.map((servico, index) => (
            <Card
              key={servico.url}
              elevation={0}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                borderBottom: '1px solid #ccc',
              }}
            >
              <CardMedia
                sx={{
                  display: 'flex',
                  padding: 2,
                }}
              >
                <Image
                  src={servico.icon}
                  alt={servico.title}
                  width={100}
                  height={100}
                />
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="div" color={colors[index]}>
                  {servico.title}
                </Typography>
                <Typography variant="body2">{servico.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
