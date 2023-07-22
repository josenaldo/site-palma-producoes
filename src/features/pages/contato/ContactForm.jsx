import { useForm } from 'react-hook-form'

import { Box, Button, TextField } from '@mui/material'

export default function ContactForm({ t }) {
  const { register, handleSubmit, reset, control, setValue } = useForm()
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',

        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 2,
        width: {
          xs: '100%',
          md: '50%',
        },
      }}
    >
      <TextField label="Nome" {...register('name')} fullWidth />
      <TextField label="Telefone" {...register('phone')} fullWidth />
      <TextField label="Email" {...register('email')} fullWidth />
      <TextField
        label="Mensagem"
        {...register('message')}
        fullWidth
        multiline
        rows={4}
        minRows={4}
      />
      <Button variant="contained" color="primary" type="submit">
        Enviar
      </Button>
    </Box>
  )
}
