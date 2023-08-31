import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import i18nConfig from '@/features/i18n/config'

const defaultLocale = i18nConfig.i18n.defaultLocale
const locales = i18nConfig.i18n.locales

acceptLanguage.languages(locales)

export const config = {
  // matcher: '/:lng*'
  matcher: [
    '/((?!api|_next/static|_next/image|images|icons|videos|locales|content|flags|assets|favicon.ico|sw.js|manifest.json).*)',
  ],
}

const cookieName = 'i18next'

export function middleware(req) {
  let lng
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName).value)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = defaultLocale

  if (
    !locales.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    let newUrl = `/${lng}${req.nextUrl.pathname}`

    if (req.nextUrl.search) newUrl += req.nextUrl.search

    return NextResponse.redirect(new URL(newUrl, req.url))
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer'))
    const lngInReferer = locales.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    )
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}
