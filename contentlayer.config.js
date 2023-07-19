import {
  defineDocumentType,
  makeSource,
  defineNestedType,
} from 'contentlayer/source-files'

function resolveSlug(doc, folder) {
  const regex = new RegExp(`${folder}\/?`, 'g')

  return doc._raw.flattenedPath.replace(regex, '').split('/')[1]
}

function resolveLocale(doc, folder) {
  const regex = new RegExp(`${folder}\/?`, 'g')

  return doc._raw.flattenedPath.replace(regex, '').split('/')[0]
}

function resolveUrl(doc, folder) {
  const regex = new RegExp(`${folder}\/?`, 'g')

  const pathWithoutFolder = doc._raw.flattenedPath.replace(regex, '')

  const locale = pathWithoutFolder.split('/')[0]
  const path = pathWithoutFolder.split('/').slice(1).join('/')
  const url =
    folder === 'pages' ? `/${locale}/${path}` : `/${locale}/${folder}/${path}`

  return url
}

const Image = defineNestedType(() => ({
  name: 'Image',
  fields: {
    url: {
      type: 'string',
      description: 'The url of the image',
      required: true,
    },
    alt: {
      type: 'string',
      description: 'The alt of the image',
      required: true,
    },
    width: {
      type: 'number',
      description: 'The width of the image',
      defaultValue: 1200,
    },
    height: {
      type: 'number',
      description: 'The height of the image',
      defaultValue: 628,
    },
  },
}))

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
      type: 'nested',
      of: Image,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => resolveUrl(doc, 'pages'),
    },
    locale: {
      type: 'string',
      resolve: (doc) => resolveLocale(doc, 'pages'),
    },
    slug: {
      type: 'string',
      resolve: (doc) => resolveSlug(doc, 'pages'),
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
    order: {
      type: 'number',
      description: 'The order of the stockholder',
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
      resolve: (doc) => resolveLocale(doc, 'socias'),
    },
    slug: {
      type: 'string',
      resolve: (doc) => resolveSlug(doc, 'socias'),
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
      resolve: (doc) => resolveLocale(doc, 'parcerias'),
    },
    slug: {
      type: 'string',
      resolve: (doc) => resolveSlug(doc, 'parcerias'),
    },
  },
}))

export const Servico = defineDocumentType(() => ({
  name: 'Servico',
  filePathPattern: `servicos/**/*.md`,
  fields: {
    id: {
      type: 'number',
      description: 'The id of the service',
      required: true,
    },
    title: {
      type: 'string',
      description: 'The title of the service',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the service',
      required: true,
    },
    icon: {
      type: 'string',
      description: 'The image of the service',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => resolveUrl(doc, 'servicos'),
    },
    locale: {
      type: 'string',
      resolve: (doc) => resolveLocale(doc, 'servicos'),
    },
    slug: {
      type: 'string',
      resolve: (doc) => resolveSlug(doc, 'servicos'),
    },
  },
}))

const Depoimento = defineDocumentType(() => ({
  name: 'Depoimento',
  filePathPattern: `depoimentos/**/*.md`,
  fields: {
    name: {
      type: 'string',
      description: 'The name of the testimonial author',
      required: true,
    },
    position: {
      type: 'string',
      description: 'The position of the testimonial author',
      required: true,
    },
    testimonial: {
      type: 'string',
      description: 'The testimonial',
      required: true,
    },
    image: {
      type: 'nested',
      of: Image,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => resolveUrl(doc, 'depoimentos'),
    },
    locale: {
      type: 'string',
      resolve: (doc) => resolveLocale(doc, 'depoimentos'),
    },
    slug: {
      type: 'string',
      resolve: (doc) => resolveSlug(doc, 'depoimentos'),
    },
  },
}))

export const PortfolioItem = defineDocumentType(() => ({
  name: 'PortfolioItem',
  filePathPattern: `portfolio/**/*.md`,
  fields: {
    id: {
      type: 'number',
      description: 'The id of the portfolio item',
      required: true,
    },
    highlight: {
      type: 'boolean',
      description: 'The highlight of the portfolio item',
      required: true,
    },
    title: {
      type: 'string',
      description: 'The title of the portfolio item',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'The tags of the portfolio item',
      required: false,
    },
    description: {
      type: 'string',
      description: 'The description of the portfolio item',
      required: true,
    },
    image: {
      type: 'nested',
      of: Image,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => resolveUrl(doc, 'portfolio'),
    },
    locale: {
      type: 'string',
      resolve: (doc) => resolveLocale(doc, 'portfolio'),
    },
    slug: {
      type: 'string',
      resolve: (doc) => resolveSlug(doc, 'portfolio'),
    },
  },
}))

export default makeSource({
  contentDirPath: 'public/content',
  documentTypes: [Page, Socia, Parceria, Servico, Depoimento, PortfolioItem],
})
