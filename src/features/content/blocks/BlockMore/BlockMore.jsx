import { useTranslation } from '@/features/i18n'
import { Button, Collapse } from '@mui/material'
import React from 'react'

export default function BlockMore({ children }) {
  const { t } = useTranslation(['common'])
  const [open, setOpen] = React.useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <Button variant="text" color="primary" onClick={toggleOpen}>
        {open ? t('common:button.less') : t('common:button.more')}
      </Button>
      <Collapse in={open}>{children}</Collapse>
    </>
  )
}
