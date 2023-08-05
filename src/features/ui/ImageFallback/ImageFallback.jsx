import { useEffect, useState } from 'react'

import Image from 'next/image'

export default function ImageFallback({ src, fallbackSrc, alt, ...rest }) {
  const [imgSrc, setImgSrc] = useState(src)

  useEffect(() => {
    setImgSrc(src)
  }, [src])

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          setImgSrc(fallbackSrc)
        }
      }}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
    />
  )
}
