import { appWithTranslation } from 'next-i18next'
import { DefaultSeo } from 'next-seo'

import { seoConfig } from '@/data'
import { RootLayout } from '@/features/layout'
import '@/features/styles/globals.css'
import nextI18nConfig from '../../next-i18next.config'
import ReactGA from "react-ga4";

ReactGA.initialize("G-PKSQ591VPT");

function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <DefaultSeo {...seoConfig} />
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default appWithTranslation(App, nextI18nConfig)
