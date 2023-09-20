import React from 'react'
import { Box } from '@mui/material'

export default function BlockColumns({ format = '1|1', children }) {
  const arrayChildren = React.Children.toArray(children)

  const columnsArray = format.split('|')
  const templateColumns = columnsArray.map((column) => `${column}fr`).join(' ')

  return (
    <Box
      sx={{
        display: {
          xs: 'flex',
          sm: 'flex',
          md: 'grid',
        },
        flexDirection: 'column',

        gridTemplateColumns: templateColumns,

        maxWidth: '100%',
        width: '100%',
        maxHeight: '100%',
      }}
    >
      {arrayChildren}
    </Box>
  )
}
