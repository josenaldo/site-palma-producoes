import { Box } from '@mui/material'

import { MarkdownContent } from '@/features/content'
import { Title } from '@/features/ui'

export default function PageHeader({ title, text, direction = 'row' }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: direction,
        },
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        mb: 2,
      }}
    >
      <Title
        sx={{
          width: {
            xs: '100%',
            md: direction === 'row' ? '30%' : '100%',
          },
        }}
      >
        {title}
      </Title>

      <Box
        sx={{
          width: {
            xs: '100%',
            md: direction === 'row' ? '70%' : '100%',
          },
        }}
      >
        <MarkdownContent content={text} />
      </Box>
    </Box>
  )
}
