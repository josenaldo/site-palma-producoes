import { Box } from '@mui/material'

import { useTranslation } from '@/features/i18n'
import { BigBanner } from '@/features/ui'
import { useWidth } from '@/features/hooks'

const aspectRatio = {
  xs: 16 / 9,
  sm: 16 / 9,
  md: 21 / 9,
  lg: 21 / 9,
  xl: 21 / 9,
}

export default function HomeBannerToServices() {
  const { t } = useTranslation(['common', 'home'])
  const screenWidth = useWidth()
  const aspect = aspectRatio[screenWidth]

  return (
    <Box component="section" id="homeBanner">
      <BigBanner
        image="/images/home/banner.jpg"
        alt="Banner Servicos"
        href="/servicos"
        buttonText={t('home:services.button')}
        title={t('home:services.title')}
        aspectRatio={aspect}
      />
    </Box>
  )
}
