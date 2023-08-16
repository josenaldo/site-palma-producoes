const lunr = require('lunr')
const fs = require('fs')

async function createSearchIndex() {
  console.log('🟢Creating search index...')

  const { allDocuments } = await import(
    '../../../.contentlayer/generated/index.mjs'
  )

  const searchableDocumentTypes = ['Page', 'Post', 'PortfolioItem']

  const searchableDocuments = allDocuments.filter((doc) => {
    return searchableDocumentTypes.includes(doc.type)
  })

  const documentList = searchableDocuments.map((doc) => {
    return {
      url: doc.url,
      title: doc.title,
      description: doc.description,
      content: doc.body.raw,
      image: doc.image,
      type: doc.type,
      locale: doc.locale,
      body: doc.body.raw,
    }
  })

  const index = lunr(function () {
    this.ref('url')
    this.field('title')
    this.field('description')
    this.field('content')
    this.field('image')
    this.field('type')
    this.field('locale')
    this.field('body')

    documentList.forEach(function (doc) {
      this.add(doc)
    }, this)
  })

  const dir = process.cwd() + '/src/pages/api'
  const indexFilePath = dir + '/search-index.json'

  fs.writeFileSync(indexFilePath, JSON.stringify(index))
}

module.exports = { createSearchIndex }
