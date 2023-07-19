const APP_NAME = 'Palma Produções'
const APP_TITLE = 'Palma Produções'
const APP_DESCRIPTION = 'Transformando ideias em realidade'
const APP_URL = process.env.NEXT_PUBLIC_SITE_URL
const APP_DEFAULT_IMAGE = `${APP_URL}/images/default.jpg`

export const APP_IMAGE_OBJECT = {
  url: APP_DEFAULT_IMAGE,
  width: '1200px',
  height: '628px',
  alt: APP_TITLE,
  type: 'image/jpg',
}

export const seoConfig = {
  titleTemplate: '%s | Palma Produções',
  title: APP_TITLE,
  description: APP_DESCRIPTION,
  canonical: APP_URL,
  openGraph: {
    url: APP_URL,
    title: APP_TITLE,
    description: APP_DESCRIPTION,
    type: 'website',
    locale: 'pt_BR',
    site_name: APP_TITLE,
    images: [APP_IMAGE_OBJECT],
  },
  twitter: {
    handle: '@palmaproducoes',
    site: '@palmaproducoes',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    { name: 'application-name', content: APP_NAME },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-title', content: APP_NAME },
    { name: 'description', content: APP_DESCRIPTION },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'msapplication-config', content: '/icons/browserconfig.xml' },
    { name: 'msapplication-TileColor', content: '#80ac3f' },
    { name: 'msapplication-tap-highlight', content: 'no' },
    { name: 'theme-color', content: '#80ac3f' },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: `${APP_URL}/icons/favicon.ico`,
    },
    {
      rel: 'icon shortcut',
      href: `${APP_URL}/icons/favicon.ico`,
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `${APP_URL}/icons/favicon-32x32.png`,
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: `${APP_URL}/icons/favicon-16x16.png`,
    },
    {
      rel: 'mask-icon',
      href: `${APP_URL}/icons/icon.svg`,
    },
    {
      rel: 'apple-touch-icon',
      href: `${APP_URL}/icons/76x76-icon.png`,
      sizes: '76x76',
    },
    {
      rel: 'apple-touch-icon',
      href: `${APP_URL}/icons/152x152-icon.png`,
      sizes: '152x152',
    },
    {
      rel: 'apple-touch-icon',
      href: `${APP_URL}/icons/180x180-icon.png`,
      sizes: '180x180',
    },
    {
      rel: 'apple-touch-icon',
      href: `${APP_URL}/icons/167x167-icon.png`,
      sizes: '167x167',
    },
    {
      rel: 'manifest',
      href: `${APP_URL}/manifest.json`,
    },
  ],
}
