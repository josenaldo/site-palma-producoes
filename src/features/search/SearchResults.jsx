import { SearchResult } from '@/features/search'
import { Box } from '@mui/material'

export default function SearchResults({ results, t }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        py: 4,
      }}
    >
      {results &&
        results.map((result) => (
          <SearchResult key={result.url} result={result} t={t} />
        ))}
    </Box>
  )
}
