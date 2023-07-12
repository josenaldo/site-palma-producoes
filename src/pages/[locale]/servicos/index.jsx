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

export async function getStaticProps({ params }) {
  const props = await makeStaticProps(['common', 'servicos'])({ params })
  const locale = params?.locale || 'pt'
  const url = `/${locale}/servicos`

  const page = pagesContentService.getPageData(url)

  const servicos = servicoContentService.getAllServicos(locale)
  props.props.page = page
  props.props.services = servicos

  return props
}

export { getStaticPaths }

export default function ServicosPage({ page, servicos }) {
  const { t } = useTranslation(['common', 'servicos'])

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
      </Container>
    </Box>
  )
}
