import { Box, Button, Container, Stack, Typography } from '@mui/material'

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
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'flex',
              },
              alignItems: 'center',
              justifyContent: 'center',
              py: {
                xs: 2,
                sm: 4,
              },
              transform: {
                xs: 'none',
                sm: 'rotate(-90deg)',
              },
            }}
          >
            <Typography variant="bigtag">{t('home:who.impact')}</Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',

              flexGrow: 1,
              gap: 2,
            }}
          >
            <Typography
              variant="sectionTitle"
              component="h2"
              sx={{
                display: {
                  xs: 'block',
                  sm: 'none',
                },
              }}
            >
              {t('home:who.title')}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              {texts.map((text, index) => (
                <Typography key={`home:who.text.${index}`}>{text}</Typography>
              ))}
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  sm: 'row',
                },
                alignItems: 'center',
                gap: 2,
                mt: 4,
              }}
            >
              <Typography
                variant="sectionTitle"
                component="h2"
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'block',
                  },
                }}
              >
                {t('home:who.title')}
              </Typography>
              <Button
                variant="outlined"
                color="dark"
                sx={{
                  height: 'fit-content',
                  px: 4,
                }}
              >
                {t('home:who.button')}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
