import { useTranslation } from 'next-i18next'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

const getStaticProps = makeStaticProps(['common', 'servicos'])


export async function getStaticProps({ params }) {
  const props = await makeStaticProps(['common', 'quem-somos'])({ params })
  const locale = params?.locale || 'pt'
  const url = `/${locale}/quem-somos`

  const page = pagesContentService.getPageData(url)
  const socias = sociaContentService.getAllSocias(locale)
  const parcerias = parceriaContentService.getAllParcerias(locale)

  props.props.page = page
  props.props.socias = socias
  props.props.parcerias = parcerias

  return props
}

export default function ServicosPage() {
  const { t } = useTranslation(['common', 'servicos'])

  return <div>Serviços</div>
}

export { getStaticPaths, getStaticProps }
