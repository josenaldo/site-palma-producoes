import React, { useState } from 'react'

import {
  AppBar,
  Box,
  Collapse,
  Container,
  IconButton,
  useScrollTrigger,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

import { useIsHome } from '@/features/layout'
import { Logo } from '@/features/ui'

import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'
import SearchInput from '@/features/search/SearchInput'
import { useRouter } from 'next/router'

export default function Header({ color, ...props }) {
  const router = useRouter()

  const isHome = useIsHome()
  const [searchOpen, setSearchOpen] = useState(false)
  const isSearchPage = router.pathname === '/[locale]/pesquisa'

  const elevated = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  const toggleSearch = () => {
    setSearchOpen(!searchOpen)
  }

  return (
    <AppBar
      component="header"
      elevation={elevated ? 4 : 0}
      color={elevated ? 'white' : 'transparent'}
      sx={{
        position: isHome ? 'fixed' : 'sticky',
        zIndex: 1000,
        px: 0,
        py: 3,
        mb: 2,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'none',
              lg: 'block',
              xl: 'block',
            },
          }}
        >
          <Logo
            color={!isHome || elevated ? 'black' : 'white'}
            type="horizontal"
          />
        </Box>
        <Box
          sx={{
            display: {
              xs: 'block',
              sm: 'block',
              md: 'block',
              lg: 'none',
              xl: 'none',
            },
          }}
        >
          <Logo
            color={!isHome || elevated ? 'black' : 'white'}
            type="vertical"
          />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: {
              xs: 'row',
              sm: 'row',
              md: 'row-reverse',
            },
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          {!isSearchPage && (
            <IconButton
              onClick={() => toggleSearch()}
              color={!isHome || elevated ? 'black' : 'white'}
            >
              {searchOpen ? <CloseIcon /> : <SearchIcon />}
            </IconButton>
          )}
          <MobileMenu />
          <DesktopMenu
            elevated={elevated}
            searchOpen={searchOpen}
            toggleSearch={toggleSearch}
          />
        </Box>
      </Container>
      {!isSearchPage && (
        <Collapse in={searchOpen}>
          <Box>
            <Container>
              <SearchInput backgroundDark={isHome && !elevated} />
            </Container>
          </Box>
        </Collapse>
      )}
    </AppBar>
  )
}
