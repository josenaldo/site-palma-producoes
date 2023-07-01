'use client'

import { useEffect } from 'react'
import i18next from 'i18next'

import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from 'react-i18next'

import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

import { getOptions, languages } from '@/i18n/settings'

const runsOnServerSide = typeof window === 'undefined'

//
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend((language, namespace) =>
      import(`@/i18n/locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    // lng: undefined,
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : [],
  })

export function useTranslation(lng, ns, options) {
  const ret = useTranslationOrg(ns, options)
  const { i18n } = ret

  if (runsOnServerSide && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng)
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (i18n.resolvedLanguage === lng) return
      i18n.changeLanguage(lng)
    }, [lng, i18n])
  }
  return ret
}