import { Box, Chip, TextField } from '@mui/material'
import { useState } from 'react'

export default function ChipList({ items, label = 'Filter', ...props }) {
  const [filter, setFilter] = useState('')

  console.log(items)
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 2,
        my: 2,
      }}
    >
      <Box>
        <TextField
          placeholder={label}
          size="small"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
        }}
      >
        {items
          .filter(
            (item) =>
              item.toLowerCase().trim().indexOf(filter.toLowerCase().trim()) >
              -1
          )
          .map((item, index) => (
            <Chip key={index} label={item.trim()} />
          ))}
      </Box>
    </Box>
  )
}
