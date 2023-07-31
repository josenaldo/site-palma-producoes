import { Box, Typography } from '@mui/material'

import { useTranslation } from '@/features/i18n'
import { ButtonLink, ImageBox } from '@/features/ui'

export default function BannerPortfolio() {
  const { t } = useTranslation(['common', 'servicos'])

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ImageBox
        src="/images/content/pages/servicos-portfolio.jpg"
        alt="Portfolio"
        width={1200}
        height={628}
        sx={{
          filter: 'brightness(40%)',
          zIndex: -1,
          transition: 'background-image 0.2s ease-in-out',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Typography variant="h2" component="h2" color="light.main">
          {t('servicos:bannerPortfolio.title')}
        </Typography>

        <ButtonLink
          href="/portfolio"
          variant="outlined"
          color="light"
          size="large"
        >
          {t('servicos:bannerPortfolio.button')}
        </ButtonLink>
      </Box>
    </Box>
  )
}
