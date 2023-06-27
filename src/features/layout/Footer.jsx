'use client'

import { Box, Divider, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        justifyContent: 'center',
        alignItems: 'center',
        padding: '17px 23px',
        backgroundColor: 'common.black',
        color: 'common.white',
        width: '100%',
        gap: 1,
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: '13px',
        }}
      >
        2023 &copy; Desenvolvido por Josenaldo Matos
      </Typography>
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          borderColor: 'common.white',
          display: {
            xs: 'none',
            sm: 'block',
          },
        }}
      />
      <Typography
        variant="body1"
        sx={{
          fontSize: '13px',
        }}
      >
        Projeto sem fins comerciais
      </Typography>
    </Box>
  )
}
