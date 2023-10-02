import { Box } from '@mui/material'
import React from 'react'

export default function BlockSpacer({ height = 1, ...props }) {
  console.log('BlockSpacer', { height, props })
  return (
    <Box
      className="BlockSpacer"
      sx={{
        display: 'block',
        width: '100%',
        paddingTop: height,
        position: 'relative',
      }}
    ></Box>
  )
}
