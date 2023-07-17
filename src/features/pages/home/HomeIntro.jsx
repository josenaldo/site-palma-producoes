import { Box, Button, Container, Stack, Typography } from '@mui/material'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { YoutubeVideo } from '@/features/ui'

export default function HomeIntro({ t }) {
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
