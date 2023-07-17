import { Typography } from '@mui/material'

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
        borderBottom: `3px solid`,
        borderBottomColor: underlineColor,
        textAlign: 'center',
        ...sx,
      }}
    >
      {children}
    </Typography>
  )
}
