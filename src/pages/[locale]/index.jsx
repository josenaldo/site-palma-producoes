import { Box, Stack } from '@mui/material'
import { useTranslation } from 'next-i18next'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'
import {
  HomeBanner,
  HomeIntro,
  HomeServices,
  HomeVideo,
  HomeWho,
} from '@/features/home'

const getStaticProps = makeStaticProps(['common', 'home'])

export default function HomePage() {
  const { t } = useTranslation(['common', 'home'])

  return (
    <Stack>
      <HomeBanner t={t} />
      <HomeIntro t={t} />
      <HomeWho t={t} />
      <HomeVideo t={t} />
      <HomeServices t={t} />
    </Stack>
  )
}

export { getStaticPaths, getStaticProps }
