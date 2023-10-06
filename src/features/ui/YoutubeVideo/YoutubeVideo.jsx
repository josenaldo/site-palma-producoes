import { Box } from '@mui/material'
import YouTube from 'react-youtube'

export default function YoutubeVideo({
  url,
  aspectRatio = '16/9',
  width = '100%',
  fullWidth = false,
  sx = {},
}) {
  const videoId = url.split('v=')[1]

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      accelerometer: 1,
      clipboardWrite: 1,
      encryptedMedia: 1,
      gyroscope: 1,
      pictureInPicture: 1,
      webShare: 1,
      origin: process.env.NEXT_PUBLIC_SITE_URL,
      enablejsapi: 1,
    },
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        aspectRatio: aspectRatio,
        width: fullWidth ? '100vw' : width,
        maxWidth: fullWidth ? '100vw' : width,
        marginLeft: fullWidth ? '-50vw' : '0',
        left: fullWidth ? '50%' : '0',
        ...sx,
      }}
    >
      <YouTube
        videoId={videoId}
        opts={opts}
        style={{
          aspectRatio: aspectRatio,
          width: width,
        }}
      />
    </Box>
  )
}
