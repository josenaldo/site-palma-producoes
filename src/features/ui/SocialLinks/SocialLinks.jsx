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
        <IconButton
          key={socialLink.href}
          href={socialLink.href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: color,
            '&:hover': {
              color: socialLink.color || 'primary.main',
            },
            '&:active': {
              color: socialLink.color || 'primary.dark',
            },
          }}
        >
          <socialLink.icon />
        </IconButton>
      ))}
    </Box>
  )
}
