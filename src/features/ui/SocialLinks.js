import { socialLinks } from '@/data'
import { Box, IconButton } from '@mui/material'

export default function SocialLinks({ color = 'common.light' }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      {socialLinks.map((socialLink, index) => (
        <IconButton key={index} href={socialLink.href} sx={{ color: color }}>
          <socialLink.icon />
        </IconButton>
      ))}
    </Box>
  )
}
