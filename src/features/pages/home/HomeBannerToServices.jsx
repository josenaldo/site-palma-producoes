import { Box } from '@mui/material'

import { useTranslation } from '@/features/i18n'
import { BigBanner } from '@/features/ui'

export default function HomeBannerToServices() {
  const { t } = useTranslation(['common', 'home'])

  return (
    <Box component="section" id="homeBanner">
      <BigBanner
        image="/images/home/banner.jpg"
        alt="Banner Servicos"
        href="/servicos"
        buttonText={t('home:services.button')}
        title={t('home:services.title')}
      />
    </Box>
  )
}
