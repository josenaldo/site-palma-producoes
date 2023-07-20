import { Box, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'

export default function ContentAuthor({ author }) {
  if (!author) return null

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1,
      }}
    >
      <PersonIcon fontSize="0.75rem" />
      <Typography variant="caption">{author}</Typography>
    </Box>
  )
}
