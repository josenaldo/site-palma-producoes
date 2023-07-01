import { Inter } from 'next/font/google'
import { dir } from 'i18next'
import { languages } from '@/i18n/settings'

import { ThemeProvider } from '@/features/styles'
import { Footer, Header } from '@/features/layout'

import '@/features/styles/globals.css'
import styles from './layout.module.css'

const mainFont = Inter({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Palma Produções',
  description: 'Palma Produções description',
}

export async function generateStaticPArams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <ThemeProvider>
        <body className={mainFont.className} id="__next">
          <Header lng={lng} />
          <main className={styles.main}>{children}</main>
          <Footer lng={lng} />
        </body>
      </ThemeProvider>
    </html>
  )
}
