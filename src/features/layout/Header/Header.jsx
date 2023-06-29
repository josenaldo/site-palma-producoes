'use client'

import React from 'react'

import { AppBar, Box } from '@mui/material'

import MobileMenu from './MobileMenu'
import { Logo } from '@/features/ui'

export default function Header() {
  const menuAnchor = React.useRef(null)

  return (
    <Box component="header" ref={menuAnchor}>
      <AppBar
        elevation={0}
        position="static"
        sx={{
          backgroundColor: 'transparent',
          height: '120px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
        }}
      >
        <Logo />

        <MobileMenu target={menuAnchor} />
      </AppBar>
    </Box>
  )
}
