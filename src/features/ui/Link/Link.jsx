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
    if (locale !== 'pt' && locale !== 'en') {
      console.log('🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 ERROR locale!!!!', locale)
    }

    if (href) {
      newHref = `/${locale}${href}`
    } else {
      newHref = router.pathname.replace('[locale]', locale)
      console.log('🔴 Updating newHref from router.pathname', newHref)
    }

    // newHref = href
    //   ? `/${locale}${href}`
    //   : router.pathname.replace('[locale]', locale)
  }

  return (
    <MuiLink component={NextLink} href={newHref} {...props} locale={false}>
      {children}
    </MuiLink>
  )
}
