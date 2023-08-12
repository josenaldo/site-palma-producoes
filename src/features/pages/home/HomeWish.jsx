import { Box, Container, Stack, Typography } from '@mui/material'

import { useTranslation } from '@/features/i18n'
import { BannerBox, Title } from '@/features/ui'

export default function HomeWish() {
  const { t } = useTranslation(['common', 'home'])

  const texts = t('home:wish.text', {
    returnObjects: true,
    postProcess: 'markdown',
  })

  return (
    <Box
      component="section"
      sx={{
        mt: 10,
      }}
    >
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
        <Container>
          <Stack spacing={2} justifyContent="center" alignItems="center">
            <Title
              variant="h3"
              color="text.light"
              borderBottomColor="transparent"
            >
              {t('home:wish.title')}
            </Title>

            {texts &&
              texts.map((text, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  component="p"
                  color="text.light"
                  sx={{
                    textAlign: 'center',
                  }}
                >
                  {text}
                </Typography>
              ))}
          </Stack>
        </Container>
      </BannerBox>
    </Box>
  )
}
