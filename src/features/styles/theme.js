import { createTheme, responsiveFontSizes } from '@mui/material/styles'

import palette from './palette'
import components from './components'
import typography from './typography'

const baseTheme = {
  palette,
  components,
  typography,
}

let theme = createTheme(baseTheme)
theme = responsiveFontSizes(theme)

export default theme
