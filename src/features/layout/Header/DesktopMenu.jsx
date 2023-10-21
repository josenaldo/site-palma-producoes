import { Box, Divider } from '@mui/material'

import { pages } from '@/data'
import { useTranslation } from '@/features/i18n'
import { useIsElevated, useIsHome } from '@/features/layout'
import { Link, SocialLinks } from '@/features/ui'
import { LanguageSelector } from '@/features/i18n/client'
import { SearchButton } from '@/features/search'

export default function DesktopMenu({ searchOpen, toggleSearch }) {
  const { t } = useTranslation(['common'])
  const isHome = useIsHome()
  const elevated = useIsElevated()

  return (
    <Box
      sx={{
        display: {
          xs: 'none',
          md: 'flex',
        },
        flexDirection: 'row',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <MenuItems
        t={t}
        color={!isHome || elevated ? 'text.dark' : 'text.light'}
      />
      <SearchButton toggleSearch={toggleSearch} searchOpen={searchOpen} />
      <SocialLinks color={!isHome || elevated ? 'text.dark' : 'text.light'} />
      <Divider
        orientation="vertical"
        flexItem
        variant="middle"
        color="dark.main"
      />
      <LanguageSelector onlyIcon />
    </Box>
  )
}

function MenuItems({ t, color = 'text.dark' }) {
  if (!pages || pages.length === 0) return null

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1,
      }}
    >
      {pages.map((page) => (
        <Link key={page.href} href={page.href} variant="nav" color={color}>
          {t(page.title)}
        </Link>
      ))}
    </Box>
  )
}
