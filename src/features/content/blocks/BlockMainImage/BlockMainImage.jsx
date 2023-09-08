import { ImageBox } from '@/features/ui'
import { Container } from '@mui/material'

export default function BlockMainImage({ image }) {
  return (
    <Container disableGutters>
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
    </Container>
  )
}
