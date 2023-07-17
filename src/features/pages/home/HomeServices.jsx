import { ButtonLink, Logo } from '@/features/ui'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from '@mui/material'

import Image from 'next/image'
import servicesImage from '@/assets/images/palma-services.svg'
import iconGreen from '@/assets/images/icon-green.svg'
import iconBlue from '@/assets/images/icon-blue.svg'
import iconPurple from '@/assets/images/icon-purple.svg'
import iconOrange from '@/assets/images/icon-orange.svg'

export default function HomeServices({ t, servicos }) {
  return (
    <Box
      component="section"
      sx={{
        py: 5,
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="sectionTitle" component="h2">
            {t('home:services.title')}
          </Typography>
          <ButtonLink
            href="/servicos"
            variant="outlined"
            color="dark"
            sx={{
              height: 'fit-content',
              px: 4,
            }}
          >
            {t('home:services.button')}
          </ButtonLink>
        </Box>

        <Box
          sx={{
            display: 'grid',

            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
            },
            mt: 5,
            gap: 4,
          }}
        >
          <ServiceCard
            service={t('home:services.projectConsulting')}
            image={iconGreen}
          />
          <ServiceCard
            service={t('home:services.contentCreation')}
            image={iconBlue}
          />
          <ServiceCard
            service={t('home:services.visualComunication')}
            image={iconOrange}
          />
          <ServiceCard
            service={t('home:services.culturalProduction')}
            image={iconPurple}
          />
        </Box>
      </Container>
    </Box>
  )
}

function ServiceCard({ service, image }) {
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <CardMedia
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Image src={image} alt={service} height={64} />
      </CardMedia>
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5">{service}</Typography>
      </CardContent>
    </Card>
  )
}
