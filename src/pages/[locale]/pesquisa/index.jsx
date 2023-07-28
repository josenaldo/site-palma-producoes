import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import {
  Box,
  Chip,
  Card,
  CardContent,
  CardActionArea,
  Container,
  TextField,
  InputAdornment,
  IconButton,
  LinearProgress,
  Typography,
  CardMedia,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { AppLayout } from '@/features/layout'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

import { pagesContentService } from '@/features/content'

import { Title, ShareLink, Link, ImageBox, PageHeader } from '@/features/ui'
import { useTranslation } from 'react-i18next'

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

function SearchPage({ isoLocale, locale, page }) {
  const { t } = useTranslation(['common', 'pesquisa'])

  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const router = useRouter()

  const { q } = router.query
  const search = React.useCallback(async (query) => {
    router.push('/pesquisa?q=' + query, undefined, { shallow: true })

    const { data: res } = await axios.get(
      `/api/search?q=${query}&locale=${locale}`
    )
    setResults(res)

    setLoading(false)
  }, [])

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
  }, [router.isReady, router.query, setQuery])

  if (!router.isReady) return null

  return (
    <AppLayout
      title={page.title}
      description={page.description}
      image={page.image}
      isoLocale={isoLocale}
      t={t}
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

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {results &&
            results.map((result) => (
              <ContentResult key={result.url} result={result} t={t} />
            ))}
        </Box>
      </Container>
    </AppLayout>
  )
}

function SearchForm({ handleSearch, query, setQuery, loading }) {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSearch}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TextField
          placeholder="Pesquisa"
          id="input-search-page"
          value={query}
          color="secondary"
          onChange={(e) => setQuery(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  color="secondary"
                  disabled={!query}
                  onClick={handleSearch}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            width: { xs: '100%', md: '50%' },
          }}
        />
      </Box>
      <Box
        sx={{
          height: '4px',
          width: '40%',
          py: 1,
        }}
      >
        {loading && <LinearProgress />}
      </Box>
    </Box>
  )
}

function ContentResult({ result, t }) {
  console.log(result)
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Link href={result.url}>
        <CardActionArea
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr 2fr',
              sm: '1fr 4fr',
              md: '1fr 6fr',
              lg: '1fr 8fr',
              xl: '1fr 8fr',
            },
            alignItems: 'flex-start',
          }}
        >
          <CardMedia>
            <ImageBox
              src={result.image.url}
              alt={result.image.alt}
              width={result.image.width}
              height={result.image.height}
            />
          </CardMedia>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: 2,
              pt: 2,
              pl: 2,
              pb: 2,
              pr: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1,
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" component="h2" color="primary">
                {result.title}
              </Typography>
              <Chip label={result.type} color="secondary" size="small" />
            </Box>
            <Typography variant="caption" component="p">
              {result.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <Box sx={{ pt: 2, pr: 2, pl: 0 }}>
        <ShareLink
          t={t}
          title={result.title}
          description={result.description}
          url={`${process.env.NEXT_PUBLIC_SITE_URL}${result.url}`}
          image={`${process.env.NEXT_PUBLIC_SITE_URL}${result.image}`}
        />
      </Box>
    </Card>
  )
}

export default SearchPage
