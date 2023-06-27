'use client'
import { Box } from '@mui/material'

import { Link } from '@/features/ui'

export default function DesktopMenu() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: {
          xs: 2,
          sm: 2.5,
          lg: 5,
        },
      }}
    >
      <MenuLink href="/">Home</MenuLink>
      <MenuLink href="/nossas-lojas">Nossas lojas</MenuLink>
      <MenuLink href="/novidades">Novidades</MenuLink>
      <MenuLink href="/promocoes">Promoções</MenuLink>
    </Box>
  )
}

function MenuLink({ href, children }) {
  return (
    <Link
      href={href}
      sx={{
        color: 'common.white',
        fontSize: {
          xs: '0.6rem',
          sm: '0.813rem',
          md: '1rem',
        },
      }}
    >
      {children}
    </Link>
  )
}
