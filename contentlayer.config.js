import {
  defineDocumentType,
  makeSource,
  defineNestedType,
} from 'contentlayer/source-files'

function resolveSlug(folder, doc) {
  const regex = new RegExp(`${folder}\/?`, 'g')

  return doc._raw.flattenedPath.replace(regex, '').split('/')[1]
}

function resolveLocale(doc, folder) {
  const regex = new RegExp(`${folder}\/?`, 'g')

  return doc._raw.flattenedPath.replace(regex, '').split('/')[0]
}

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
    subtitle: {
      type: 'string',
      description: 'The subtitle of the page',
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
      resolve: (doc) =>
        doc._raw.flattenedPath.replace(/servicos\/?/, '').split('/')[0],
    },
    slug: {
      type: 'string',
      resolve: (doc) =>
        doc._raw.flattenedPath.replace(/servicos\/?/, '').split('/')[1],
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
      resolve: (doc) =>
        doc._raw.flattenedPath.replace(/depoimentos\/?/, '').split('/')[0],
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
      resolve: (doc) =>
        doc._raw.flattenedPath.replace(/portfolio\/?/, '').split('/')[0],
    },
    slug: {
      type: 'string',
      resolve: (doc) =>
        doc._raw.flattenedPath.replace(/portfolio\/?/, '').split('/')[1],
    },
  },
}))

export default makeSource({
  contentDirPath: 'public/content',
  documentTypes: [Page, Socia, Parceria, Servico, Depoimento, PortfolioItem],
})
