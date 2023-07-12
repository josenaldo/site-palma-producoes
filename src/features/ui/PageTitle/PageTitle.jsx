import { Box, Typography } from '@mui/material'

export default function PageTitle({ title, subtitle, sx }) {
  return (
    <Box
      sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
    >
      <Typography variant="pageSubtitle">{subtitle}</Typography>
      <Typography variant="pageTitle">{title}</Typography>
    </Box>
  )
}