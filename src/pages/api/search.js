import lunr from 'lunr'
import index from './search-index.json'
// import documents from './search-documents.json'
import { allDocuments } from '../../../.contentlayer/generated/index.mjs'

const handler = async (req, res) => {
  const { query, method } = req

  if (method !== 'GET') {
    return res.status(404).json({ message: 'Not found' })
  }

  const q = query.q
  const locale = query.locale || 'pt'

  if (!q) {
    return res.end(JSON.stringify([]))
  }

  const pageIndexString = query.pageIndex || '1'
  const pageIndex = parseInt(pageIndexString)

  const itemsPerPageString = query.itemsPerPage || '10'
  const itemsPerPage = parseInt(itemsPerPageString)

  try {
    const lunrIndex = lunr.Index.load(index)
    const results = lunrIndex.search(q)

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')

    const documents = allDocuments.filter((doc) => {
      return results.find(
        (result) => result.ref === doc.url && doc.locale === locale
      )
    })

    const total = documents.length

    const pageCount = Math.ceil(total / itemsPerPage)

    const start = (pageIndex - 1) * itemsPerPage

    const end = start + itemsPerPage

    const resultsPage = documents.slice(start, end)

    const result = {
      meta: {
        total,
        pageCount,
      },
      data: resultsPage,
    }

    return res.end(JSON.stringify(result))
  } catch (error) {
    console.log(error)
    return res.status(error.status || 500).json(error)
  }
}

export default handler
