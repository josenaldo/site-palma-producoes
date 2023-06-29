'use client'
import Image from 'next/image'

import logoBranca from '@/assets/images/logo-header-branca.svg'
import logoPreta from '@/assets/images/logo-header-preta.svg'

export default function Logo({ color = 'white' }) {
  const src = color === 'white' ? logoBranca : logoPreta

  return <Image src={src} alt="Logo" />
}
