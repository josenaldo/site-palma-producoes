import { allPortfolioItems } from 'contentlayer/generated'

export function getPortfolioData(url) {
  const portfolio = allPortfolioItems.find((portfolio) => portfolio.url === url)

  return portfolio
}

export function getAllPortfolio(locale) {
  const filtered = allPortfolioItems.filter(
    (portfolio) => portfolio.locale === locale && portfolio.visible === true
  )

  const sorted = filtered.sort((a, b) => {
    if (a.highlight && !b.highlight) {
      return -1
    }

    if (!a.highlight && b.highlight) {
      return 1
    }

    return a.id - b.id
  })

  return sorted
}

export function getPortfolio(locale, page = 0, limit = 10) {
  const filtered = allPortfolioItems.filter(
    (portfolio) => portfolio.locale === locale && portfolio.visible === true
  )

  const sorted = filtered.sort((a, b) => {
    if (a.highlight && !b.highlight) {
      return -1
    }

    if (!a.highlight && b.highlight) {
      return 1
    }

    return a.id - b.id
  })

  const portfolio = sorted.slice(page * limit, (page + 1) * limit)

  return portfolio
}

const portfolioContentService = {
  getPortfolioData,
  getAllPortfolio,
  getPortfolio,
}

export default portfolioContentService
