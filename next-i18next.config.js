/** @type {import('next-i18next').UserConfig} */
module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    fallbackLng: 'pt',
    localeDetection: false,
  },
}
