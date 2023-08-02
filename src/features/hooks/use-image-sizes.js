const { useTheme } = require('@mui/material')

export default function useImageSizes(width) {
  const theme = useTheme()

  const numberWidth =
    width instanceof String ? parseInt(width.replace('px', '')) : width

  const breakpoints = theme.breakpoints.values

  const sizes = Object.keys(breakpoints)
    .slice(1, 5)
    .map((key) => {
      const value = breakpoints[key]

      if (value <= numberWidth) {
        return { breakpoint: value, width: value }
      } else {
        return { breakpoint: value, width: width }
      }
    })

  const sizesAttr = sizes.reduce((acc, curr) => {
    return `(max-width: ${curr.breakpoint}px) ${curr.width}px,  ${acc} `
  }, '')

  return sizesAttr
}
