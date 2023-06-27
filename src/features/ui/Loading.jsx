'use client'

import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
} from '@mui/material'

export default function Loading({ color = 'secondary' }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: '2rem',
        gap: '1rem',
        padding: '1rem',
      }}
    >
      <Typography variant="h6" color={color}>
        Loading...
      </Typography>
      <CircularProgress color={color} />
    </Box>
  )
}
