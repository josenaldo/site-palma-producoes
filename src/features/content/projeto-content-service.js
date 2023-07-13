import { allProjetos } from 'contentlayer/generated'

export function getProjetoData(url) {
  const projeto = allProjetos.find((projeto) => projeto.url === url)

  return projeto
}

export function getAllProjetos(locale) {
  const filtered = allProjetos.filter((projeto) => projeto.locale === locale)

  const sorted = filtered.sort((a, b) => a.id - b.id)

  return sorted
}

export function getProjetos(locale, page = 1, limit = 10) {
  const filtered = allProjetos.filter((projeto) => projeto.locale === locale)

  const sorted = filtered.sort((a, b) => {
    if (a.highlighted && !b.highlighted) {
      return -1
    }

    if (!a.highlighted && b.highlighted) {
      return 1
    }

    return a.id - b.id
  })

  const projects = sorted.slice(page * limit, (page + 1) * limit)

  return projects
}

const projetoContentService = {
  getProjetoData,
  getAllProjetos,
  getProjetos,
}

export default projetoContentService
