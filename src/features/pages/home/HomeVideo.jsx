import { Box } from '@mui/material'

import { useTranslation } from '@/features/i18n'
import { YoutubeVideo } from '@/features/ui'

export default function HomeVideo() {
  const { t } = useTranslation(['common', 'home'])

  return (
    <Box
      component="section"
      sx={{
        mt: 10,
      }}
    >
      <YoutubeVideo url={t('home:video.video')} aspectRatio="21/9" />
    </Box>
  )
}
