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
        mt: 4,
      }}
    >
      <Typography variant="h5">{titulo}</Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 2,
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
