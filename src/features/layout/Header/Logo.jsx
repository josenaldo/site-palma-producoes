'use client'
import Image from 'next/image'

import logoBranca from '@/assets/images/logo-branca.png'

export default function Logo() {
  return <Image src={logoBranca} alt="Logo" />
}
