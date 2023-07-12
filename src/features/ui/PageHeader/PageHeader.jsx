import { Box } from '@mui/material'

import { MarkdownContent } from '@/features/content'
import { PageTitle } from '@/features/ui'

export default function PageHeader({ title, subtitle, text }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        alignItems: 'center',
        gap: 2,
      }}
    >
      <PageTitle
        title={title}
        subtitle={subtitle}
        sx={{
          width: {
            xs: '100%',
            md: '30%',
          },
        }}
      />
      <Box
        sx={{
          width: {
            xs: '100%',
            md: '70%',
          },
        }}
      >
        <MarkdownContent content={text} />
      </Box>
    </Box>
  )
}
