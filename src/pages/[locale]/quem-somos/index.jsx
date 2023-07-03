import { useTranslation } from 'next-i18next'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'
import { Link } from '@/features/ui'

const getStaticProps = makeStaticProps(['quem-somos'])

export default function QuemSomosPage() {
  const { t } = useTranslation('quem-somos')

  return (
    <div>
      <h1>{t('title')}</h1>
      <br />
      <Link href={`/`}>{t('back-to-home')}</Link>
    </div>
  )
}

export { getStaticPaths, getStaticProps }
