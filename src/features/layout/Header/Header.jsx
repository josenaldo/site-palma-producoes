import React from 'react'

import { AppBar, Box, Container, useScrollTrigger } from '@mui/material'

import { Logo } from '@/features/ui'
import { useIsHome } from '@/features/layout'

import Menu from './Menu'
import DesktopMenu from './DesktopMenu'

export default function Header({ t, color, ...props }) {
  const isHome = useIsHome()
  const elevated = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return (
    <AppBar
      component="header"
      elevation={elevated ? 4 : 0}
      color={elevated ? 'white' : 'transparent'}
      sx={{
        position: isHome ? 'fixed' : 'sticky',
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
        <Logo color={!isHome || elevated ? 'black' : 'white'} />
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
          <DesktopMenu t={t} elevated={elevated} />
        </Box>
      </Container>
    </AppBar>
  )
}
