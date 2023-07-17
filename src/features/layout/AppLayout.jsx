import { Box } from '@mui/material'

import Footer from '@/features/layout/Footer'
import { Header } from '@/features/layout/Header'

export default function AppLayout({ t, children }) {
  return (
    <Box>
      <Header t={t} />
      <main id="__next">{children}</main>
      <Footer t={t} />
    </Box>
  )
}
