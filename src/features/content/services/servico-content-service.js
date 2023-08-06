import { allServicos } from 'contentlayer/generated'

export function getServicoData(url) {
  const servico = allServico.find((servico) => servico.url === url)

  return servico
}

export function getAllServicos(locale) {
  const filtered = allServicos.filter((servico) => servico.locale === locale)

  const sorted = filtered.sort((a, b) => a.id - b.id)

  return sorted
}

const servicoContentService = {
  getServicoData,
  getAllServicos,
}

export default servicoContentService
