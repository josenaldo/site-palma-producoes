import React from 'react'
import { useRouter } from 'next/router'

import NextLink from 'next/link'
import { Link as MuiLink } from '@mui/material'

export default function Link({
  children,
  skipLocaleHandling = false,
  href,
  ...props
}) {
  const router = useRouter()
  const locale = props.locale || router.query.locale || ''

  let newHref = href || router.asPath

  // if href is external link, skip locale handling
  if (href.indexOf('http') === 0) skipLocaleHandling = true

  if (locale && !skipLocaleHandling) {
    if (href) {
      newHref = `/${locale}${href}`
    } else {
      newHref = router.pathname.replace('[locale]', locale)
    }
  }

  return (
    <MuiLink
      component={NextLink}
      href={newHref}
      // as={newHref}
      {...props}
      locale={locale}
      prefetch={false}
    >
      {children}
    </MuiLink>
  )
}
