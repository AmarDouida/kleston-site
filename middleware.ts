import createMiddleware from 'next-intl/middleware'
import { routing } from './src/lib/i18n/routing'
import { NextRequest } from 'next/server'

const handleI18nRouting = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  const response = handleI18nRouting(request)
  const locale = request.nextUrl.pathname.split('/')[1]
  const validLocale = routing.locales.includes(locale as 'fr' | 'en') ? locale : routing.defaultLocale
  response.headers.set('x-locale', validLocale)
  return response
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
