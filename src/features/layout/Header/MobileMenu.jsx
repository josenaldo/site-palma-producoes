import { useState } from 'react'

import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ClearIcon from '@mui/icons-material/Clear'
import { useTheme } from '@mui/material/styles'

import { pages } from '@/data'
import { useTranslation } from '@/features/i18n'
import { useIsHome } from '@/features/layout'
import { Link, Logo, SocialLinks } from '@/features/ui'
import { LanguageSelector } from '@/features/i18n/client'

export default function MobileMenu() {
  const { t } = useTranslation(['common'])

  const isHome = useIsHome()

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box
      sx={{
        display: {
          xs: 'block',
          md: 'none',
        },
      }}
    >
      <IconButton
        size="large"
        edge="end"
        aria-label="menu"
        onClick={handleOpen}
        sx={{
          color: isHome ? 'common.light' : 'common.black',
        }}
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

            <MenuItems t={t} onClose={handleClose} />
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            pb: 2,
          }}
        >
          <LanguageSelector t={t} />
        </DialogActions>
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
      <Logo height={120} />
      <SocialLinks />
    </Box>
  )
}

function MenuDivider() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const orientation = isSmallScreen ? 'horizontal' : 'vertical'
  const width = isSmallScreen ? '100%' : null

  return (
    <Divider
      variant="fullWidth"
      orientation={orientation}
      sx={{
        borderColor: 'primary.main',
        borderWidth: '3px',
        display: 'block',
        width,
      }}
    />
  )
}

function MenuItems({ t, onClose }) {
  if (!pages || pages.length === 0) return null

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
        gap: 2,
      }}
    >
      {pages.map((page) => (
        <Link key={page.href} href={page.href} onClick={onClose} variant="nav">
          {t(page.title)}
        </Link>
      ))}
    </Box>
  )
}
