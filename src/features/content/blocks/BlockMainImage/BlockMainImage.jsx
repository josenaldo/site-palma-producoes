import { ImageBox } from '@/features/ui'
import { Box, Container } from '@mui/material'

export default function BlockMainImage({ image }) {
  return (
    <Box sx={{ my: 4 }}>
      <ImageBox
        src={image.url}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority
        aspectRatio="21/9"
        fullWidth
        cover
      />
    </Box>
  )
}
