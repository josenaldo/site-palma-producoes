import { Box } from '@mui/material'

import { YoutubeVideo } from '@/features/ui'

export default function BlockYoutube({
  url,
  aspectRatio = '21/9',
  fullWidth = false,
  width = '100%',
  ...props
}) {
  return (
    <YoutubeVideo
      url={url}
      aspectRatio={aspectRatio}
      fullWidth={fullWidth}
      {...props}
      sx={{
        my: 4,
      }}
    />
  )
}
