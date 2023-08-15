import { Box } from '@mui/material'
import Image from 'next/image'

import { useImageSizes } from '@/features/hooks'

import styles from './ImageBox.module.css'

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
}) {
  const sizes = useImageSizes(width)

  console.log('src: ', src)
  console.log('fullWidth: ', fullWidth)
  return (
    <Box className={fullWidth ? styles.fullWidth : ''}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          aspectRatio: aspectRatio ? aspectRatio : `${width}/${height}`,
          width: '100%',
          ...sx,
        }}
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
          }}
        />
      </Box>
    </Box>
  )
}
