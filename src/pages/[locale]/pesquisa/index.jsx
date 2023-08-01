import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import { Container } from '@mui/material'

import { useTranslation } from '@/features/i18n'
import { getStaticPaths } from '@/features/i18n/server'
import { AppLayout } from '@/features/layout'
import { PageHeader } from '@/features/pages'
import { buildStaticProps } from '@/features/pages/server'
import { SearchForm, SearchResults } from '@/features/search'

export async function getStaticProps({ params }) {
  const propsWrapper = await buildStaticProps(params, 'pesquisa')

  return propsWrapper
}

export { getStaticPaths }

// TODO: adicionar i18n
export default function SearchPage({ page }) {
  const { locale } = useTranslation(['common', 'pesquisa'])

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
