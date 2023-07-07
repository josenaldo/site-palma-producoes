import { Box, Button, Container, Stack, Typography } from '@mui/material'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { YoutubeVideo } from '@/features/ui'

export default function HomeIntro({ t }) {
  return (
    <Box
      component="section"
      sx={{
        py: 5,
      }}
    >
      <Container>
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <Typography variant="sectionTitle" component="h2">
            {t('home:intro.title')}
          </Typography>
          <Stack component="span" justifyContent="center" alignItems="center">
            <Typography>{t('home:intro.subtitle')}</Typography>
            <KeyboardArrowDownOutlinedIcon
              sx={{
                fontSize: '4rem',
              }}
            />
          </Stack>
          <YoutubeVideo url={t('home:intro.video')} aspectRatio="21/9" />
        </Stack>
      </Container>
    </Box>
  )
}
