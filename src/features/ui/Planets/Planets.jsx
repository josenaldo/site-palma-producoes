import { useElementOnScreen, useWidth } from '@/features/hooks'
import { useTranslation } from '@/features/i18n'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import styles from './Planets.module.css'


const options = {
  root: null,
  rootMargin: '0px',
  threshold: '0.5',
}


export default function Planets({ size = 400 }) {

  const { t } = useTranslation(['common', 'home'])
  const [containerRef, isVisible] = useElementOnScreen(options)

  return (
    <>
      <Box ref={containerRef} className={`${styles.outerPlanet} ${isVisible ? styles.outerPlanetAnimation : ''}`}>
        <Image
          src="/images/home/services-outer.svg"
          alt="Serviços"
          height={size}
          width={size}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          '& img': {
            '@keyframes spin': {
              from: {
                transform: 'rotate(0deg)',
              },
              to: {
                transform: 'rotate(360deg)',
              },
            },
            animationName: 'spin',
            animationDuration: '5s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationDelay: '1s',
          },
        }}
      >
        <Image
          src="/images/home/services-inner.svg"
          alt="Serviços"
          height={size}
          width={size}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            width: '120px',
            color: 'grey.700',
          }}
        >
          {t('home:services.planets')}
        </Typography>
      </Box>
    </>
  )
}
