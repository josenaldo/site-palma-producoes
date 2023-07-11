import { allPages } from 'contentlayer/generated'

const getPageData = (url) => {
  const page = allPages.find((page) => page.url === url)

  return page
}

const pagesContentService = {
  getPageData,
}

export default pagesContentService
