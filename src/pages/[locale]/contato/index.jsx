import { useTranslation } from 'next-i18next'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

const getStaticProps = makeStaticProps(['common', 'contato'])

export default function ContatoPage() {
  const { t } = useTranslation(['contato'])

  return <div>Contato</div>
}

export { getStaticPaths, getStaticProps }
