import Image from 'next/image'
import { Box, Container, Typography } from '@mui/material'

import { useTranslation } from '@/features/i18n'
import { HomeTitleWithButton } from '@/features/ui'
import { useImageSizes } from '@/features/hooks'

export default function HomeWho() {
  const { t } = useTranslation(['common', 'home'])
  const impactSizes = useImageSizes(120)

  const texts = t('home:who.text', {
    returnObjects: true,
    postProcess: 'markdown',
  })

  return (
    <Box component="section" id="homeWho">
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            justifyItems: 'center',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              width: '100%',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                display: 'block',
                aspectRatio: '12 / 42',
                height: {
                  md: '547px',
                  lg: '490px',
                },
              }}
            >
              <Image
                src={t('home:who.impact')}
                alt="Impact"
                fill
                sizes={impactSizes}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',

              flexGrow: 1,
              gap: 8,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              {texts.map((text, index) => (
                <Typography
                  key={`home:who.text.${index}`}
                  variant="body1"
                  sx={{ textAlign: 'justify' }}
                >
                  {text}
                </Typography>
              ))}
            </Box>

            <HomeTitleWithButton
              title={t('home:who.title')}
              href="/quem-somos"
              buttonText={t('home:who.button')}
              fullwidth
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
