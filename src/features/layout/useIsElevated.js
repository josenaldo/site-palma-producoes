import { useScrollTrigger } from '@mui/material'

export default function useIsElevated() {
  const elevated = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return elevated
}
