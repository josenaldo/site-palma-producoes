'use client'
import { createTheme } from '@mui/material/styles'

import palette from './palette'
import components from './components'

const baseTheme = {
  palette,
  components,
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
}

const extendTheme = (theme) => {
  theme.typography.h1 = {
    fontSize: 'clamp(32px, 5vw, 48px)',
    fontWeight: 500,
  }

  theme.typography.h2 = {
    fontSize: 'clamp(28px, 4.5vw, 32px)',
    fontWeight: 500,
  }

  theme.typography.h3 = {
    fontSize: 'clamp(24px, 4vw, 28x)',
    fontWeight: 500,
  }

  theme.typography.h4 = {
    fontSize: 'clamp(20px, 3.5vw, 24px)',
    fontWeight: 500,
  }

  theme.typography.h5 = {
    fontSize: 'clamp(16px, 3vw, 20px)',
    fontWeight: 500,
  }

  theme.typography.h6 = {
    fontSize: 'clamp(12px, 2.5vw, 16px)',
    fontWeight: 500,
  }
}
const theme = createTheme(baseTheme)
extendTheme(theme)

export default theme
