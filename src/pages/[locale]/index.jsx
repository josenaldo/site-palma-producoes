import { Box } from '@mui/material'
import { useTranslation } from 'next-i18next'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'
import { HomeBanner } from '@/features/home'

const getStaticProps = makeStaticProps(['common', 'home'])

export default function HomePage() {
  const { t } = useTranslation(['common', 'home'])

  return (
    <Box
      component="main"
      sx={{
        position: 'relative',
      }}
    >
      <HomeBanner t={t} />
    </Box>
  )
}

export { getStaticPaths, getStaticProps }
