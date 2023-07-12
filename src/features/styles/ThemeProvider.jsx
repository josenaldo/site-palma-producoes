import CssBaseline from '@mui/material/CssBaseline'

import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles'
import { theme } from '@/features/styles'

export default function ThemeProvider({ children }) {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  )
}
