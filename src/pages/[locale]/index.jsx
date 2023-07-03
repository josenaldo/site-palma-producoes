import { useTranslation } from 'next-i18next'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'
import { Link } from '@/features/ui'

const getStaticProps = makeStaticProps(['index'])

export default function HomePage() {
  const { t } = useTranslation('index')

  return (
    <div>
      <h1 variant="h1">{t('title')}</h1>
      <br />
      <Link href={`/quem-somos`}>{t('to-quem-somos-page')}</Link>
    </div>
  )
}

export { getStaticPaths, getStaticProps }
