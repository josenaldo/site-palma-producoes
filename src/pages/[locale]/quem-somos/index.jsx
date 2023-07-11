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
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 2,
            mt: 4,
          }}
        >
          {socias.map((socia) => (
            <SociaCard key={socia.url} socia={socia} />
          ))}
        </Box>
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
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 2,
          }}
        >
          {parcerias.map((parceria) => (
            <ParceriaCard key={parceria.name} parceria={parceria} />
          ))}
        </Container>
      </Box>

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
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 2,
          }}
        >
          {parcerias.map((parceria) => (
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

function SociaCard({ socia }) {
  const [open, setOpen] = useState(false)

  const handleChange = (event) => {
    setOpen((prev) => !prev)
  }

  return (
    <Card
      key={socia.url}
      variant="outlined"
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
        <Typography gutterBottom variant="h5" component="div">
          {socia.name}
        </Typography>
        <Typography variant="caption">{socia.description}</Typography>
        <Collapse in={open}>
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
        </Collapse>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleChange}>
          {open ? 'Mostrar menos' : 'Mostrar mais'}
        </Button>
      </CardActions>
    </Card>
  )
}

function ParceriaCard({ parceria }) {
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CardMedia
        sx={{
          display: 'flex',
          width: '120px',
        }}
      >
        <ImageBox
          src={parceria.image}
          width={120}
          height={120}
          alt={parceria.name}
        />
      </CardMedia>
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <Box>
          <Typography gutterBottom variant="h5" component="div">
            {parceria.name}
          </Typography>
          <Typography variant="caption">{parceria.description}</Typography>
        </Box>
        <Button size="small" href={parceria.link} target="_blank">
          Visitar
        </Button>
      </CardContent>
    </Card>
  )
}
