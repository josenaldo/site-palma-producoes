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
            py: 1,
          }}
        >
          &copy; {t('common:footer:copyright')}
        </Typography>
        <LanguageSelector t={t} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'flex',
            },
          }}
          color="secondary"
          size="small"
          endIcon={<ArrowUpwardIcon />}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }}
        >
          {t('common:footer.backToTop')}
        </Button>

        <IconButton
          sx={{
            display: {
              xs: 'flex',
              sm: 'flex',
              md: 'none',
            },
          }}
          color="secondary"
          size="small"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
