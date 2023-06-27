'use client'

import React from 'react'
import { Box, IconButton, Menu, MenuItem as MuiMenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ClearIcon from '@mui/icons-material/Clear'

import Link from 'next/link'

export default function MobileMenu({ target }) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleMenu = (event) => {
    setAnchorEl(target.current)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <IconButton
        size="large"
        edge="end"
        color="primary"
        aria-label="menu"
        onClick={handleMenu}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        elevation={0}
        marginThreshold={0}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          padding: 0,
          margin: 0,
          '& .MuiPaper-root': {
            backgroundColor: 'menu.main',
            color: 'common.white',
            px: 3,
            fontSize: '1rem',
            margin: 0,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <IconButton color="primary" edge="end" onClick={handleClose}>
            <ClearIcon fontSize="large" />
          </IconButton>
        </Box>

        <MenuItem onClick={handleClose} href="/">
          Home
        </MenuItem>
        <MenuItem onClick={handleClose} href="/nossas-lojas">
          Nossas lojas
        </MenuItem>
        <MenuItem onClick={handleClose} href="/novidades">
          Novidades
        </MenuItem>
        <MenuItem onClick={handleClose} href="/promocoes" last>
          Promoções
        </MenuItem>
      </Menu>
    </Box>
  )
}

function MenuItem({ href, children, last = false }) {
  return (
    <MuiMenuItem
      component={Link}
      href={href}
      sx={{
        color: 'common.white',
        fontSize: '1rem',
        borderBottom: last ? 'none' : '1px solid',
      }}
    >
      {children}
    </MuiMenuItem>
  )
}
