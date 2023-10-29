import React from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export default function BlockLightbox({
  imagesRef,
  open,
  setOpen,
  index,
  setIndex,
}) {
  return (
    <Lightbox
      index={index}
      open={open}
      close={() => setOpen(false)}
      slides={imagesRef.current}
    />
  )
}
