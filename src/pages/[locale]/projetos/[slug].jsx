import { useTranslation } from 'next-i18next'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

const getStaticProps = makeStaticProps(['projeto'])

export default function ProjetoPage({ params }) {
  const { t } = useTranslation(['projeto'])

  return <div>Projeto: {params.slug}</div>
}

export { getStaticPaths, getStaticProps }
