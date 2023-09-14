import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BlockPartnershipItem({
  parceiro = '',
  logo,
  url = '#',
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: 2,
        backgroundColor: 'grey.100',
      }}
    >
      <Link href={url || '#'} target="_blank" rel="noopener noreferrer">
        <Image src={logo} alt={parceiro} height={85} width={200} />
      </Link>
    </Box>
  )
}
