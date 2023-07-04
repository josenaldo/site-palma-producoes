import { useTranslation } from 'next-i18next'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'
import { Link } from '@/features/ui'

const getStaticProps = makeStaticProps(['common', 'quem-somos'])

export default function QuemSomosPage() {
  const { t } = useTranslation(['common', 'quem-somos'])

  return (
    <div>
      <h1>{t('quem-somos:title')}</h1>
      <br />
      <Link href={`/`}>{t('quem-somos:back-to-home')}</Link>
    </div>
  )
}

export { getStaticPaths, getStaticProps }
