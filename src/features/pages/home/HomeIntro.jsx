import { Box, Container, Stack, Typography } from '@mui/material'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'

import { useTranslation } from '@/features/i18n'
import { Abstract, YoutubeVideo } from '@/features/ui'

export default function HomeIntro() {
  const { t } = useTranslation(['common', 'home'])

  return (
    <Box component="section" id="homeIntro">
      <Container
        sx={{
          mt: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          textAlign: 'center',
        }}
      >
        <Abstract>
          <Typography variant="body1">{t('home:intro.text')}</Typography>
        </Abstract>
        <YoutubeVideo url={t('home:intro.video')} aspectRatio="21/9" />
      </Container>
    </Box>
  )
}
