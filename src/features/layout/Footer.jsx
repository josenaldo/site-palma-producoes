'use client'

import { Box, Typography, CircularProgress } from '@mui/material'

import { appConfig } from '@/data'
import { ContactLinks, Loading, SocialLinks } from '@/features/ui'
import { LanguageSelector } from '@/i18n'
import { Suspense } from 'react'

export default function Footer({ lng }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 3,
        width: '100%',
        backgroundColor: 'common.dark',
        color: 'common.light',
        gap: '0.5rem',
      }}
    >
      <SocialLinks />
      <ContactLinks />
      <Typography
        variant="body2"
        sx={{
          color: 'grey',
          fontSize: '0.7rem',
        }}
      >
        &copy; {appConfig.copyrigth}
      </Typography>

      <Suspense fallback={<CircularProgress />}>
        <LanguageSelector lng={lng} />
      </Suspense>
    </Box>
  )
}
