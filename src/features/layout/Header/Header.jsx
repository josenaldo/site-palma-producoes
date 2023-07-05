import { AppBar } from '@mui/material'

import Menu from './Menu'
import { Logo } from '@/features/ui'
import React from 'react'
import { useIsHome } from '@/features/layout'

export default function Header() {
  const isHome = useIsHome()

  return (
    <AppBar
      component="header"
      elevation={0}
      color="transparent"
      sx={{
        position: isHome ? 'absolute' : 'static',
        height: '120px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        zIndex: 1000,
      }}
    >
      <Logo color={isHome ? 'white' : 'black'} />
      <Menu />
    </AppBar>
  )
}
