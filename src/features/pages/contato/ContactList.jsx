import { useMemo } from 'react'

import { Box } from '@mui/material'

import { contactLinks, socialLinks } from '@/data'
import { Link } from '@/features/ui'

export default function ContactList() {
  const links = useMemo(() => [...contactLinks, ...socialLinks], [])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          color="text.dark"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
            gap: 1,
            textDecoration: 'none',
          }}
        >
          <link.icon />
          {link.text}
        </Link>
      ))}
    </Box>
  )
}
