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
            borderColor: 'grey.500',
          },
        }}
      >
        {tags &&
          tags.map((tag) => (
            <Typography
              variant="caption"
              key={tag}
              sx={{
                textTransform: 'uppercase',
                color: 'grey.500',
                fontSize: '0.7rem',
                lineHeight: '0.7rem',
              }}
            >
              {tag}
            </Typography>
          ))}
      </Box>
    </Box>
  )
}
