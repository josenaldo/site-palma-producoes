import { Box } from '@mui/material'

export default function FormControl({ fullWidth, children, ...props }) {
  return (
    <Box
      sx={{
        width: fullWidth ? '100%' : 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </Box>
  )
}
