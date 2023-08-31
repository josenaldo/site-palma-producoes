import { Box, Container, Typography } from '@mui/material'

import {
  ContentAuthor,
  ContentBlock,
  ContentDate,
  ContentTags,
} from '@/features/content'
import { ImageBox, ShareLink, Title } from '@/features/ui'
import { useTranslation } from '@/features/i18n'

export default function ContentPage({
  title,
  titleBorderBottomColor = 'primary.main',
  image,
  body,
  tags,
  author,
  date,
  url,
  ns = ['common'],
  mainImageFullWidth,
  showMainImage = true,
}) {
  const { t, isoLocale } = useTranslation(ns)

  console.log('🔴 mainImageFullWidth ', mainImageFullWidth)
  console.log('🔴 showMainImage ', showMainImage)
  return (
    <Box
      sx={{
        overflowX: 'hidden',
      }}
    >
      {showMainImage && image && (
        <Container disableGutters>
          <ImageBox
            src={image.url}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
            fullWidth={mainImageFullWidth}
          />
        </Container>
      )}

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          width: '100%',
          mb: 4,
        }}
      >
        <Title
          variant="h1"
          componente="h1"
          borderBottomColor={titleBorderBottomColor}
          textWrap="wrap"
        >
          {title}
        </Title>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <ContentAuthor author={author} />
          <ContentDate date={date} isoLocale={isoLocale} />
          <ShareLink url={url} title={title} image={image.url} t={t} />
        </Box>
        <ContentTags tags={tags} backgroundColor="tertiary.main" />
      </Container>

      <Container>
        <ContentBlock body={body} />
      </Container>
    </Box>
  )
}
