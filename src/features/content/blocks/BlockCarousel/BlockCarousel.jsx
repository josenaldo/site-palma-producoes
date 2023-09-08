import React from 'react'

import { Carousel } from '@/features/ui'

export default function BlockCarousel({ children, ...props }) {
  const cleanedChildren = React.Children.toArray(children).filter((child) => {
    return child !== '\n' && child !== ' '
  })

  return <Carousel {...props}>{cleanedChildren}</Carousel>
}
