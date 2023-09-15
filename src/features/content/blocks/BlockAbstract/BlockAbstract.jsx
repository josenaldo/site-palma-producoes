import { Box, Typography } from '@mui/material'
import React from 'react'

export default function BlockAbstract({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: {
          xs: 2,
          sm: 10,
          md: 18,
          lg: 25,
        },
        textAlign: 'center',
        fontStyle: 'italic',
      }}
    >
      {children}
    </Box>
  )
}
