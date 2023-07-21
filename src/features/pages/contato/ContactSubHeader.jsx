import { Link } from '@/features/ui'
import { Box, Typography } from '@mui/material'

export default function ContactSubHeader({ t }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <Typography variant="h4">
        Tem um projeto em mente e quer realizá-lo conosco?
      </Typography>
      <Typography variant="body1">
        Nos conte sobre e preencha o formulário! :)
      </Typography>
      <Link href="google.com" color="tertiary.main">
        Clique aqui
      </Link>
    </Box>
  )
}
