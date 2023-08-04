import { Box } from '@mui/material'

export default function YoutubeVideo({
  url,
  aspectRatio = '16/9',
  width = '100%',
  sx = {},
}) {
  const videoId = url.split('v=')[1]
  const aspectRatioValue = aspectRatio.replace('/', 'x')

  return (
    <Box
      component="iframe"
      className={`media ratio ratio-${aspectRatioValue}`}
      sx={{
        aspectRatio: aspectRatio,
        width: width,
        ...sx,
      }}
      title="YouTube video player"
      frameBorder="0"
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></Box>
  )
}
