import { useState } from 'react'

import { Box, Card, CardContent, Typography } from '@mui/material'

import { ImageBox, Link, Tag } from '@/features/ui'

export default function ContentImageCard({
  url,
  title,
  description,
  tags,
  image,
}) {
  const [elevation, setElevation] = useState(2)
  const [brightness, setBrightness] = useState(40)

  return (
    <Link href={url} skipLocaleHandling>
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
          src={image.url}
          alt={image.alt}
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
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="h5" component="h3" color="text.light">
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
              {tags && tags.map((tag) => <Tag key={tag} label={tag} />)}
            </Box>
            <Typography
              variant="caption"
              color="text.light"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
              }}
            >
              {description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  )
}
