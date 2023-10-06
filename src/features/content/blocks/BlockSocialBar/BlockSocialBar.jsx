import { Box, IconButton } from '@mui/material'

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'

export default function BlockSocialBar({
  instagram,
  facebook,
  youtube,
  twitter,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 1,
        my: 2,
      }}
    >
      {instagram && (
        <IconButton
          href={instagram}
          target="_blank"
          rel="noreferer noopener"
          color="dark"
        >
          <InstagramIcon />
        </IconButton>
      )}
      {facebook && (
        <IconButton
          href={facebook}
          target="_blank"
          rel="noreferer noopener"
          color="dark"
        >
          <FacebookIcon />
        </IconButton>
      )}
      {youtube && (
        <IconButton
          href={youtube}
          target="_blank"
          rel="noreferer noopener"
          color="dark"
        >
          <YouTubeIcon />
        </IconButton>
      )}
      {twitter && (
        <IconButton
          href={twitter}
          target="_blank"
          rel="noreferer noopener"
          color="dark"
        >
          <TwitterIcon />
        </IconButton>
      )}
    </Box>
  )
}
