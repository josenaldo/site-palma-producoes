import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

import MuiCarousel from 'react-material-ui-carousel'

export default function Carousel({ children }) {
  return (
    <MuiCarousel
      interval={8000}
      PrevIcon={<ChevronLeftIcon sx={{ fontSize: '2.5rem' }} />}
      NextIcon={<ChevronRightIcon sx={{ fontSize: '2.5rem' }} />}
      navButtonsAlwaysVisible={true}
      indicatorContainerProps={{
        style: {
          paddingTop: '10px',
        },
      }}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
      }}
      navButtonsProps={{
        style: {
          backgroundColor: 'rgb(0 0 0 / 5%)',
          color: 'black',
        },
      }}
    >
      {children}
    </MuiCarousel>
  )
}
