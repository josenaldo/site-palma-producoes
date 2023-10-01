import { Tags } from '@/features/ui'
import { Box, Typography } from '@mui/material'

export default function BlockTags({ tags, size = 'small' }) {
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
        }}
      >
        {tags && <Tags tags={tags} size={size} />}
      </Box>
    </Box>
  )
}
