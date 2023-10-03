import { Typography } from '@mui/material'

export default function Title({
  children,
  variant = 'h2',
  component = 'h2',
  color = 'text.primary',
  borderBottomColor = 'primary.main',
  sx = {},
  textWrap = 'normal',
  ...otherProps
}) {
  return (
    <Typography
      variant={variant}
      component={component}
      color={color}
      sx={{
        display: 'inline-block',
        borderBottom: `3px solid`,
        borderBottomColor: borderBottomColor,
        textAlign: 'center',
        textWrap: textWrap,
        whiteSpace: textWrap,
        ...sx,
      }}
      {...otherProps}
    >
      {children}
    </Typography>
  )
}
