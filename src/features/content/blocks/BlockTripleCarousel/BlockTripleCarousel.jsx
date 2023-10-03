import React from 'react'

import { Carousel } from '@/features/ui'

export default function BlockTripleCarousel({ children, ...props }) {
  const cleanedChildren = React.Children.toArray(children).filter((child) => {
    return child !== '\n' && child !== ' '
  })

  return (
    <Carousel slidesPerView={1.5} {...props}>
      {cleanedChildren}
    </Carousel>
  )
}
