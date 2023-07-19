import { useTranslation } from 'next-i18next'

import { Box, Card, CardContent, Container, Typography } from '@mui/material'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

import {
  pagesContentService,
  portfolioContentService,
} from '@/features/content'

import { ImageBox, Link, PageHeader, Tag } from '@/features/ui'

export async function getStaticProps({ params }) {
  const props = await makeStaticProps(['common', 'portfolio'])({ params })
  const locale = params?.locale || 'pt'
  const url = `/${locale}/portfolio`

  const page = pagesContentService.getPageData(url)
  const portfolioList = portfolioContentService.getAllPortfolio(locale)

  props.props.page = page
  props.props.portfolioList = portfolioList

  return props
}

import { useState } from 'react'
import { AppLayout } from '@/features/layout'

export { getStaticPaths }

export default function ServicosPage({ isoLocale, page, portfolioList }) {
  const { t } = useTranslation(['common', 'portfolio'])
  console.log('page', page)

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

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            gap: 4,
            mt: 4,
            mb: 8,
          }}
        >
          {portfolioList.map((portfolio) => (
            <PortfolioCard key={portfolio.id} portfolio={portfolio} />
          ))}
        </Box>
      </Container>
    </AppLayout>
  )
}

function PortfolioCard({ portfolio }) {
  const [elevation, setElevation] = useState(2)
  const [brightness, setBrightness] = useState(40)

  return (
    <Link href={`/portfolio/${portfolio.slug}`}>
      <Card
        elevation={elevation}
        sx={{
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
        }}
        onMouseOver={(e) => {
          setElevation(20)
          setBrightness(60)
        }}
        onMouseOut={(e) => {
          setElevation(2)
          setBrightness(40)
        }}
        onClick={(e) => {
          const oldElevation = elevation
          const oldBrightness = brightness

          setElevation(10)
          setBrightness(50)

          setTimeout(() => {
            setElevation(oldElevation)
            setBrightness(oldBrightness)
          }, 100)
        }}
      >
        <ImageBox
          src={portfolio.image.url}
          alt={portfolio.image.alt}
          width={1200}
          height={628}
          sx={{
            filter: `brightness(${brightness}%)`,
            zIndex: 0,
          }}
        />
        <CardContent
          sx={{
            position: 'absolute',
            display: 'flex',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="h5" component="h3" color="text.light">
              {portfolio.title}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              {portfolio.tags &&
                portfolio.tags.map((tag) => <Tag key={tag} label={tag} />)}
            </Box>
            <Typography
              variant="caption"
              color="text.light"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                '-webkit-line-clamp': '2',
                '-webkit-box-orient': 'vertical',
              }}
            >
              {portfolio.description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  )
}
