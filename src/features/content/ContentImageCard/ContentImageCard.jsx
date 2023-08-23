import { useState } from 'react'

import { Box, Card, CardContent, Typography } from '@mui/material'

import { ImageBox, Link } from '@/features/ui'

export default function ContentImageCard({ url, title, tags, image }) {
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
          aspectRatio={{
            xs: 1 / 1,
            sm: 1200 / 628,
          }}
          cover
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
              padding: 2,
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
                color: 'text.light',
                textTransform: 'uppercase',
                '& :not(:last-child)': {
                  paddingRight: 1,
                  borderRight: '1px solid',
                  borderColor: 'text.light',
                },
              }}
            >
              {tags &&
                tags.map((tag, index) => (
                  <Typography variant="caption" key={tag}>
                    {tag}
                  </Typography>
                ))}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Link>
  )
}
