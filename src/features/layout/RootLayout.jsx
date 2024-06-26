import { NotificationContextProvider } from '@/features/notification'
import { ThemeProvider } from '@/features/styles'

import React from 'react'

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <NotificationContextProvider>{children}</NotificationContextProvider>
    </ThemeProvider>
  )
}
