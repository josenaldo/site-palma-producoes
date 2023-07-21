import { Hero } from '@/features/ui/Hero'
import { Box, Button, Container, Typography } from '@mui/material'

export default function HomeHero({ t }) {
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
      }}
    >
      <Box
        component="video"
        autoPlay
        muted
        loop
        id="heroVideo"
        sx={{
          position: 'absolute',
          zIndex: '-1',
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          overflow: 'hidden',
          filter: 'brightness(0.3)',
        }}
      >
        <source src="/videos/home/hero-480p.mp4" type="video/mp4" />
      </Box>

      <Container sx={{}}>
        <Hero
          backgroundColor="transparent"
          title={t('home:hero.title', {
            postProcess: 'markdown',
          })}
          titleColor="primary.main"
          titleHighlightColor="secondary.main"
          titleVariant="h2"
          text={t('home:hero.text')}
          textVariant="h5"
          // textColor="text.dark"
          ctaColor="primary"
          ctaText={t('home:hero.button')}
          ctaHref="/contato"
          noPadding
        />
      </Container>
    </Box>
  )
}
