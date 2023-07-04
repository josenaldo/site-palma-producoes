import { useTranslation } from 'next-i18next'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'
import { Link } from '@/features/ui'
import { Typography } from '@mui/material'

const getStaticProps = makeStaticProps(['common', 'home'])

export default function HomePage() {
  const { t } = useTranslation(['common', 'home'])

  return (
    <div>
      <Typography variant="h1">{t('home:title')}</Typography>
      <br />
      <Link href={`/quem-somos`}>{t('home:to-quem-somos-page')}</Link>
    </div>
  )
}

export { getStaticPaths, getStaticProps }
