import { AppBar, Box } from '@mui/material'

import Menu from './Menu'
import { Logo } from '@/features/ui'
import React from 'react'

export default function Header() {
  return (
    <Box component="header">
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
        <Logo color="preta" />
        <Menu />
      </AppBar>
    </Box>
  )
}
