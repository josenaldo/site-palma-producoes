import { Carousel } from '@/features/ui'
import React from 'react'

export default function Carrossel({ children, ...props }) {
  const cleanedChildren = React.Children.toArray(children).filter((child) => {
    return child !== '\n' && child !== ' '
  })

  return <Carousel {...props}>{cleanedChildren}</Carousel>
}
