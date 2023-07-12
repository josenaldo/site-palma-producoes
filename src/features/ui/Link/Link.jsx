import React from 'react'
import { useRouter } from 'next/router'

import NextLink from 'next/link'
import { Link as MuiLink } from '@mui/material'

export default function Link({ children, skipLocaleHandling, ...props }) {
  const router = useRouter()
  const locale = props.locale || router.query.locale || ''

  let href = props.href || router.asPath
  if (href.indexOf('http') === 0) skipLocaleHandling = true
  if (locale && !skipLocaleHandling) {
    href = href
      ? `/${locale}${href}`
      : router.pathname.replace('[locale]', locale)
  }

  return (
    <MuiLink component={NextLink} href={href} {...props}>
      {children}
    </MuiLink>
  )
}
