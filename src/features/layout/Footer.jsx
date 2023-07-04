import { Box, Typography } from '@mui/material'

import { appConfig } from '@/data'
import { ContactLinks, SocialLinks } from '@/features/ui'
import { LanguageSelector } from '@/features/i18n/client'

export default function Footer() {
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

      <LanguageSelector />
    </Box>
  )
}
