import { useTranslation } from 'next-i18next'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'
import { AppLayout } from '@/features/layout'

const getStaticProps = makeStaticProps(['common', 'contato'])

export default function ContatoPage() {
  const { t } = useTranslation(['common', 'contato'])

  return <AppLayout t={t}>Contato</AppLayout>
}

export { getStaticPaths, getStaticProps }
