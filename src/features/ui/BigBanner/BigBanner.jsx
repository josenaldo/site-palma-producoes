import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'
import { ButtonLink, ImageBox } from '@/features/ui'

BigBanner.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  aspectRatio: PropTypes.number,
}

export default function BigBanner({
  image,
  alt,
  href,
  buttonText,
  title,
  width = 1200,
  height = 628,
  aspectRatio = 21 / 9,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ImageBox
        src={image}
        alt={alt}
        width={width}
        height={height}
        aspectRatio={aspectRatio}
        cover
        sx={{
          filter: 'brightness(40%)',
          zIndex: -1,
          transition: 'background-image 0.2s ease-in-out',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Typography variant="h2" component="h2" color="light.main">
          {title}
        </Typography>

        <ButtonLink href={href} variant="outlined" color="light" size="large">
          {buttonText}
        </ButtonLink>
      </Box>
    </Box>
  )
}
