import React from 'react'

import { Button } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

export default function BlockKnowMoreButton({ href, children = null }) {
  const text = children || t('common:content.knowMore')

  return (
    <Button variant="outlined" href={href} endIcon={<OpenInNewIcon />}>
      {text}
    </Button>
  )
}
