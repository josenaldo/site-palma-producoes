import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from './BlockPartnershipItem.module.css'

export default function BlockPartnershipItem({
  parceiro = '',
  logo,
  url = null,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      {url ? (
        <Link
          href={url || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.partnerLink}
        >
          <Image src={logo} alt={parceiro} width={150} height={64} />
        </Link>
      ) : (
        <Image src={logo} alt={parceiro} width={150} height={64} />
      )}
    </Box>
  )
}
