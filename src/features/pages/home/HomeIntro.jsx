import { Box, Container, Stack } from '@mui/material'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'

import { useTranslation } from '@/features/i18n'
import { YoutubeVideo } from '@/features/ui'

export default function HomeIntro() {
  const { t } = useTranslation(['common', 'home'])

  return (
    <Box component="section" id="homeIntro">
      <Container
        sx={{
          mt: 10,
        }}
      >
        <YoutubeVideo url={t('home:intro.video')} aspectRatio="21/9" />
      </Container>
    </Box>
  )
}
