import { useState } from 'react'
import { useTranslation } from 'next-i18next'

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Container,
  Typography,
} from '@mui/material'

import {
  getStaticPaths as i18nGetStaticPaths,
  makeStaticProps,
} from '@/features/i18n/server'

import {
  MarkdownContent,
  pagesContentService,
  sociaContentService,
  parceriaContentService,
} from '@/features/content'

import { ImageBox, PageHeader } from '@/features/ui'

export async function getStaticProps({ params }) {
  const props = await makeStaticProps(['common', 'quem-somos'])({ params })
  const locale = params?.locale || 'pt'
  const url = `/${locale}/quem-somos`

  const page = pagesContentService.getPageData(url)
  const socias = sociaContentService.getAllSocias(locale)
  const parcerias = parceriaContentService.getAllParcerias(locale)

  props.props.page = page
  props.props.socias = socias
  props.props.parcerias = parcerias

  return props
}

export function getStaticPaths() {
  const paths = i18nGetStaticPaths()

  return paths
}

export default function QuemSomosPage({ page, socias, parcerias }) {
  const { t } = useTranslation(['common', 'quem-somos'])

  return (
    <Box>
      <Container>
        <PageHeader
          title={page.title}
          subtitle={page.subtitle}
          text={page.body.raw}
        />

        <ImageBox
          src="/images/content/pages/quem-somos.jpg"
          alt="Socias"
          width={1200}
          height={628}
        />

        <Socias socias={socias} t={t} />
      </Container>

      <Parcerias parcerias={parcerias} t={t} />
    </Box>
  )
}

function Socias({ t, socias }) {
  const [selectedSocia, setSelectedSocia] = useState(null)

  return (
    <Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(3, 1fr)',
          },
          gap: 2,
          mt: 4,
        }}
      >
        {socias.map((socia) => (
          <SociaCard
            t={t}
            key={socia.url}
            socia={socia}
            onClick={() => {
              if (selectedSocia === socia) {
                setSelectedSocia(null)
                return
              }
              setSelectedSocia(socia)
            }}
            open={selectedSocia === socia}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          my: 5,
        }}
      >
        {socias.map((socia, index) => (
          <Collapse
            key={socia.url}
            in={selectedSocia === socia}
            timeout={400}
            addEndListener={(element) => {
              const isNotLast = index !== socias.length - 1
              if (selectedSocia === socia && isNotLast) {
                element.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                })
              }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  md: 'row',
                },
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: '100%',
                    md: '30%',
                  },
                  pr: {
                    xs: 0,
                    md: 8,
                  },
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    display: 'inline-block',
                    width: '100%',
                    borderBottom: '5px solid',
                    borderColor: 'primary.main',
                    textAlign: {
                      xs: 'center',
                      md: 'right',
                    },
                  }}
                >
                  {socia.name}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  width: {
                    xs: '100%',
                    md: '70%',
                  },
                  py: 2,
                }}
              >
                <MarkdownContent
                  content={socia.body.raw}
                  components={{
                    p: ({ children }) => (
                      <Typography variant="body2" mb={2}>
                        {children}
                      </Typography>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Collapse>
        ))}
      </Box>
    </Box>
  )
}

function SociaCard({ t, socia, onClick, open }) {
  return (
    <Card
      elevation={open ? 5 : 1}
      key={socia.url}
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ImageBox src={socia.image} width={200} height={200} alt={socia.name} />
      </CardMedia>
      <CardContent
        sx={{
          flexGrow: 1,
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
        >
          {socia.name}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            textAlign: 'center',
            // wordWrap: 'normal',
            display: 'inline-block',
            // width: '100%',
          }}
        >
          {socia.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onClick}>
          {open ? t('common:button.showLess') : t('common:button.showMore')}
        </Button>
      </CardActions>
    </Card>
  )
}

function Parcerias({ t, parcerias }) {
  return (
    <Box
      sx={{
        gap: 2,
        mt: 4,
        backgroundColor: 'surfice.main',
        py: 5,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            borderBottom: '5px solid',
            borderColor: 'text.secondary',
            color: 'text.secondary',
          }}
        >
          {t('quem-somos:partners.title')}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.primary' }}>
          {t('quem-somos:partners.description')}
        </Typography>
      </Container>
      <Container
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
          gap: 2,
        }}
      >
        {parcerias.map((parceria) => (
          <ParceriaButton key={parceria.name} parceria={parceria} />
        ))}
      </Container>
    </Box>
  )
}

function ParceriaButton({ parceria }) {
  return (
    <Button
      key={parceria.name}
      color="dark"
      href={parceria.link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: 'text.secondary',
      }}
    >
      <Typography
        sx={{
          fontSize: '1.2rem',
          fontWeight: 'bold',
        }}
      >
        {parceria.name}
      </Typography>
      <Typography variant="caption">{parceria.description}</Typography>
    </Button>
  )
}
