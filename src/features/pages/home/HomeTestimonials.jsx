import { Box, Card, CardContent, Container, Typography } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import StarIcon from '@mui/icons-material/Star'

import Carousel from 'react-material-ui-carousel'

export default function HomeTestimonials({ depoimentos }) {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: 10,
        width: '100%',
        gap: 4,
      }}
    >
      <Carousel
        interval={8000}
        PrevIcon={<ChevronLeftIcon sx={{ fontSize: '2.5rem' }} />}
        NextIcon={<ChevronRightIcon sx={{ fontSize: '2.5rem' }} />}
        navButtonsAlwaysVisible={true}
        IndicatorIcon={<StarIcon />}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        navButtonsProps={{
          style: {
            backgroundColor: 'rgb(0 0 0 / 5%)',
            color: 'black',
          },
        }}
      >
        {depoimentos.map((depoimento) => (
          <TestimonialCard key={depoimento.url} testimonial={depoimento} />
        ))}
      </Carousel>
    </Container>
  )
}

function TestimonialCard({ testimonial }) {
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
            variant="body1"
            component="q"
            color="text.secondary"
            sx={{
              textAlign: 'center',
              fontStyle: 'italic',
            }}
          >
            {testimonial.testimonial}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {testimonial.name} - {testimonial.position}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
