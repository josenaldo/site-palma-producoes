import { Masonry } from '@mui/lab'
import React from 'react'

export default function BlockGallery({ children, ...props }) {
  const cleanedChildren = React.Children.toArray(children).filter((child) => {
    return child !== '\n' && child !== ' '
  })

  return (
    <Masonry
      columns={{
        xs: 2,
        sm: 2,
        md: 3,
      }}
      spacing={2}
      sx={{
        my: 5,
      }}
    >
      {cleanedChildren}
    </Masonry>
  )
}
