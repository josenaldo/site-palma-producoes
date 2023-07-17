import { useTranslation } from 'next-i18next'

import {
  Avatar,
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
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import StarIcon from '@mui/icons-material/Star'

import Carousel from 'react-material-ui-carousel'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'

import {
  pagesContentService,
  servicoContentService,
  depoimentoContentService,
} from '@/features/content'

import { ButtonLink, ImageBox, PageHeader, Title } from '@/features/ui'
import Image from 'next/image'

export async function getStaticProps({ params }) {
  const props = await makeStaticProps(['common', 'servicos'])({ params })
  const locale = params?.locale || 'pt'
  const url = `/${locale}/servicos`

  const page = pagesContentService.getPageData(url)
  const servicos = servicoContentService.getAllServicos(locale)
  const depoimentos = depoimentoContentService.getAllDepoimentos(locale)

  props.props.page = page
  props.props.servicos = servicos
  props.props.depoimentos = depoimentos

  return props
}

import { palette } from '@/features/styles'
import { AppLayout } from '@/features/layout'

export { getStaticPaths }

const colors = [
  palette.primary.main,
  palette.secondary.main,
  palette.tertiary.main,
  palette.quaternary.main,
]

export default function ServicosPage({ page, servicos, depoimentos }) {
  const { t } = useTranslation(['common', 'servicos'])

  return (
    <AppLayout t={t}>
      <Container>
        <PageHeader title={page.title} text={page.body.raw} />

        <ImageBox
          src={page.image.url}
          alt={page.image.alt}
          width={page.image.width}
          height={page.image.height}
        />

        <Servicos servicos={servicos} />

        <BannerPortfolio t={t} />

        <Depoimentos t={t} depoimentos={depoimentos} />
      </Container>
    </AppLayout>
  )
}

function Servicos({ servicos }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: 10,
        gap: 4,
      }}
    >
      {servicos.map((servico, index) => (
        <Card
          key={servico.url}
          elevation={0}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            borderBottom: '1px solid #ccc',
          }}
        >
          <CardMedia
            sx={{
              display: 'flex',
              padding: 2,
            }}
          >
            <Image
              src={servico.icon}
              alt={servico.title}
              width={100}
              height={100}
            />
          </CardMedia>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              color={colors[index]}
              sx={{
                textAlign: {
                  xs: 'center',
                  sm: 'left',
                },
              }}
            >
              {servico.title}
            </Typography>
            <Typography variant="body2">{servico.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}

function BannerPortfolio({ t }) {
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ImageBox
        src="/images/content/pages/servicos-portfolio.jpg"
        alt="Portfolio"
        width={1200}
        height={628}
        sx={{
          filter: 'brightness(40%)',
          zIndex: -1,
          transition: 'background-image 0.2s ease-in-out',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" component="h2" color="light.main">
          {t('servicos:bannerPortfolio.title')}
        </Typography>
        <ButtonLink
          href="/portfolio"
          variant="outlined"
          color="light"
          size="large"
        >
          {t('servicos:bannerPortfolio.button')}
        </ButtonLink>
      </Box>
    </Box>
  )
}

function Depoimentos({ t, depoimentos }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: 10,
        width: '100%',
        gap: 4,
      }}
    >
      <Title variant="h3" component="h3">
        {t('servicos:testimonials')}
      </Title>
      <Carousel
        interval={8000}
        NextIcon={<ChevronRightIcon />}
        PreviouIcon={<ChevronLeftIcon />}
        navButtonsAlwaysVisible={true}
        IndicatorIcon={<StarIcon />}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {depoimentos.map((depoimento) => (
          <DepoimentoCard key={depoimento.url} depoimento={depoimento} />
        ))}
      </Carousel>
    </Box>
  )
}

function DepoimentoCard({ depoimento }) {
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
      <Card sx={{ width: '80%' }} elevation={0}>
        <CardMedia
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ width: 180, height: 180 }}>
            <Image
              src={depoimento.image.url}
              alt={depoimento.image.alt}
              width={depoimento.image.width}
              height={depoimento.image.height}
            />
          </Avatar>
        </CardMedia>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="h5"
            component="q"
            color="text.secondary"
            sx={{
              textAlign: 'center',
              fontStyle: 'italic',
            }}
          >
            {depoimento.testimonial}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {depoimento.name} - {depoimento.position}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
