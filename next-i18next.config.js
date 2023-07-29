/** @type {import('next-i18next').UserConfig} */

const ChainedBackend = require('i18next-chained-backend').default
const LocalStorageBackend = require('i18next-localstorage-backend').default
const HttpBackend = require('i18next-http-backend/cjs')
const MarkdownPostprocessor = require('./src/features/i18n/md-post-processor')

module.exports = {
  backend: {
    backendOptions: [
      { expirationTime: 60 * 60 * 1000 },
      {
        /* loadPath: 'https:// somewhere else' */
      },
    ], // 1 hour
    backends:
      typeof window !== 'undefined' ? [LocalStorageBackend, HttpBackend] : [],
  },
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    localeDetection: true,
    defaultNS: 'common',
    fallbackNS: 'common',
    ns: [
      'common',
      'contato',
      'home',
      'movimentos',
      'pesquisa',
      'portfolio',
      'projetos',
      'quem-somos',
      'servicos',
    ],
  },

  debug: process.env.NODE_ENV === 'development',
  localePath: typeof window !== 'undefined' ? '/locales' : './public/locales',
  reloadOnPrerender: process.env.NODE_ENV == 'development',
  serializeConfig: false,
  use:
    typeof window !== 'undefined'
      ? [ChainedBackend, MarkdownPostprocessor]
      : [MarkdownPostprocessor],
}
