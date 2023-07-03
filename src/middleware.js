import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import i18nConfig from '@/features/i18n/config'

const defaultLocale = i18nConfig.i18n.defaultLocale
const locales = i18nConfig.i18n.locales

acceptLanguage.languages(locales)

export const config = {
  // matcher: '/:lng*'
  matcher: [
    '/((?!api|_next/static|_next/image|images|flags|assets|favicon.ico|sw.js).*)',
  ],
}

const cookieName = 'i18next'

export function middleware(req) {
  let lng
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName).value)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = defaultLocale

  // Redirect if lng in path is not supported
  if (
    !locales.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    )
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
