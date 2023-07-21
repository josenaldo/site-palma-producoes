import { Link } from '@/features/ui'
import { Hero } from '@/features/ui/Hero'
import { Box } from '@mui/material'

export default function ContactHero({ t }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <Hero
        backgroundColor="transparent"
        title={t('contato:hero.title', {
          postProcess: 'markdown',
        })}
        titleColor="text.dark"
        titleHighlightColor="secondary.main"
        titleVariant="h4"
        text={t('contato:hero.text')}
        textVariant="body1"
        textColor="text.dark"
        ctaColor="primary"
        ctaText={t('contato:hero.ctaText')}
        ctaHref={t('contato:hero.ctaHref')}
        noPadding
      />
    </Box>
  )
}
