import { Box, Typography } from '@mui/material'

export default function BlockTags({ tags }) {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          gap: 1,
          color: 'text.dark',
          textTransform: 'uppercase',
          '& :not(:last-child)': {
            paddingRight: 1,
            borderRight: '1px solid',
            borderColor: 'text.dark',
          },
        }}
      >
        {tags &&
          tags.map((tag) => (
            <Typography variant="caption" key={tag}>
              {tag}
            </Typography>
          ))}
      </Box>
    </Box>
  )
}
