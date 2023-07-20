import React, { useState } from 'react'
import { Box, IconButton } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'

import ShareDialog from './ShareDialog'

export default function ShareLink({
  title,
  description,
  url,
  image,
  color = 'secondary',
  t = { t },
}) {
  const [open, setOpen] = useState(false)
  const [isNativeShare, setNativeShare] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  React.useEffect(() => {
    if (navigator.share) {
      setNativeShare(true)
    }
  }, [])

  const handleOnClick = async () => {
    const data = {
      title: title,
      text: description,
      url: url,
    }

    if (image) {
      const blob = await fetch(image).then((r) => r.blob())
      const ext = blob.type.split('/')[1]
      const files = [
        new File([blob], `file.${ext}`, {
          type: blob.type,
        }),
      ]

      if (navigator.canShare && navigator.canShare({ files })) {
        data.files = files
      }
    }

    if (navigator.share) {
      navigator
        .share(data)
        .then(() => {
          console.log('Successfully shared')
        })
        .catch((error) => {
          setOpen(true)
        })
    } else {
      setOpen(true)
    }
  }

  return (
    <Box>
      <IconButton onClick={handleOnClick} color={color} variant="contained">
        <ShareIcon />
      </IconButton>

      {!isNativeShare && (
        <ShareDialog
          title={title}
          url={url}
          description={description}
          open={open}
          onClose={() => {
            handleClose()
          }}
          t={t}
        />
      )}
    </Box>
  )
}
