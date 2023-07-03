import { useTranslation } from 'next-i18next'

import {
  getStaticPaths as i18nGetStaticPaths,
  makeStaticProps,
} from '@/features/i18n/server'

const getStaticPaths = () => {
  const i18nPaths = i18nGetStaticPaths()
  console.log('🟢 OLD', JSON.stringify(i18nPaths))

  const movimentos = [1, 2, 3, 4, 5]

  const paths = []

  movimentos.map((movimento) => {
    const p = i18nPaths.paths.map((path) => {
      return {
        ...path,
        params: {
          ...path.params,
          slug: `${movimento}`,
        },
      }
    })

    paths.push(...p)
  })

  const newPathsObject = {
    ...i18nPaths,
    paths: paths,
  }
  console.log('🟢 NEW', JSON.stringify(newPathsObject))

  return newPathsObject
}

async function getStaticProps(ctx) {
  const i18nPropsFunc = makeStaticProps(['common', 'movimento'])

  const i18nProps = await i18nPropsFunc(ctx)
  console.log('🟢 i18nProps', JSON.stringify(i18nProps))
  return {
    ...i18nProps,
    props: {
      ...i18nProps.props,
      slug: ctx?.params?.slug,
    },
  }
}

export default function MovimentoPage(params) {
  console.log('🟢 params', JSON.stringify(params))
  const { t } = useTranslation(['movimento'])

  return <div>Movimento: {params.slug}</div>
}

export { getStaticPaths, getStaticProps }
