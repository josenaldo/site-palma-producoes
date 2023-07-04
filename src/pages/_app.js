import { appWithTranslation } from 'next-i18next'
import { RootLayout } from '@/features/layout'
import '@/features/styles/globals.css'
import nextI18nConfig from '../../next-i18next.config'

function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default appWithTranslation(App, nextI18nConfig)
