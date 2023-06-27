import { Inter } from 'next/font/google'

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={mainFont.className} id="__next">
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  )
}
