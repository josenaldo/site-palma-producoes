import { format, parse, parseISO } from 'date-fns'

import { Box, Typography } from '@mui/material'
import DateIcon from '@mui/icons-material/CalendarToday'

export default function ContentDate({
  date,
  dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
  showTime = false,
}) {
  if (!date) return null

  const parsed = parse(date, dateFormat, new Date())

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1,
      }}
    >
      <DateIcon fontSize="0.75rem" />

      <Typography variant="caption">{format(parsed, 'dd/MM/yyyy')}</Typography>

      {showTime && (
        <Typography variant="caption">{format(parsed, 'HH:mm')}</Typography>
      )}
    </Box>
  )
}
