import { ButtonLink, Title } from '@/features/ui'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'

export default function HomeWho({ t }) {
  const texts = t('home:who.text', {
    returnObjects: true,
    postProcess: 'markdown',
  })

  return (
    <Box
      component="section"
      sx={{
        py: 5,
      }}
    >
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: {
                xs: 'flex-start',
                md: 'center',
              },
              position: {
                xs: 'absolute',
                md: 'relative',
              },
              width: '100%',
              height: '420px',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                zIndex: -1,
                width: '120px',
                height: '420px',
                filter: {
                  xs: 'opacity(0.1)',
                  md: 'none',
                },
              }}
            >
              <Image src={t('home:who.impact')} alt="Impact" fill />
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
                fontSize: '1.2rem',
              }}
            >
              {texts.map((text, index) => (
                <Typography
                  key={`home:who.text.${index}`}
                  sx={{ fontSize: 'inherit' }}
                >
                  {text}
                </Typography>
              ))}
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  md: 'row',
                },
                alignItems: {
                  xs: 'center',
                  md: 'center',
                },
                justifyContent: {
                  xs: 'center',
                  md: 'flex-start',
                },
                gap: 4,
                width: '100%',
              }}
            >
              <Title variant="h3" borderBottomColor="transparent">
                {t('home:who.title')}
              </Title>
              <ButtonLink
                size="large"
                href="/quem-somos"
                variant="outlined"
                color="dark"
                sx={{
                  height: 'fit-content',
                  px: 4,
                  flexGrow: 1,
                }}
              >
                {t('home:who.button')}
              </ButtonLink>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
