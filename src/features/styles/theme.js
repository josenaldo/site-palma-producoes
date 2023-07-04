'use client'

import { createTheme } from '@mui/material/styles'

import palette from './palette'
import components from './components'
import typography from './typography'

const baseTheme = {
  palette,
  components,
  typography,
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

const theme = createTheme(baseTheme)

export default theme
