import { appWithTranslation } from 'next-i18next'
import { RootLayout } from '@/features/layout'
import '@/features/styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <RootLayout >
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default appWithTranslation(App)
