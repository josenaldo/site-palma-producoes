import { Box } from '@mui/material'
import Image from 'next/image'

export default function ImageBox({ src, alt, width, height }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        aspectRatio: `${width}/${height}`,
        width: '100%',
      }}
    >
      <Image src={src} fill alt={alt} priority />
    </Box>
  )
}
