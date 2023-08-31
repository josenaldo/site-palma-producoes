import { Box } from '@mui/material'

import { ContentBlock } from '@/features/content'
import { Title } from '@/features/ui'

export default function ContentPageHeader({
  title,
  titleTextWrap = 'nowrap',
  text,
  direction = 'row',
  borderBottomColor = 'primary.main',
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
        justifyContent: 'center',
        gap: 4,
        mb: 6,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: {
            xs: '100%',
            md: direction === 'row' ? '30%' : '100%',
          },
        }}
      >
        <Title borderBottomColor={borderBottomColor} textWrap={titleTextWrap}>
          {title}
        </Title>
      </Box>

      {text && (
        <Box
          sx={{
            width: {
              xs: '100%',
              md: direction === 'row' ? '70%' : '100%',
            },
            textAlign: 'justify',
          }}
        >
          <ContentBlock body={text} />
        </Box>
      )}
    </Box>
  )
}
