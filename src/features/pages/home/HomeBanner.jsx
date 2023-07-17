import { BannerBox } from '@/features/ui'
import { Box, Button, Container, Typography } from '@mui/material'
import { homeBannerItems } from '@/data/home'
import { useState } from 'react'

import styles from './HomeBanner.module.css'

export default function HomeBanner({ t }) {
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
      }}
    >
      <Box
        component="video"
        autoPlay
        muted
        loop
        id="heroVideo"
        sx={{
          position: 'absolute',
          zIndex: '-1',
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          overflow: 'hidden',
          filter: 'brightness(0.3)',
        }}
      >
        <source src="/videos/home/hero-480p.mp4" type="video/mp4" />
      </Box>

      <Container sx={{}}>
        <Box
          sx={{
            backgroundColor: 'rgba(255 255 255 / 10%)',
            padding: 4,
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: {
                xs: 'center',
                md: 'flex-start',
              },
              color: 'text.light',
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: {
                  xs: 'center',
                  md: 'flex-start',
                },
              }}
            >
              <Typography
                component="span"
                variant="h2"
                sx={{
                  display: 'inline',
                  textAlign: {
                    xs: 'center',
                    md: 'left',
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: 'primary.main',
                  }}
                >
                  {t('home:hero.title1')}
                </Box>{' '}
                <Box
                  component="span"
                  sx={{
                    color: 'secondary.main',
                  }}
                >
                  {t('home:hero.title2')}
                </Box>
              </Typography>
            </Box>
            <Typography
              variant="h5"
              sx={{
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              {t('home:hero.text')}
            </Typography>
            <Button variant="contained" color="primary" size="large">
              {t('home:hero.button')}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
