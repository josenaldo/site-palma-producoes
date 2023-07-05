'use client'

import { createTheme } from '@mui/material/styles'

import palette from './palette'
import components from './components'
import typography from './typography'

const baseTheme = {
  palette,
  components,
  typography,
}

const theme = createTheme(baseTheme)

export default theme
