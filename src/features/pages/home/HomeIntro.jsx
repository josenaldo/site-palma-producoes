import { Box, Container, Stack } from '@mui/material'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'

import { useTranslation } from '@/features/i18n'
import { YoutubeVideo } from '@/features/ui'

export default function HomeIntro() {
  const { t } = useTranslation(['common', 'home'])

  return (
    <Box component="section">
      <Container>
        <Stack justifyContent="center" alignItems="center">
          <Stack component="span" justifyContent="center" alignItems="center">
            <KeyboardArrowDownOutlinedIcon
              sx={{
                fontSize: '6rem',
                color: 'text.dark',
              }}
            />
          </Stack>
          <YoutubeVideo url={t('home:intro.video')} aspectRatio="21/9" />
        </Stack>
      </Container>
    </Box>
  )
}
