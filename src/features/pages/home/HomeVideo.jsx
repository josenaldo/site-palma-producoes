import { YoutubeVideo } from '@/features/ui'
import { Box } from '@mui/material'

export default function HomeVideo({ t }) {
  return (
    <Box
      component="section"
      sx={{
        pt: 5,
      }}
    >
      <YoutubeVideo url={t('home:video.video')} aspectRatio="21/9" />
    </Box>
  )
}
