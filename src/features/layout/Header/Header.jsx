import React, { useState } from 'react'

import { AppBar, Box, Collapse, Container, Fab } from '@mui/material'

import { useIsElevated, useIsHome } from '@/features/layout'
import { Logo } from '@/features/ui'

import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'
import SearchInput from '@/features/search/SearchInput'
import { useRouter } from 'next/router'

export default function Header({ color, ...props }) {
  const router = useRouter()
  const isHome = useIsHome()
  const elevated = useIsElevated()

  const [searchOpen, setSearchOpen] = useState(false)
  const isSearchPage = router.pathname === '/[locale]/pesquisa'

  const toggleSearch = () => {
    setSearchOpen(!searchOpen)
  }

  return (
    <>
      <Box id="back-to-top-anchor" />
      <AppBar
        component="header"
        elevation={elevated ? 4 : 0}
        color={elevated ? 'white' : 'transparent'}
        sx={{
          position: isHome && !elevated ? 'fixed' : 'sticky',
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
            <MobileMenu searchOpen={searchOpen} toggleSearch={toggleSearch} />
            <DesktopMenu
              elevated={elevated}
              searchOpen={searchOpen}
              toggleSearch={toggleSearch}
            />
          </Box>
        </Container>
        {!isSearchPage && (
          <Collapse in={searchOpen}>
            <Box
              sx={{
                mt: 2,
              }}
            >
              <Container>
                <SearchInput backgroundDark={isHome && !elevated} />
              </Container>
            </Box>
          </Collapse>
        )}
      </AppBar>
    </>
  )
}
