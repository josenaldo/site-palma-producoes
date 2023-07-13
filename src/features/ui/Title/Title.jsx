import { Typography } from '@mui/material'
import { palette } from '@/features/styles'

export default function Title({
  children,
  variant = 'h2',
  component = 'h2',
  color = 'text.primary',
  underlineColor = 'primary.main',
  sx = {},
}) {
  return (
    <Typography
      variant={variant}
      component={component}
      color={color}
      sx={{
        display: 'inline-block',
        borderBottom: `5px solid`,
        borderBottomColor: underlineColor,
        ...sx,
      }}
    >
      {children}
    </Typography>
  )
}
