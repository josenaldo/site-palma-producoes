import { allServico } from 'contentlayer/generated'

export function getServicoData(url) {
  const servico = allServico.find((servico) => servico.url === url)

  return servico
}

export function getAllServicos(locale) {
  return allServico.filter((servico) => servico.locale === locale)
}

const servicosContentService = {
  getServicoData,
  getAllServicos,
}

export default servicosContentService
