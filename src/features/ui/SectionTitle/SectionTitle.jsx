import { Typography } from '@mui/material'

// TODO: Verificar se não é melhor mover para outro lugar
export default function SectionTitle({ children, color = 'text.primary' }) {
  return (
    <Typography
      variant="h2"
      color={color}
      sx={{
        textAlign: 'center',
        mb: 4,
      }}
    >
      {children}
    </Typography>
  )
}
