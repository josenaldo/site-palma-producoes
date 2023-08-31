import { allPages } from 'contentlayer/generated'

function getAllPages(locale) {
  const filtered = allPages.filter((page) => page.locale === locale)

  return filtered
}

const getPageData = (url) => {
  const page = allPages.find((page) => page.url === url)

  return page
}

const pagesContentService = {
  getAllPages,
  getPageData,
}

export default pagesContentService
