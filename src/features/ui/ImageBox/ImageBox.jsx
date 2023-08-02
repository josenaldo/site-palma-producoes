import { Box } from '@mui/material'
import Image from 'next/image'

import { useImageSizes } from '@/features/hooks'

export default function ImageBox({
  src,
  alt,
  width,
  height,
  priority = false,
  sx = {},
}) {
  const sizes = useImageSizes(width)

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        aspectRatio: `${width}/${height}`,
        width: '100%',
        ...sx,
      }}
    >
      <Image src={src} fill alt={alt} priority={priority} sizes={sizes} />
    </Box>
  )
}
