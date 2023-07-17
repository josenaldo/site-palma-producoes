import React from 'react'
import { useRouter } from 'next/router'

import NextLink from 'next/link'
import { Button } from '@mui/material'

export default function ButtonLink({
  children,
  skipLocaleHandling,
  href,
  ...props
}) {
  const router = useRouter()
  const locale = props.locale || router.query.locale || ''

  let newHref = href || router.asPath

  // if href is external link, skip locale handling
  if (href.indexOf('http') === 0) skipLocaleHandling = true

  if (locale && !skipLocaleHandling) {
    newHref = href
      ? `/${locale}${href}`
      : router.pathname.replace('[locale]', locale)
  }

  return (
    <Button component={NextLink} href={newHref} {...props}>
      {children}
    </Button>
  )
}
