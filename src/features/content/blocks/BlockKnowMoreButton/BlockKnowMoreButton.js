import React from 'react'

import { Button } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { useTranslation } from '@/features/i18n'

export default function BlockKnowMoreButton({ href, children = null }) {
  const { t } = useTranslation(['common'])

  const text = children || t('common:content.knowMore')

  return (
    <Button
    variant="outlined"
    href={href}
    target="_blank"
    rel='noopener noreferrer'
    endIcon={<OpenInNewIcon />}>
      {text}
    </Button>
  )
}
