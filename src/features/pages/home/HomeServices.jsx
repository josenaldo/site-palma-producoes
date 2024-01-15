import PropTypes from 'prop-types'
import { Box, Container, Typography } from '@mui/material'

import { Planets } from '@/features/ui'
import { useWidth } from '@/features/hooks'

const planetSizes = {
  xs: 250,
  sm: 300,
  md: 400,
  lg: 400,
  xl: 400,
}

const planetBoxSizes = {
  xs: '100%',
  sm: '70%',
  md: '60%',
  lg: '50%',
  xl: '50%',
}

HomeServices.propTypes = {
  servicos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default function HomeServices({ servicos }) {
  const screenWidth = useWidth()
  const planetSize = planetSizes[screenWidth]
  const planetBoxSize = planetBoxSizes[screenWidth]

  return (
    <Box component="section" id="homeServices">
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0,
            width: planetBoxSize,
          }}
        >
          <PlanetText
            text={servicos[0].title}
            color="dark.main"
            width={{
              xs: '200px',
              sm: '200px',
              md: '250px',
            }}
          />
          <Box
            sx={{
              position: 'relative',
              width: `${planetSize}px`,
              height: `${planetSize}px`,
            }}
          >
            <Planets size={planetSize} />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              zIndex: -1,
              width: '100%',
            }}
          >
            <PlanetText
              text={servicos[2].title}
              color="dark.main"
              width={{
                xs: '120px',
                sm: '180px',
                md: '250px',
              }}
            />
            <PlanetText
              text={servicos[1].title}
              color="dark.main"
              width={{
                xs: '120px',
                sm: '180px',
                md: '250px',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

PlanetText.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  width: PropTypes.object,
}

function PlanetText({
  text,
  color = 'grey.700',
  width = {
    xs: '120px',
    sm: '120px',
    md: '120px',
  },
}) {
  return (
    <Typography
      variant="h5"
      sx={{
        width: width,
        color: color,
        textAlign: 'center',
      }}
    >
      {text}
    </Typography>
  )
}
