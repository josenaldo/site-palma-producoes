import Image from 'next/image'

import logoBranca from '@/assets/images/logo-header-branca.svg'
import logoBrancaHorizontal from '@/assets/images/logo-header-branca-hor.svg'
import logoPreta from '@/assets/images/logo-header-preta.svg'
import logoPretaHorizontal from '@/assets/images/logo-header-preta-hor.svg'
import { Link } from '@/features/ui'

const logos = {
  white: {
    vertical: logoBranca,
    horizontal: logoBrancaHorizontal,
  },
  black: {
    vertical: logoPreta,
    horizontal: logoPretaHorizontal,
  },
}

export default function Logo({
  color = 'white',
  type = 'vertical',
  height = 60,
}) {
  const src = logos[color][type]

  return (
    <Link
      href="/"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: '0',
        letterSpacing: '0',
      }}
    >
      <Image src={src} alt="Logo" priority height={height} />
    </Link>
  )
}
