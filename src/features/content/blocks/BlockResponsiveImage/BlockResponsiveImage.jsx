import { Box, Typography } from '@mui/material'

import { ImageBox, LightBox } from '@/features/ui'
import { useState } from 'react'

/**
 * Componente que insira imagens no conteúdo markdown e informe as dimensões da imagem.
 *
 * `![AltText [768x432] [priority] [caption: Photo by Someone]](/image.jpg)`
 *
 * @param {*} props
 * @returns
 */
export default function BlockResponsiveImage(props) {
  const alt = props.alt?.replace(/\[[^\]]*\]/g, '').trim()
  const metaSize = props.alt?.match(/\[([^\]]+)\]/g)

  const metaWidth = metaSize ? metaSize[0].match(/\[([^\]]+)x/) : null
  const metaHeight = metaSize ? metaSize[0].match(/x([^\]]+)\]/) : null

  const width = metaWidth ? metaWidth[1] : '1000'
  const height = metaHeight ? metaHeight[1] : '500'

  const isPriority = props.alt?.toLowerCase().includes('[priority]') || false
  const hasCaption = props.alt?.toLowerCase().includes('[caption:')
  const caption = props.alt?.match(/\[caption: (.*?)\]/)?.pop()
  const fullWidth = props.alt?.match(/\[fullwidth\]/)?.pop() ? true : false
  const aspectRatio = props.alt?.match(/\[aspect-ratio: (.*?)\]/)?.pop() || null

  const [open, setOpen] = useState(false)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        overflow: 'hidden',
        my: 4,
      }}
    >
      <ImageBox
        src={props.src}
        alt={alt}
        width={width}
        height={height}
        priority={isPriority}
        aspectRatio={aspectRatio}
        cover
        fullWidth={fullWidth}
        imageStyle={{
          borderRadius: '10px',
        }}
        onClick={() => setOpen(true)}
      />

      {hasCaption && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            my: '5px',
          }}
        >
          <Typography variant="caption" textAlign="center">
            {caption}
          </Typography>
        </Box>
      )}

      <LightBox
        src={props.src}
        width={width}
        height={height}
        alt={alt}
        aspectRatio={aspectRatio}
        open={open}
        onClose={() => setOpen(false)}
        caption={caption}
      />
    </Box>
  )
}
