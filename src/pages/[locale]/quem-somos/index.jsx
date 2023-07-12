import { useTranslation } from 'next-i18next'

import {
  getStaticPaths as i18nGetStaticPaths,
  makeStaticProps,
} from '@/features/i18n/server'
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
  Fade,
} from '@mui/material'
import {
  MarkdownContent,
  pagesContentService,
  sociaContentService,
  parceriaContentService,
} from '@/features/content'
import { PageTitle, ImageBox } from '@/features/ui'
import Image from 'next/image'
import { useState } from 'react'

// const getStaticProps = makeStaticProps(['common', 'quem-somos'])

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
        <Topo t={t} page={page} />

        <ImageBox
          src="/images/content/pages/quem-somos.jpg"
          alt="Socias"
          width={1200}
          height={628}
        />

        <Socias socias={socias} />
      </Container>

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
            justifyContent: 'center',
          }}
        >
          <Typography>Parceiros</Typography>
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
    </Box>
  )
}

function Topo({ t, page }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        alignItems: 'center',
        gap: 2,
      }}
    >
      <PageTitle
        title={t('quem-somos:title')}
        subtitle={t('quem-somos:subtitle')}
        sx={{
          width: {
            xs: '100%',
            md: '30%',
          },
        }}
      />
      <Box
        sx={{
          width: {
            xs: '100%',
            md: '70%',
          },
        }}
      >
        <MarkdownContent content={page.body.raw} />
      </Box>
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

function SociaCard({ socia, onClick, open }) {
  const handleChange = (event) => {
    setOpen((prev) => !prev)
  }

  return (
    <Card
      elevation={open ? 5 : 1}
      key={socia.url}
      // variant="outlined"
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
          {open ? 'Mostrar menos' : 'Mostrar mais'}
        </Button>
      </CardActions>
    </Card>
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
