import { allParceria } from 'contentlayer/generated'

export function getParceriaData(url) {
  const parceria = allParceria.find((parceria) => parceria.url === url)

  return parceria
}

export function getAllParcerias(locale) {
  return allParceria.filter((parceria) => parceria.locale === locale)
}

const parceriasContentService = {
  getParceriaData,
  getAllParcerias,
}

export default parceriasContentService
