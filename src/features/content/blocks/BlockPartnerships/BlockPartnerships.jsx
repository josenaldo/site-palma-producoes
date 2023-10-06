import { Box, Typography } from '@mui/material'

export default function BlockPartnerships({ children, titulo, ...props }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        width: '100%',
        my: 4,
      }}
    >
      {titulo && <Typography variant="h5">{titulo}</Typography>}

      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          flexWrap: 'wrap',
          gap: {
            xs: 2,
            sm: 4,
          },
          alignItems: 'space-between',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
