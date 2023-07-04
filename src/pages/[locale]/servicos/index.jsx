import { useTranslation } from 'next-i18next'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

const getStaticProps = makeStaticProps(['common', 'servicos'])

export default function ServicosPage() {
  const { t } = useTranslation(['common', 'servicos'])

  return <div>Serviços</div>
}

export { getStaticPaths, getStaticProps }
