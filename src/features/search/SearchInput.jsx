import React from 'react'
import { Box, TextField, InputAdornment, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { useRouter } from 'next/router'
import { useTranslation } from '@/features/i18n'

export default function SearchInput({
  id = 'search-input',

  fullWidth = true,
  backgroundDark = false,
}) {
  const { t, locale } = useTranslation(['common'])

  const [query, setQuery] = React.useState('')
  const router = useRouter()

  const handleSearch = (event) => {
    event.preventDefault()

    router.push({
      pathname: `/${locale}/pesquisa`,
      query: {
        q: query,
      },
    })
  }

  return (
    <Box component="form" onSubmit={handleSearch}>
      <TextField
        placeholder={t('common:search.searchPlaceholder')}
        id={id}
        fullWidth={fullWidth}
        color="primary"
        focused
        value={query}
        variant="outlined"
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                color="secondary"
                disabled={!query}
                onClick={handleSearch}
                sx={{
                  '&.Mui-disabled': {
                    color: backgroundDark
                      ? 'rgb(255 255 255 / 0.26)'
                      : 'rgb(0 0 0 / 0.26)',
                  },
                }}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiInputBase-root': {
            color: backgroundDark ? 'light.main' : 'dark.main',
          },
        }}
      />
    </Box>
  )
}
