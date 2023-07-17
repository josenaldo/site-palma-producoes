import { Stack } from '@mui/material'
import { useTranslation } from 'next-i18next'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'
import {
  HomeBanner,
  HomeIntro,
  HomeServices,
  HomeVideo,
  HomeWho,
  HomeWish,
} from '@/features/pages/home'
import { AppLayout } from '@/features/layout'

const getStaticProps = makeStaticProps(['common', 'home'])

export default function HomePage() {
  const { t } = useTranslation(['common', 'home'])

  return (
    <AppLayout t={t}>
      <Stack>
        <HomeBanner t={t} />
        <HomeIntro t={t} />
        <HomeWho t={t} />
        <HomeVideo t={t} />
        <HomeServices t={t} />
        <HomeWish t={t} />
      </Stack>
    </AppLayout>
  )
}

export { getStaticPaths, getStaticProps }
