import { Box } from '@mui/material'

import { useTranslation } from '@/features/i18n'
import { Hero } from '@/features/ui'

export default function ContactHero() {
  const { t } = useTranslation(['common', 'contato'])

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
