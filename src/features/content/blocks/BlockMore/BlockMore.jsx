import { useTranslation } from '@/features/i18n'
import { Button, Collapse } from '@mui/material'
import React from 'react'

export default function BlockMore({
  textMore = null,
  textLess = null,
  variant = 'outlined',
  color = 'primary',
  children,
}) {
  const { t } = useTranslation(['common'])
  const [open, setOpen] = React.useState(false)

  const more = textMore || t('common:button.more')
  const less = textLess || t('common:button.less')

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <Button variant={variant} color={color} onClick={toggleOpen}>
        {open ? more : less}
      </Button>
      <Collapse in={open}>{children}</Collapse>
    </>
  )
}
