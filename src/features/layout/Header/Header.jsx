'use client'

import React from 'react'

import { AppBar, Box } from '@mui/material'

import DesktopMenu from './DesktopMenu'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import SearchBox from './SearchBox'

export default function Header() {
  const menuAnchor = React.useRef(null)

  return (
    <Box component="header" ref={menuAnchor}>
      <AppBar
        elevation={0}
        position="static"
        sx={{
          backgroundColor: 'common.black',
          height: '58px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 3,
          }}
        >
          <Logo />
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <DesktopMenu />
          </Box>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <SearchBox />
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', sm: 'none' },
          }}
        >
          <MobileMenu target={menuAnchor} />
        </Box>
      </AppBar>
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 3,
        }}
      >
        <SearchBox buttonColor="black" />
      </Box>
    </Box>
  )
}
