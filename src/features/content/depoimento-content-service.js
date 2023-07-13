import { allDepoimentos } from 'contentlayer/generated'

export function getDepoimentoData(url) {
  const depoimento = allDepoimento.find((depoimento) => depoimento.url === url)

  return depoimento
}

export function getAllDepoimentos(locale) {
  const filtered = allDepoimentos.filter(
    (depoimento) => depoimento.locale === locale
  )

  return filtered
}

const depoimentoContentService = {
  getDepoimentoData,
  getAllDepoimentos,
}

export default depoimentoContentService
