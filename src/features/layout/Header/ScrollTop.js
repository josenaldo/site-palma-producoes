import { useScrollTrigger, Fade, Box, Fab } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

export default function ScrollTop({}) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <Fade in={trigger} color="error">
      <Box
        onClick={handleClick}
        sx={{ position: 'fixed', bottom: 80, right: 16 }}
      >
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  )
}
