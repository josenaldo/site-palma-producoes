import { useTranslation } from 'next-i18next'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

const getStaticProps = makeStaticProps(['servicos'])

export default function ServicosPage() {
  const { t } = useTranslation(['servicos'])

  return <div>Serviços</div>
}

export { getStaticPaths, getStaticProps }
