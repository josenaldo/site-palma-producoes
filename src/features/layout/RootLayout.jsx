import { ThemeProvider } from '@/features/styles'
import { Footer, Header } from '@/features/layout'

import React from 'react'

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <Header />
      <main id="__next">{children}</main>
      <Footer />
    </ThemeProvider>
  )
}
