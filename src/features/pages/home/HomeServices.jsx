import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material'

import Image from 'next/image'

import { useTranslation } from '@/features/i18n'
import { ButtonLink, Title } from '@/features/ui'

export default function HomeServices({ servicos }) {
  const { t } = useTranslation(['common', 'home'])

  return (
    <Box
      component="section"
      sx={{
        py: 5,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <Title variant="h3">{t('home:services.title')}</Title>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: -1,
          }}
        >
          <Box
            sx={{
              display: {
                xs: 'block',
                sm: 'block',
              },
              height: {
                xs: '500px',
                sm: '220px',
              },
              width: {
                xs: '280px',
                sm: '220px',
              },
              borderRadius: {
                // xs: '50% 20% / 10% 40%',
                xs: '50% 50% / 25% 25%',
                sm: '50%',
              },
              border: (theme) => `3px solid ${theme.palette.surfice.lighter}`,
              position: 'absolute',
            }}
          ></Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
              },
              gap: {
                xs: 4,
                sm: 8,
                md: 10,
              },
            }}
          >
            {servicos.map((servico, index) => (
              <ServiceCard
                key={servico.url}
                service={servico.title}
                image={servico.icon}
                direction={index % 2 !== 0 ? 'left' : 'right'}
              />
            ))}
          </Box>
        </Box>

        <ButtonLink
          href="/servicos"
          variant="outlined"
          color="dark"
          size="large"
          sx={{
            height: 'fit-content',
            px: 4,
          }}
        >
          {t('home:services.button')}
        </ButtonLink>
      </Container>
    </Box>
  )
}

function ServiceCard({ service, image, direction = 'left' }) {
  return (
    <Card
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: direction === 'left' ? 'row' : 'row-reverse',
        alignItems: 'center',
        justifyContent: 'revert',
      }}
    >
      <CardMedia
        sx={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'rgb(255, 255, 255, 0.9)',
          borderRadius: '50%',
          zIndex: 1,
        }}
      >
        <Image src={image} alt={service} height={80} width={80} />
      </CardMedia>
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: direction === 'left' ? 'left' : 'right',
          zIndex: 1,
        }}
      >
        <Typography
          fontWeight="600"
          fontSize="1.1rem"
          sx={{
            paddingRight: direction === 'left' ? 6 : 0,
            paddingLeft: direction === 'left' ? 0 : 6,
          }}
        >
          {service}
        </Typography>
      </CardContent>
    </Card>
  )
}
