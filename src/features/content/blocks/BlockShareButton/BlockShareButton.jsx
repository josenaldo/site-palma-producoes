import { ShareLink } from '@/features/ui'
import { Box } from '@mui/material'
import React from 'react'

export default function BlockShareButton({
  url,
  title,
  image,
  type = 'icon',
  color = 'secondary',
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        my: 2,
      }}
    >
      <ShareLink
        url={url}
        title={title}
        image={image.url}
        color={color}
        type={type}
      />
    </Box>
  )
}
