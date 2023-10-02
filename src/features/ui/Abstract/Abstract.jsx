import { Box } from '@mui/material'

export default function Abstract({ children, ...props }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: {
          xs: 2,
          sm: 10,
          md: 18,
          lg: 25,
        },
        textAlign: 'center',
        fontStyle: 'italic',
      }}
      {...props}
    >
      {children}
    </Box>
  )
}
