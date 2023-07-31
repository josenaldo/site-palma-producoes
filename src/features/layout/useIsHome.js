import { useRouter } from 'next/router'

import i18nConfig from '@/features/i18n/config'

export default function useIsHome() {
  const router = useRouter()

  const { locales } = i18nConfig.i18n
  const path = router?.asPath || ''
  const homePaths = locales.map((locale) => `/${locale}/`)
  return homePaths.includes(path)
}
