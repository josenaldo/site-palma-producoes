import i18nextConfig from '@/features/i18n/config'
import { useRouter } from 'next/router'

export default function useLanguage() {
  const router = useRouter()
  const { locale } = router.query
  const languages = i18nextConfig.i18n.locales

  if (languages.indexOf(locale) < 0) {
    return i18nextConfig.i18n.defaultLocale
  }

  return locale
}
