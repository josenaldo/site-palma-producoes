import { useState } from 'react'
import { Box, Chip, TextField } from '@mui/material'

import { Pagination } from '@/features/ui'

export default function BlockChipList({ items, label = 'Filter', ...props }) {
  const [filter, setFilter] = useState('')

  const [pageIndex, setPageIndex] = useState(1)

  const pageSize = process.env.NEXT_PUBLIC_DEFAULT_CHIPLIST_PAGE_SIZE || 20

  const filtered = items.filter(
    (item) =>
      item.toLowerCase().trim().indexOf(filter.toLowerCase().trim()) > -1
  )
  const pageCount = Math.ceil(filtered.length / pageSize)

  const currentPage =
    pageIndex > 0 && pageIndex <= pageCount ? pageIndex - 1 : 0

  const itemsToShow = filtered.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize
  )

  const handleChangePage = (event, value) => {
    setPageIndex(value)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 1,
        my: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <TextField
          placeholder={label}
          size="small"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
        }}
      >
        {itemsToShow.map((item, index) => (
          <Chip key={index} label={item.trim()} />
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Pagination
          onChange={handleChangePage}
          page={pageIndex}
          count={pageCount}
          showEllipses={false}
          siblingCount={1}
          boundaryCount={1}
          py={2}
        />
      </Box>
    </Box>
  )
}
