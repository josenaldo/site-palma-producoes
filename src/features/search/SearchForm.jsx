import {
  Box,
  IconButton,
  InputAdornment,
  LinearProgress,
  TextField,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { useTranslation } from '@/features/i18n'

// todo: add i18n
export default function SearchForm({ handleSearch, query, setQuery, loading }) {
  const { t } = useTranslation(['common', 'pesquisa'])

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSearch}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TextField
          placeholder="Pesquisa"
          id="input-search-page"
          value={query}
          color="secondary"
          onChange={(e) => setQuery(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  color="secondary"
                  disabled={!query}
                  onClick={handleSearch}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            width: { xs: '100%', md: '50%' },
          }}
        />
      </Box>
      <Box
        sx={{
          height: '4px',
          width: '40%',
          py: 1,
        }}
      >
        {loading && <LinearProgress />}
      </Box>
    </Box>
  )
}
