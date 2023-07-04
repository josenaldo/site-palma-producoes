import { useTranslation } from 'next-i18next'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

const getStaticProps = makeStaticProps(['common', 'projetos'])

export default function ProjetosPage() {
  const { t } = useTranslation(['common', 'projetos'])

  return <div>Projetos</div>
}

export { getStaticPaths, getStaticProps }
