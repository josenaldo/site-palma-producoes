import { Box, Button, IconButton, Typography } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

import { ContactLinks, SocialLinks } from '@/features/ui'
import { LanguageSelector } from '@/features/i18n/client'

export default function Footer({ t }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        justifyContent: 'space-between',
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
          width: '10%',
        }}
      ></Box>

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
          variant="body2"
          sx={{
            fontSize: '0.7rem',
          }}
        >
          &copy; {t('common:footer:copyright')}
        </Typography>
        <LanguageSelector />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          color="secondary"
          size="small"
          endIcon={<ArrowUpwardIcon />}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }}
        >
          {t('common:footer.backToTop')}
        </Button>
      </Box>
    </Box>
  )
}
