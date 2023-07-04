'use client'

import { contactLinks } from '@/data'
import { Box, IconButton, Typography } from '@mui/material'

export default function ContactLinks({ color = 'common.light' }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'center',
      }}
    >
      {contactLinks.map((contactLink, index) => (
        <IconButton
          key={index}
          href={contactLink.href}
          sx={{ color: color, gap: 1 }}
        >
          <contactLink.icon />{' '}
          <Typography variant="body2">{contactLink.text}</Typography>
        </IconButton>
      ))}
    </Box>
  )
}
