import { useRouter } from 'next/router'

import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

import { useIsElevated, useIsHome } from '@/features/layout'

export default function SearchButton({ toggleSearch, searchOpen }) {
  const isHome = useIsHome()
  const router = useRouter()
  const isSearchPage = router.pathname === '/[locale]/pesquisa'
  const elevated = useIsElevated()

  if (isSearchPage) return null

  return (
    <IconButton
      onClick={() => toggleSearch()}
      color={!isHome || elevated ? 'black' : 'white'}
    >
      {searchOpen ? <CloseIcon /> : <SearchIcon />}
    </IconButton>
  )
}
