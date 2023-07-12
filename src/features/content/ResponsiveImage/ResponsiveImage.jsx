import Image from 'next/image'
import Link from 'next/link'

import { Box, Typography } from '@mui/material'

/**
 * Componente que insira imagens no conteúdo markdown e informe as dimensões da imagem.
 *
 * `![AltText {768x432} {priority} {caption: Photo by Someone}](/image.jpg)`
 *
 * @param {*} props
 * @returns
 */
export default function ResponsiveImage(props) {
  const alt = props.alt?.replace(/ *\{[^)]*\} */g, '')
  const metaSize = props.alt?.match(/\{([^)]+)x([^)]+)\}/g)

  const metaWidth = metaSize ? metaSize[0].match(/{([^}]+)x/) : null
  const metaHeight = metaSize ? metaSize[0].match(/x([^}]+)}/) : null

  const width = metaWidth ? metaWidth[1] : '1000'
  const height = metaHeight ? metaHeight[1] : '500'

  const isPriority = props.alt?.toLowerCase().includes('{priority}')
  const hasCaption = props.alt?.toLowerCase().includes('{caption:')
  const caption = props.alt?.match(/{caption: (.*?)}/)?.pop()

  return (
    <Box
      sx={{
        display: 'inline-block',
        textAlign: 'center',
        width: '100%',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'inline-block',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: `${height}px`,
          width: `${width}px`,
        }}
      >
        <a href={props.src} target="_blank" rel="noopener noreferrer">
          <Image
            src={props.src}
            width={width}
            height={height}
            className="postImg"
            alt={alt}
            priority={isPriority}
            layout="responsive"
            loading="lazy"
          />
        </a>
      </Box>
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
