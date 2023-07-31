import { Box } from '@mui/material'

import { Tag } from '@/features/ui'

export default function ContentTags({
  tags,
  backgroundColor = 'rgb(0 0 0 / 30%)',
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 1,
      }}
    >
      {tags &&
        tags.map((tag) => (
          <Tag key={tag} label={tag} backgroundColor={backgroundColor} />
        ))}
    </Box>
  )
}
