import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import { Box, Container } from '@mui/material'

import { AppLayout } from '@/features/layout'
import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'
import { pagesContentService } from '@/features/content'
import { PageHeader } from '@/features/ui'
import { SearchForm, SearchResults } from '@/features/search'
import { useTranslation } from '@/features/i18n'

// TODO: refatorar getStaticProps
export async function getStaticProps({ params }) {
  const propsWrapper = await makeStaticProps(['common', 'pesquisa'])({ params })
  const locale = params?.locale || 'pt'
  const url = `/${locale}/pesquisa`

  const page = pagesContentService.getPageData(url)

  propsWrapper.props.page = page
  propsWrapper.props.locale = locale

  return propsWrapper
}

export { getStaticPaths }

export default function SearchPage({ isoLocale, locale, page }) {
  const { t } = useTranslation(['common', 'pesquisa'])

  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const router = useRouter()

  const search = React.useCallback(
    async (query) => {
      router.push(`/pesquisa?q=${query}`, undefined, { shallow: true })

      const { data: res } = await axios.get(
        `/api/search?q=${query}&locale=${locale}`
      )

      setResults(res)
      setLoading(false)
    },
    [locale, router]
  )

  const handleSearch = (e) => {
    e.preventDefault()
    setLoading(true)
    search(query)
  }

  React.useEffect(() => {
    if (!router.isReady) return

    const { q } = router.query

    if (!q) return
    setLoading(true)

    const firstSearch = async (q) => {
      const { data: res } = await axios.get(
        `/api/search?q=${q}&locale=${locale}`
      )
      setResults(res)

      setLoading(false)
    }

    setQuery(q)
    firstSearch(q)
  }, [router.isReady, router.query, setQuery, locale])

  return (
    <AppLayout
      title={page.title}
      description={page.description}
      image={page.image}
    >
      <Container>
        <PageHeader
          title={page.title}
          text={page.body.raw}
          direction="column"
        />
        <SearchForm
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
          loading={loading}
        />

        <SearchResults results={results} />
      </Container>
    </AppLayout>
  )
}
