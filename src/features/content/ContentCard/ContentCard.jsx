import { useState } from 'react'

import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from '@mui/material'

import { ContentAuthor, ContentDate } from '@/features/content'
import { useTranslation } from '@/features/i18n'
import { ButtonLink, ImageBox, Link, ShareLink, Tags } from '@/features/ui'

export default function ContentCard({
  url,
  title,
  description,
  tags,
  image,
  date,
  author,
}) {
  const { t, isoLocale } = useTranslation(['common'])

  const [brightness, setBrightness] = useState(40)
  const [elevation, setElevation] = useState(0)

  if (!t) return null

  return (
    <Card
      elevation={elevation}
      // variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: 'grey.50',
      }}
      onMouseOver={(e) => {
        setBrightness(60)
        setElevation(2)
      }}
      onMouseOut={(e) => {
        setBrightness(40)
        setElevation(0)
      }}
      onClick={(e) => {
        const oldBrightness = brightness

        setBrightness(50)

        setTimeout(() => {
          setBrightness(oldBrightness)
        }, 100)
      }}
    >
      <CardMedia>
        <Link
          href={url}
          skipLocaleHandling
          sx={{
            textDecoration: 'none',
          }}
        >
          <ImageBox
            src={image.url}
            alt={image.alt}
            width={1200}
            height={628}
            sx={{
              filter: `brightness(${brightness}%)`,
              zIndex: 0,
            }}
          />
        </Link>
      </CardMedia>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: 1,
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <ContentAuthor author={author} />
          <ContentDate date={date} isoLocale={isoLocale} />
        </Box>

        <Typography variant="h5" component="h3" color="primary.main">
          {title}
        </Typography>

        <Typography variant="body3">{description}</Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flexWrap: 'wrap',
          }}
        >
          {tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" color="tertiary" />
          ))}
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <ButtonLink href={url} color="primary" skipLocaleHandling>
          {t('common:button.showMore')}
        </ButtonLink>

        <ShareLink url={url} title={title} image={image.url} />
      </CardActions>
    </Card>
  )
}
