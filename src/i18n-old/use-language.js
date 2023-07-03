'use client'

import { fallbackLng, languages } from '@/i18n-old/settings'
import { useParams } from 'next/navigation'

export default function useLanguage() {
  const { lng } = useParams()

  if (languages.indexOf(lng) < 0) {
    return fallbackLng
  }

  return lng
}
