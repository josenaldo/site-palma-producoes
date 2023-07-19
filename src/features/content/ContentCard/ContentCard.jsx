import { useState } from 'react'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

import { ButtonLink, ImageBox, Link, Tag } from '@/features/ui'

export default function ContentCard({
  t,
  url,
  title,
  description,
  tags,
  image,
}) {
  const [brightness, setBrightness] = useState(40)

  if (!t) return null

  return (
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
          gap: 2,
          flexGrow: 1,
        }}
      >
        <Typography variant="h5" component="h3" color="primary.main">
          {title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          {tags &&
            tags.map((tag) => (
              <Tag key={tag} label={tag} backgroundColor="tertiary.main" />
            ))}
        </Box>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
      <CardActions>
        <ButtonLink href={url} color="primary" skipLocaleHandling>
          {t('common:button.showMore')}
        </ButtonLink>
      </CardActions>
    </Card>
  )
}
