import { useTranslation } from 'next-i18next'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

const getStaticProps = makeStaticProps(['movimentos'])

export default function MovimentosPage() {
  const { t } = useTranslation(['movimentos'])

  return <div>Movimentos</div>
}

export { getStaticPaths, getStaticProps }
