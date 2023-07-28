// import lunr from 'lunr'
// import fs from 'fs'
// import { allDocuments } from '../../../.contentlayer/generated/index.mjs'

const lunr = require('lunr')
const fs = require('fs')
// const { allDocuments } = require('../../../.contentlayer/generated/index.mjs')

async function createSearchIndex() {
  console.log('🟢Creating search index...')

  const { allDocuments } = await import(
    '../../../.contentlayer/generated/index.mjs'
  )

  const searchableDocumentTypes = ['Page', 'Post', 'Project']

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
    }
  })

  const documents = searchableDocuments.reduce(function (memo, doc) {
    memo[doc.url] = {
      url: doc.url,
      title: doc.title,
      description: doc.description,
      content: doc.body.raw,
      image: doc.image,
      type: doc.type,
      locale: doc.locale,
    }
    return memo
  }, {})

  const index = lunr(function () {
    this.ref('url')
    this.field('title')
    this.field('description')
    this.field('content')
    this.field('image')
    this.field('type')
    this.field('locale')

    documentList.forEach(function (doc) {
      this.add(doc)
    }, this)
  })

  const dir = process.cwd() + '/src/pages/api'
  const indexFilePath = dir + '/search-index.json'
  const docsFilePath = dir + '/search-documents.json'

  fs.writeFileSync(indexFilePath, JSON.stringify(index))
  fs.writeFileSync(docsFilePath, JSON.stringify(documents))
}

// export default createSearchIndex

module.exports = createSearchIndex
