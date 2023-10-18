import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import i18nConfig from '@/features/i18n/config'

// Define o idioma padrão e os idiomas suportados com base na
// configuração de internacionalização
const defaultLocale = i18nConfig.i18n.defaultLocale
const locales = i18nConfig.i18n.locales

// Configura a biblioteca "accept-language" para usar os
//idiomas suportados
acceptLanguage.languages(locales)

export const config = {
  // Define os padrões de URL que devem corresponder a este middleware
  // Evita que o middleware seja executado para recursos específicos,
  // como arquivos estáticos
  matcher: [
    '/((?!api|_next/static|_next/image|images|icons|videos|locales|content|flags|assets|favicon.ico|sw.js|manifest.json).*)',
  ],
}

// Define o nome do cookie que armazenará a preferência de idioma
const cookieName = 'i18next'

export function middleware(req) {
  let language = getCurrentLanguage(req)

  // Verifica se a URL da solicitação não começa com um idioma suportado
  // e não é um recurso do Next.js. Neste caso, adiciona-se o idioma à URL
  // e redireciona-se o usuário para a nova URL
  const startWithSupportedLanguage = locales.some((loc) =>
    req.nextUrl.pathname.startsWith(`/${loc}`)
  )
  const isNextJsResource = req.nextUrl.pathname.startsWith('/_next')
  if (!startWithSupportedLanguage && !isNextJsResource) {
    let newUrl = `/${language}${req.nextUrl.pathname}`

    // Se a URL da solicitação tiver uma parte de consulta, adiciona-a
    if (req.nextUrl.search) newUrl += req.nextUrl.search

    return NextResponse.redirect(new URL(newUrl, req.url))
  }

  // No caso de a URL da solicitação começar com um idioma suportado,
  // verifica- se a solicitação tem  um cabeçalho "referer" e
  //  se o idioma da referência corresponde a um idioma suportado
  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer'))
    const languageInReferer = locales.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    )
    const response = NextResponse.next()

    if (languageInReferer) {
      response.cookies.set(cookieName, languageInReferer)
    }

    return response
  }

  return NextResponse.next()
}

function getCurrentLanguage(req) {
  let language
  // Verifica se o idioma pode ser determinado a partir de um cookie existente
  if (req.cookies.has(cookieName)) {
    language = acceptLanguage.get(req.cookies.get(cookieName).value)
  }

  // Se o idioma não puder ser determinado a partir do cookie, verifica
  // o cabeçalho "Accept-Language"
  if (!language) {
    language = acceptLanguage.get(req.headers.get('Accept-Language'))
  }

  // Se ainda não houver um idioma determinado, usa o idioma padrão
  if (!language) {
    language = defaultLocale
  }

  return language
}
