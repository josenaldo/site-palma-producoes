import { useState } from 'react'

import { Box, Card, CardContent, Typography } from '@mui/material'

import { ImageBox, Link } from '@/features/ui'

export default function ContentCategoryCard({
  url,
  name,
  image,
  isActive = false,
}) {
  const [elevation, setElevation] = useState(0)
  const [brightness, setBrightness] = useState(40)

  return (
    <Link href={url} skipLocaleHandling>
      <Card
        elevation={isActive ? 10 : elevation}
        sx={{
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
          aspectRatio: '1/1',
          padding: 0,
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
          aspectRatio="1/1"
          cover
          sx={{
            filter: `brightness(${brightness}%)`,
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2,
            padding: 0,
            margin: 0,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: 0,
            }}
          >
            <Typography
              variant="h3"
              component="h3"
              color="text.light"
              sx={{
                fontSize: {
                  xs: '1rem',
                  sm: '1.8rem',
                  md: '2.5rem',
                  lg: '3rem',
                  xl: '3.5rem',
                },
                borderBottom: isActive ? '3px solid' : 'none',
                borderBottomColor: 'primary.main',
                // '-webkit-text-stroke': isActive ? 'none' : '0.5px #fff',
                color: isActive ? '#fff' : 'rgba(255 255 255 / 0.7)',
              }}
            >
              {name}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Link>
  )
}
