import React, { useEffect, useState } from 'react'

import { Container } from '@mui/material'

import { useRouter } from 'next/router'
import axios from 'axios'

import { ContentPageHeader } from '@/features/content'
import { useTranslation } from '@/features/i18n'
import { getStaticPaths } from '@/features/i18n/server'
import { AppLayout } from '@/features/layout'
import { buildStaticProps } from '@/features/pages/server'
import { SearchForm, SearchResults } from '@/features/search'
import { Pagination } from '@/features/ui'

export async function getStaticProps({ params }) {
  const propsWrapper = await buildStaticProps(params, 'pesquisa')

  const itemsPerPage = process.env.NEXT_PUBLIC_DEFAULT_PAGE_SIZE || 10

  propsWrapper.props.itemsPerPage = itemsPerPage
  return propsWrapper
}

export { getStaticPaths }

function buildQuery({ locale, query, pageIndex, itemsPerPage }) {
  return `/api/search?locale=${locale}&q=${query}&pageIndex=${pageIndex}&itemsPerPage=${itemsPerPage}`
}

export default function SearchPage({ page, itemsPerPage }) {
  const { t, locale } = useTranslation(['common'])

  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState([])
  const [pageIndex, setPageIndex] = useState(1)

  const router = useRouter()

  const handleChangePage = (event, value) => {
    setLoading(true)
    setPageIndex(value)
    setLoading(false)
  }

  const handleChangeQuery = (e) => {
    e.preventDefault()
    setLoading(true)
    router.push(
      {
        pathname: `/${locale}/pesquisa`,
        query: {
          q: query,
        },
      },
      undefined,
      { shallow: true }
    )
  }

  useEffect(() => {
    if (!router.isReady) return
    const { q } = router.query

    if (!q) return

    setLoading(true)

    const search = async (query, pageIndex, itemsPerPage) => {
      const apiUrl = buildQuery({ locale, query, pageIndex, itemsPerPage })
      const { data: res } = await axios.get(apiUrl)

      setResult(res)
      setLoading(false)
    }

    setQuery(q)

    search(q, pageIndex, itemsPerPage)
  }, [router, locale, pageIndex, itemsPerPage])

  return (
    <AppLayout
      title={page.title}
      description={page.description}
      image={page.image}
      crumbs={[
        { text: t('common:breadcrumbs.home'), href: '/' },
        {
          text: t('common:breadcrumbs.search'),
          href: '/pesquisa',
          last: true,
        },
      ]}
    >
      <Container>
        <ContentPageHeader
          title={page.title}
          text={page.body}
          direction="column"
        />

        <SearchForm
          query={query}
          setQuery={setQuery}
          handleSearch={handleChangeQuery}
          loading={loading}
        />

        <SearchResults results={result.data} />

        <Pagination
          onChange={handleChangePage}
          page={pageIndex}
          count={result?.meta?.pageCount || 0}
          loading={loading}
          showEllipses={false}
          siblingCount={1}
          boundaryCount={1}
        />
      </Container>
    </AppLayout>
  )
}
