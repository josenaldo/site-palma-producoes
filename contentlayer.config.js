import { defineDocumentType, makeSource } from 'contentlayer/source-files'

function resolveUrl(doc, folder) {
  const regex = new RegExp(`${folder}\/?`, 'g')

  const locale = doc._raw.flattenedPath.replace(regex, '').split('/')[0]

  const path = doc._raw.flattenedPath
    .replace(regex, '')
    .split('/')
    .slice(1)
    .join('/')

  return `/${locale}/${folder}/${path}`
}

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the page',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the page',
      required: true,
    },
    image: {
      type: 'string',
      description: 'The image of the page',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath.replace(/pages\/?/, '')}`,
    },
    locale: {
      type: 'string',
      resolve: (doc) =>
        doc._raw.flattenedPath.replace(/pages\/?/, '').split('/')[0],
    },
  },
}))

export const Socia = defineDocumentType(() => ({
  name: 'Socia',
  filePathPattern: `socias/**/*.md`,
  fields: {
    name: {
      type: 'string',
      description: 'The name of the stockholder',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the stockholder',
      required: true,
    },
    image: {
      type: 'string',
      description: 'The image of the stockholder',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => resolveUrl(doc, 'socias'),
    },
    locale: {
      type: 'string',
      resolve: (doc) =>
        doc._raw.flattenedPath.replace(/socias\/?/, '').split('/')[0],
    },
  },
}))

export const Parceria = defineDocumentType(() => ({
  name: 'Parceria',
  filePathPattern: `parcerias/**/*.md`,
  fields: {
    name: {
      type: 'string',
      description: 'The name of the partnership',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the partnership',
      required: true,
    },
    image: {
      type: 'string',
      description: 'The image of the partnership',
      required: true,
    },
    link: {
      type: 'string',
      description: 'The link of the partnership',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => resolveUrl(doc, 'parcerias'),
    },
    locale: {
      type: 'string',
      resolve: (doc) =>
        doc._raw.flattenedPath.replace(/parcerias\/?/, '').split('/')[0],
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Page, Socia, Parceria],
})