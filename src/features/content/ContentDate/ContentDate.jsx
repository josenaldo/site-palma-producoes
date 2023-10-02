import { Box, Typography } from '@mui/material'
import DateIcon from '@mui/icons-material/CalendarToday'

import { format, parse } from 'date-fns'

const variantIconSize = {
  body1: '1.2rem',
  body2: '1.1rem',
  body3: '1rem',
  body4: '0.8rem',
  caption: '0.6rem',
}

export default function ContentDate({
  date,
  dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
  showTime = false,
  variant = 'body1',
}) {
  if (!date) return null

  const parsed = parse(date, dateFormat, new Date())

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <DateIcon
        sx={{
          fontSize: variantIconSize[variant] || variantIconSize.body1,
        }}
      />

      <Typography variant={variant}>{format(parsed, 'dd/MM/yyyy')}</Typography>

      {showTime && (
        <Typography variant={variant}>{format(parsed, 'HH:mm')}</Typography>
      )}
    </Box>
  )
}
