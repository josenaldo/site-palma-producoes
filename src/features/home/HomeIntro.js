import { Box, Button, Container, Stack, Typography } from '@mui/material'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'

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
          <Typography variant="sectionTitle" component="h1">
            {t('home:intro.title')}
          </Typography>
          <Button color="dark">
            <Stack component="span" justifyContent="center" alignItems="center">
              <Typography>{t('home:intro.button')}</Typography>
              <KeyboardArrowDownOutlinedIcon
                sx={{
                  fontSize: '4rem',
                }}
              />
            </Stack>
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
