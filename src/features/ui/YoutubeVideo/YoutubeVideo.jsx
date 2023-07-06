import { Box } from '@mui/material'

export default function YoutubeVideo({ url }) {
  const videoId = url.split('v=')[1]

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <Box
        id={`YOUTUBE-${videoId}`}
        sx={{
          position: 'relative',
          pb: '56.25%',
          height: '0',
          display: 'flex',
        }}
      >
        <Box
          component="iframe"
          className={'media ratio ratio-16x9'}
          title="YouTube video player"
          frameBorder="0"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          sx={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
        ></Box>
      </Box>
    </Box>
  )
}
