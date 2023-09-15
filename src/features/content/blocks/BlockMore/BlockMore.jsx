import { Button, Collapse } from '@mui/material'
import React from 'react'

export default function BlockMore({ children }) {
  const [open, setOpen] = React.useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <Button variant="text" color="primary" onClick={toggleOpen}>
        Ver mais
      </Button>
      <Collapse in={open}>{children}</Collapse>
    </>
  )
}
