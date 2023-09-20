import { Box, Typography } from '@mui/material'
import { ImageBox } from '@/features/ui'

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

  const isPriority = props.alt?.toLowerCase().includes('[priority]')
  const hasCaption = props.alt?.toLowerCase().includes('[caption:')
  const caption = props.alt?.match(/\[caption: (.*?)\]/)?.pop()
  const fullWidth = props.alt?.match(/\[fullwidth\]/)?.pop() ? true : false
  const aspectRatio = props.alt?.match(/\[aspect-ratio: (.*?)\]/)?.pop() || null

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        borderRadius: {
          xs: '5px',
          sm: '7.5px',
          md: '10px',
          lg: '12.5px',
          xl: '15px',
        },
        overflow: 'hidden',
      }}
    >
      <a href={props.src} target="_blank" rel="noopener noreferrer">
        <ImageBox
          src={props.src}
          alt={alt}
          width={width}
          height={height}
          priority={isPriority}
          aspectRatio={aspectRatio}
          // cover={aspectRatio ? true : false}
          cover
          fullWidth={fullWidth}
          imageStyle={{}}
        />
      </a>

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
    </Box>
  )
}
