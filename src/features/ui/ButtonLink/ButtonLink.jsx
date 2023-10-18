import React from 'react'
import { useRouter } from 'next/router'

import NextLink from 'next/link'
import { Button, useTheme } from '@mui/material'

export default function ButtonLink({
  children,
  skipLocaleHandling,
  href,
  color = 'primary',
  hoverColor = null,
  sx,
  ...props
}) {
  const router = useRouter()
  const theme = useTheme()
  const locale = props.locale || router.query.locale || ''

  let newHref = href || router.asPath

  const hoverProps = getHoverProps(hoverColor, theme)

  // if href is external link, skip locale handling
  if (href.indexOf('http') === 0) skipLocaleHandling = true

  if (locale && !skipLocaleHandling) {
    console.log('🔴 Button Link locale', locale)
    if (locale !== 'pt' && locale !== 'en') {
      console.log('🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 ERROR locale!!!!', locale)
    }
    newHref = href
      ? `/${locale}${href}`
      : router.pathname.replace('[locale]', locale)
    console.log('🔴 Link newHref', newHref)

  }

  return (
    <Button
      component={NextLink}
      href={newHref}
      color={color}
      sx={{ ...sx, ...hoverProps }}
      {...props}
    >
      {children}
    </Button>
  )
}

function getHoverProps(hoverColor, theme) {
  if (hoverColor === null) return {}

  const mainColor = theme.palette[hoverColor].main
  const darkColor = theme.palette[hoverColor].dark
  const opacity = theme.palette.action.hoverOpacity

  const { r, g, b } = hexToRgbValue(mainColor)

  return {
    '&:hover': {
      color: darkColor,
      borderColor: darkColor,
      backgroundColor: `rgba(${r} ${g} ${b} / ${opacity})`,
    },
  }
}

function hexToRgbValue(hex) {
  hex = hex.replace(/^#/, '')

  const [r, g, b] = hex
    .match(/.{1,2}/g)
    .map((component) => parseInt(component, 16))

  return { r, g, b }
}
