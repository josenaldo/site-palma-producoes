import { Box, Button, IconButton, Typography } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

import { useTranslation } from '@/features/i18n'
import { LanguageSelector } from '@/features/i18n/client'
import { ContactLinks, SocialLinks } from '@/features/ui'

export default function Footer() {
  const { t } = useTranslation(['common'])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row',
        },
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
        width: '100%',
        backgroundColor: 'common.dark',
        color: 'text.light',
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <SocialLinks />
        <ContactLinks />
        <Typography
          variant="body4"
          sx={{
            py: 1,
          }}
        >
          &copy; {t('common:footer:copyright')}
        </Typography>
        <LanguageSelector t={t} />
      </Box>
    </Box>
  )
}
