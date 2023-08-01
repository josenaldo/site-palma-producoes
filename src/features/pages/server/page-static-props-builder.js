import { makeStaticProps } from '@/features/i18n/server'
import { pagesContentService } from '@/features/content'

export async function buildStaticProps(params, pageName) {
  const propsWrapper = await makeStaticProps(['common', pageName])({
    params,
  })
  const locale = params?.locale || 'pt'
  const url = `/${locale}/${pageName}`

  const page = pagesContentService.getPageData(url)

  propsWrapper.props.page = page

  return propsWrapper
}
