import { allServicos } from 'contentlayer/generated'

export function getServicoData(url) {
  const servico = allServico.find((servico) => servico.url === url)

  return servico
}

export function getAllServicos(locale) {
  return allServicos.filter((servico) => servico.locale === locale)
}

const servicoContentService = {
  getServicoData,
  getAllServicos,
}

export default servicoContentService
