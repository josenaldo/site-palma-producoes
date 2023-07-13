import { Title } from '@/features/ui'
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
      <Typography variant="body2">{subtitle}</Typography>
      <Title variant="h2" component="h1">
        {title}
      </Title>
    </Box>
  )
}
