import React from 'react'

import { AppBar, Box, Container } from '@mui/material'

import { Logo } from '@/features/ui'
import { useIsHome } from '@/features/layout'

import Menu from './Menu'
import DesktopMenu from './DesktopMenu'

export default function Header({ t }) {
  const isHome = useIsHome()

  return (
    <AppBar
      component="header"
      elevation={isHome ? 0 : 1}
      color="transparent"
      sx={{
        position: isHome ? 'absolute' : 'static',
        height: '120px',
        px: {
          xs: 0,
          md: 3,
        },
        zIndex: 1000,
        py: 2,
        mb: 2,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Logo color={isHome ? 'white' : 'black'} />
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Menu t={t} />
          <DesktopMenu t={t} />
        </Box>
      </Container>
    </AppBar>
  )
}
