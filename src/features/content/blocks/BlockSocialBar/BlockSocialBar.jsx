import { Box, IconButton } from '@mui/material'

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'

import { socialLinks } from '@/data'

const links = {
  instagram: socialLinks.filter((link) => link.title === 'Instagram')[0]?.href,
  facebook: socialLinks.filter((link) => link.title === 'Facebook')[0]?.href,
  youtube: socialLinks.filter((link) => link.title === 'YouTube')[0]?.href,
  twitter: socialLinks.filter((link) => link.title === 'Twitter')[0]?.href,
}

export default function BlockSocialBar({
  instagram = links.instagram,
  facebook = links.facebook,
  youtube = links.youtube,
  twitter = links.twitter,
}) {
  console.log('BlockSocialBar', {
    instagram,
    facebook,
    youtube,
    twitter,
  })

  console.log('socialLinks', socialLinks)

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
