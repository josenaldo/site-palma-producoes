import { allSocia } from 'contentlayer/generated'

export function getSociaData(url) {
  const socia = allSocia.find((socia) => socia.url === url)

  return socia
}

export function getAllSocias(locale) {
  const filtered = allSocia.filter((socia) => socia.locale === locale)

  const sorted = filtered.sort((a, b) => {
    return a.order - b.order
  })
  return sorted
}

const sociasContentService = {
  getSociaData,
  getAllSocias,
}

export default sociasContentService
