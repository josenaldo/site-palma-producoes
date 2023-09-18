import React from 'react'
import { Box, useTheme } from '@mui/material'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function Carousel({ children }) {
  const theme = useTheme()

  const arrayChildren = React.Children.toArray(children)

  return (
    <Box
      className="swiper-container"
      sx={{
        width: '100%',
        py: 4,
      }}
    >
      <Swiper
        className="swiper-wrapper"
        style={{
          '--add-bottom': '50px',
          '--swiper-theme-color': theme.palette.primary.main,
          '--swiper-navigation-color': 'rgb(255 255 255 / 70%)',
          '--swiper-navigation-background-color': 'rgb(255 255 255 / 70%)',
          '--swiper-navigation-size': '40px',

          '--swiper-pagination-bullet-size': '16px',
          '--swiper-pagination-bullet-width': '16px',
          '--swiper-pagination-bullet-height': '16px',
          '--swiper-pagination-bullet-inactive-color': '#000',
          '--swiper-pagination-bullet-inactive-opacity': '0.4',
          '--swiper-pagination-bullet-opacity': '1',
          '--swiper-pagination-bullet-horizontal-gap': '4px',
          '--swiper-pagination-bullet-vertical-gap': '6px',
          'padding-bottom': 'var(--add-bottom)',
        }}
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          type: 'bullets',
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        autoHeight
        loop
      >
        {arrayChildren.map((child) => (
          <SwiperSlide key={child.id}>{child}</SwiperSlide>
        ))}
        {/* <Box className={styles.swiperPagination}></Box> */}
        <NavigationButton className="swiper-button-next"></NavigationButton>

        <NavigationButton className="swiper-button-prev"></NavigationButton>
      </Swiper>
    </Box>
  )
}

function NavigationButton({ className }) {
  return (
    <Box
      className={className}
      sx={{
        display: 'inline-block',
        color: 'light.main',
        backgroundColor: 'primary.main',
        width: 'var(--swiper-navigation-size) !important',
        height: 'var(--swiper-navigation-size) !important',
        borderRadius: '50%',
        filter: 'opacity(0.5)',
        '--swiper-navigation-sides-offset': {
          xs: '10px',
          sm: '20px',
          md: '30px',
          lg: '40px',
          xl: '50px',
        },
        '&::after': {
          fontSize: 'var(--swiper-navigation-size)/2 !important',
        },
        '&:hover': {
          filter: 'opacity(0.8)',
        },
      }}
    ></Box>
  )
}
