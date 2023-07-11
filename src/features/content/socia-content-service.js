import { allSocia } from 'contentlayer/generated'

export function getSociaData(url) {
  const socia = allSocia.find((socia) => socia.url === url)

  return socia
}

export function getAllSocias(locale) {
  return allSocia.filter((socia) => socia.locale === locale)
}

const sociasContentService = {
  getSociaData,
  getAllSocias,
}

export default sociasContentService
