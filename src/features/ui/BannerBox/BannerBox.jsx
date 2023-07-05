import { Box } from '@mui/material'

export default function BannerBox({ image, children, sx = {} }) {
  return (
    <Box
      sx={{
        position: 'relative',
        ...sx,
      }}
    >
      <Box
        sx={{
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(40%)',
            zIndex: -1,
            transition: 'background-image 0.2s ease-in-out',
          },
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
