import { Box, Typography } from '@mui/material'

export default function Tags({ tags, color = 'grey.400' }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontSize: '0.7rem',
        gap: 1,
        color: color,
        textTransform: 'uppercase',
        '& :not(:last-child)': {
          paddingRight: 1,
          borderRight: '1px solid',
          borderColor: color,
        },
      }}
    >
      {tags &&
        tags.map((tag, index) => (
          <Typography variant="caption" key={tag}>
            {tag}
          </Typography>
        ))}
    </Box>
  )
}
