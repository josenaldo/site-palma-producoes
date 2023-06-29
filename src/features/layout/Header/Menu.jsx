'use client'

import React from 'react'
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  MenuItem as MuiMenuItem,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ClearIcon from '@mui/icons-material/Clear'

import Link from 'next/link'
import { Logo } from '@/features/ui'
import { PAGES, SOCIAL_LINKS } from '@/data'

export default function Menu() {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box>
      <IconButton
        size="large"
        edge="end"
        color="common.black"
        aria-label="menu"
        onClick={handleOpen}
      >
        <MenuIcon />
      </IconButton>

      <Dialog
        onClose={handleClose}
        open={open}
        fullScreen
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: 'common.dark',
            color: 'common.light',
          },
        }}
      >
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <IconButton
            edge="end"
            onClick={handleClose}
            sx={{ color: 'common.light' }}
          >
            <ClearIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              justifyContent: 'center',
              justifyItems: 'center',
              alignContent: 'center',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <MenuLogo />

            <MenuDivider />

            <MenuItems onClose={handleClose} />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  )
}

function MenuLogo() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        color: 'common.light',
      }}
    >
      <Logo />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {SOCIAL_LINKS.map((socialLink, index) => (
          <IconButton
            key={index}
            href={socialLink.href}
            sx={{ color: 'common.light' }}
          >
            <socialLink.icon />
          </IconButton>
        ))}
      </Box>
    </Box>
  )
}

function MenuDivider() {
  return (
    <>
      <Divider
        variant="fullWidth"
        orientation="vertical"
        sx={{
          borderColor: 'primary.main',
          borderWidth: '2px',
          display: {
            xs: 'none',
            sm: 'block',
          },
        }}
      />
      <Divider
        variant="fullWidth"
        orientation="horizontal"
        sx={{
          borderColor: 'primary.main',
          borderWidth: '2px',
          display: {
            xs: 'block',
            sm: 'none',
            width: '100%',
          },
        }}
      />
    </>
  )
}

function MenuItems({ onClose }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: {
          xs: 'center',
          sm: 'flex-start',
        },
      }}
    >
      {PAGES.map((page) => (
        <MenuItem key={page.href} onClick={onClose} href={page.href}>
          {page.title}
        </MenuItem>
      ))}
    </Box>
  )
}

function MenuItem({ href, children }) {
  return (
    <MuiMenuItem
      component={Link}
      href={href}
      sx={{
        fontSize: '1rem',
        textTransform: 'uppercase',
      }}
    >
      {children}
    </MuiMenuItem>
  )
}
