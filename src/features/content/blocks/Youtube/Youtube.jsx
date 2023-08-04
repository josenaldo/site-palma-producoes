import { Box } from '@mui/material'

import { YoutubeVideo } from '@/features/ui'

export default function Youtube({ url, props }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <YoutubeVideo
        url={url}
        {...props}
        sx={{
          my: 4,
        }}
      />
    </Box>
  )
}
