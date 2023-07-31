import { Box } from '@mui/material'

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
}) {
  const { t, isoLocale } = useTranslation(ns)

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 2,
          width: '100%',
          mb: 4,
          alignItems: 'center',
        }}
      >
        <Title borderBottomColor={titleBorderBottomColor}>{title}</Title>
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
      </Box>

      <ImageBox
        src={image.url}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />

      <Box>
        <ContentBlock content={body.raw} />
      </Box>
    </Box>
  )
}
