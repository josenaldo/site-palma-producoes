import { Abstract } from '@/features/ui'
import React from 'react'

export default function BlockAbstract({ children, ...props }) {
  return <Abstract {...props}>{children}</Abstract>
}
