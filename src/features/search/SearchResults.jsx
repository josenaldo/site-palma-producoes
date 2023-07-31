import { Box } from '@mui/material'

import { useTranslation } from '@/features/i18n'
import { SearchResult } from '@/features/search'

export default function SearchResults({ results }) {
  const { t } = useTranslation(['common', 'pesquisa'])

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
