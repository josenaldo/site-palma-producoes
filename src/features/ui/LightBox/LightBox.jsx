import React from 'react'

import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Image from 'next/image'

export default function LightBox({
  src,
  width,
  height,
  alt,
  caption = null,
  open,
  onClose,
}) {
  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      fullScreen
      aria-labelledby="alert-dialog-title"
      sx={{
        '& .MuiBackdrop-root': {
          backgroundColor: 'transparent',
        },
        '& .MuiPaper-root ': {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
        },
      }}
      onClick={handleClose}
    >
      <DialogTitle
        id="alert-dialog-title"
        color="primary"
        sx={{ paddingRight: '40px' }}
      >
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 10,
              top: 12,
              color: 'light.main',
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>

      <DialogContent
        sx={{
          gap: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
          onClick={handleClose}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              aspectRatio: `${width}/${height}`,
              maxWidth: '100%',
              maxHeight: '100%',
              flexGrow: 1,
            }}
            onClick={handleClose}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                aspectRatio: `${width}/${height}`,
                position: 'relative',
                flexGrow: 1,
              }}
              onClick={handleClose}
            >
              <Image
                src={src}
                alt={alt}
                fill
                priority
                style={{
                  objectFit: 'contain',
                }}
                onClick={(event) => {
                  event.stopPropagation()
                }}
              />
            </Box>
          </Box>

          {caption && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                my: '5px',
                color: 'light.main',
              }}
            >
              <Typography variant="body1" textAlign="center">
                {caption}
              </Typography>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  )
}
