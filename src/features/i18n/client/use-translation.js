import { useTranslation as next18nUseTranslation } from 'next-i18next'
import i18nextConfig from '@/features/i18n/config'
import { useRouter } from 'next/router'

const isoLocales = {
  pt: 'pt-BR',
  en: 'en-US',
}

export default function useTranslation(ns = ['common']) {
  const { t, i18n } = next18nUseTranslation(ns)
  const router = useRouter()

  const { locale } = router.query
  const languages = i18nextConfig.i18n.locales

  let currentLocale = locale

  if (languages.indexOf(locale) < 0) {
    currentLocale = i18nextConfig.i18n.defaultLocale
  }

  return {
    t,
    i18n,
    locale: currentLocale,
    isoLocale: isoLocales[currentLocale] || 'pt-BR',
  }
}
