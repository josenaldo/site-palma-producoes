import { allCategoria } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

function getCategoriaData(url) {
  const post = allCategoria.find((post) => post.url === url)

  return post
}

function print(categorias) {
  return categorias.map((categoria) => {
    return {
      order: categoria.order,
      name: categoria.name,
      slug: categoria.slug,
      url: categoria.url,
    }
  })
}

function getAllCategorias(locale) {
  console.log('🔴 allCategoria', print(allCategoria))

  const filtered = allCategoria.filter(
    (categoria) => categoria.locale === locale
  )
  console.log('🔴 filtered', print(filtered))

  const sorted = filtered.sort((a, b) => {
    return a.order - b.order
  })
  console.log('🔴 sorted', print(sorted))

  return sorted
}

function getCategorias(locale, page = 0, itemsPerPage = 10) {
  const filtered = allCategoria.filter(
    (categoria) => categoria.locale === locale
  )

  const sorted = filtered.sort((a, b) => {
    return a.order - b.order
  })

  const categorias = sorted.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  )

  return categorias
}

function getCategoriasPageCount(locale, itemsPerPage = 10) {
  const filtered = allCategoria.filter(
    (categoria) => categoria.locale === locale
  )

  return Math.ceil(filtered.length / itemsPerPage)
}

const categoriaContentService = {
  getCategoriaData,
  getAllCategorias,
  getCategorias,
  getCategoriasPageCount,
}

export default categoriaContentService
