import { Box, Typography } from '@mui/material'

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
        titleColor="primary.main"
        titleHighlightColor="secondary.main"
        titleVariant="h4"
        CTA={() => (
          <Typography
            color="text.dark"
            variant="body1"
            sx={{
              '& a': {
                fontWeight: 'bold',
                color: 'text.dark',
              },
            }}
          >
            {t('contato:hero.ctaText', {
              postProcess: 'markdown',
            })}
          </Typography>
        )}
        noPadding
      />
    </Box>
  )
}
