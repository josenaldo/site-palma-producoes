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
  aspectRatio,
  cover = false,
  fullWidth = false,
  imageStyle = {},
  onClick = () => {},
}) {
  const sizes = useImageSizes(width)

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        aspectRatio: aspectRatio ? aspectRatio : `${width}/${height}`,
        width: fullWidth ? '100vw' : '100%',
        maxWidth: fullWidth ? '100vw' : '100%',
        marginLeft: fullWidth ? '-50vw' : '0',
        left: fullWidth ? '50%' : '0',
        ...sx,
      }}
      onClick={onClick}
    >
      <Image
        src={src}
        fill
        alt={alt}
        priority={priority}
        sizes={sizes}
        style={{
          objectFit: cover ? 'cover' : 'contain',
          overflow: cover ? 'hidden' : 'visible',
          ...imageStyle,
        }}
      />
    </Box>
  )
}
