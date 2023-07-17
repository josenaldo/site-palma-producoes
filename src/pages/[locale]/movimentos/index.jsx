import { useTranslation } from 'next-i18next'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'
import { AppLayout } from '@/features/layout'

const getStaticProps = makeStaticProps(['common', 'movimentos'])

export default function MovimentosPage() {
  const { t } = useTranslation(['common', 'movimentos'])

  return <AppLayout t={t}>Movimentos</AppLayout>
}

export { getStaticPaths, getStaticProps }
