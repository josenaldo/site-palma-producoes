import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/features/styles'
import { Footer, Header } from '@/features/layout'

import styles from './RootLayout.module.css'
import React from 'react'

const mainFont = Inter({
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  // const [hasMounted, setHasMounted] = React.useState(false)

  // React.useEffect(() => {
  //   setHasMounted(true)
  // }, [])

  // if (!hasMounted) {
  //   return null
  // }

  return (
    <ThemeProvider>
      <Header />
      <main id="__next" className={`${mainFont.className} ${styles.main}`}>
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  )
}
