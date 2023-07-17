import { Chip, colors } from '@mui/material'

export default function Tag({ label, textColor = 'text.light' }) {
  return (
    <Chip
      label={label}
      size="small"
      sx={{ color: textColor, backgroundColor: 'rgb(0 0 0 / 30%) ' }}
    />
  )
}
