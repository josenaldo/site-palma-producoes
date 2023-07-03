import { socialLinks } from '@/data'
import { Box, IconButton } from '@mui/material'
import React from 'react'

export default function SocialLinks({ color = 'common.light' }) {
  const [hasMounted, setHasMounted] = React.useState(false)

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

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
