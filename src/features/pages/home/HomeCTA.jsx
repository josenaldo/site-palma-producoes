import { useTranslation } from '@/features/i18n'
import { ContactForm } from '@/features/pages/contato'
import { Hero } from '@/features/ui'
import { Box, Container } from '@mui/material'

export default function HomeCTA() {
  const { t } = useTranslation(['common', 'home'])

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: 'dark.main',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        py: 10,
      }}
    >
      <Container sx={{}}>
        <Hero
          backgroundColor="transparent"
          title={t('home:cta.title', {
            postProcess: 'markdown',
          })}
          titleColor="primary.main"
          titleHighlightColor="secondary.main"
          titleVariant="h2"
          text={t('home:cta.text')}
          textVariant="body3"
          ctaColor="primary"
          ctaText={t('home:cta.button')}
          ctaHref="/contato"
          ctaVariant="outlined"
          noPadding
        />
      </Container>
    </Box>
  )
}
