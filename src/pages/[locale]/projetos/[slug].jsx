import { useTranslation } from 'next-i18next'

import {
  getStaticPaths as i18nGetStaticPaths,
  makeStaticProps,
} from '@/features/i18n/server'

const getStaticPaths = () => {
  const i18nPaths = i18nGetStaticPaths()

  const projetos = [1, 2, 3, 4, 5]

  const paths = []

  projetos.map((projeto) => {
    const p = i18nPaths.paths.map((path) => {
      return {
        ...path,
        params: {
          ...path.params,
          slug: `${projeto}`,
        },
      }
    })

    paths.push(...p)
  })

  const newPathsObject = {
    ...i18nPaths,
    paths: paths,
  }

  return newPathsObject
}

async function getStaticProps(ctx) {
  const i18nPropsFunc = makeStaticProps(['common', 'projeto'])

  const i18nProps = await i18nPropsFunc(ctx)
  return {
    ...i18nProps,
    props: {
      ...i18nProps.props,
      slug: ctx?.params?.slug,
    },
  }
}

export default function MovimentoPage(params) {
  const { t } = useTranslation(['projeto'])

  return <div>Movimento: {params.slug}</div>
}

export { getStaticPaths, getStaticProps }
