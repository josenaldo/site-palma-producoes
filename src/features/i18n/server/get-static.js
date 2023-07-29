import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import i18nextConfig from '../../../../next-i18next.config'

export const getI18nPaths = () =>
  i18nextConfig.i18n.locales.map((lng) => ({
    params: {
      locale: lng,
    },
  }))

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
})

export async function getI18nProps(ctx, ns = ['common']) {
  const locale = ctx?.params?.locale || 'pt'

  let props = {
    ...(await serverSideTranslations(locale, ns)),
  }

  return props
}

export function makeStaticProps(ns = ['common']) {
  return async function getStaticProps(ctx) {
    const locale = ctx?.params?.locale || 'pt'
    const isoLocale = getIsoLocale(locale)
    const props = await getI18nProps(ctx, ns)

    props.isoLocale = isoLocale

    return {
      props,
    }
  }
}

const isoLocales = {
  pt: 'pt-BR',
  en: 'en-US',
}

export function getIsoLocale(locale) {
  return isoLocales[locale] || 'pt-BR'
}
