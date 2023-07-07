import { BannerBox } from '@/features/ui'
import { Box, Container, Stack, Typography } from '@mui/material'

export default function HomeWish({ t }) {
  const texts = t('home:wish.text', {
    returnObjects: true,
    postProcess: 'markdown',
  })

  return (
    <BannerBox
      image="/images/home/mar.jpg"
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 5,
      }}
    >
      <Box
        component="section"
        sx={{
          py: 5,
        }}
      >
        <Container>
          <Stack spacing={2} justifyContent="center" alignItems="center">
            <Typography
              variant="sectionTitle"
              component="h2"
              color="light.main"
            >
              {t('home:wish.title')}
            </Typography>

            {texts &&
              texts.map((text, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  component="p"
                  color="light.main"
                  sx={{
                    textAlign: 'center',
                  }}
                >
                  {text}
                </Typography>
              ))}
          </Stack>
        </Container>
      </Box>
    </BannerBox>
  )
}
