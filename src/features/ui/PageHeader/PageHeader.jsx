import { Box } from '@mui/material'

import { ContentBlock } from '@/features/content'
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
        mb: 6,
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

      {text && (
        <Box
          sx={{
            width: {
              xs: '100%',
              md: direction === 'row' ? '70%' : '100%',
            },
          }}
        >
          <ContentBlock content={text} />
        </Box>
      )}
    </Box>
  )
}
