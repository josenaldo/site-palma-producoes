import { Typography, useTheme } from '@mui/material'

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
  const theme = useTheme()

  const undercolor =
    borderBottomColor === 'transparent'
      ? 'transparente'
      : borderBottomColor
          .split('.')
          .reduce((acc, curr) => acc[curr], theme.palette)

  const underProps =
    borderBottomColor === 'transparent'
      ? {}
      : {
          textDecoration: `underline solid 3px`,
          textDecorationColor: undercolor,
          textUnderlineOffset: '0.2em',
        }

  return (
    <Typography
      variant={variant}
      component={component}
      color={color}
      sx={{
        display: 'inline-block',
        // borderBottom: `3px solid`,
        // borderBottomColor: borderBottomColor,
        textAlign: 'center',
        textWrap: textWrap,
        whiteSpace: textWrap,
        ...sx,
        ...underProps,
      }}
      {...otherProps}
    >
      {children}
    </Typography>
  )
}
