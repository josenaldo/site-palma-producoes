import { Box } from '@mui/material'

import { MarkdownContent } from '@/features/content'
import { PageTitle } from '@/features/ui'

export default function PageHeader({
  title,
  subtitle,
  text,
  direction = 'row',
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: direction,
        },
        alignItems: 'center',
        gap: 2,
        mb: 2,
      }}
    >
      <PageTitle
        title={title}
        subtitle={subtitle}
        sx={{
          width: {
            xs: '100%',
            md: direction === 'row' ? '30%' : '100%',
          },
        }}
      />
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
