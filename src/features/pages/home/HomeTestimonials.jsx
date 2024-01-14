import PropTypes from 'prop-types'
import { Box, Card, CardContent, Container, Typography } from '@mui/material'

import { Carousel, HomeTitleWithButton } from '@/features/ui'
import { useTranslation } from '@/features/i18n'

HomeTestimonials.propTypes = {
  depoimentos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      testimonial: PropTypes.string.isRequired,
      position: PropTypes.string,
    })
  ).isRequired,
}

export default function HomeTestimonials({ depoimentos }) {
  const { t } = useTranslation(['common', 'home'])

  return (
    <Box component="section" id="homeTestimonials">
      <HomeTitleWithButton
        title={t('home:portfolio.title')}
        href="/portfolio"
        buttonText={t('home:portfolio.button')}
      />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          gap: 4,
        }}
      >
        <Carousel>
          {depoimentos.map((depoimento) => (
            <TestimonialCard key={depoimento.name} testimonial={depoimento} />
          ))}
        </Carousel>
      </Container>
    </Box>
  )
}

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    name: PropTypes.string.isRequired,
    testimonial: PropTypes.string.isRequired,
    position: PropTypes.string,
  }).isRequired,
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
            {testimonial.name}
            {testimonial.position ? ` - ${testimonial.position}` : ''}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
