import { Box, Button, Container } from '@mui/material'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'

import { useTranslation } from '@/features/i18n'
import { Hero } from '@/features/ui'

export default function HomeHero() {
  const { t } = useTranslation(['common', 'home'])

  return (
    <Box
      component="section"
      id="homeHero"
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
        poster="/videos/home/hero.jpg"
        sx={{
          position: 'absolute',
          zIndex: '-1',
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          overflow: 'hidden',
          filter: 'brightness(0.3)',
          backgroundColor: 'grey.darker',
        }}
      >
        <source src="/videos/home/hero-optimized.mp4" type="video/mp4" />
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
          CTA={HomeHeroCTA}
        />
      </Container>
    </Box>
  )
}

function HomeHeroCTA() {
  return (
    <Button
      color="light"
      onClick={() => {
        const homeIntro = document.getElementById('homeWho')
        if (homeIntro) {
          homeIntro.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }}
    >
      <KeyboardArrowDownOutlinedIcon
        sx={{
          fontSize: '6rem',
          color: 'text.light',
        }}
      />
    </Button>
  )
}
