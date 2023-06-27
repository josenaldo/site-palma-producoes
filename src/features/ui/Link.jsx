'use client'

import NextLink from 'next/link'
import { Link as MuiLink } from '@mui/material'

export default function Link({ children, ...props }) {
  return (
    <MuiLink component={NextLink} {...props}>
      {children}
    </MuiLink>
  )
}
