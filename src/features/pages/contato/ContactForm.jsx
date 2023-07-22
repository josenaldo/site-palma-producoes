import { useForm } from 'react-hook-form'

import { Box, Button, TextField } from '@mui/material'
import { FormInputText } from '@/features/form'

const defaultValues = {
  name: '',
  phone: '',
  email: '',
  message: '',
}

export default function ContactForm({ t }) {
  const { handleSubmit, reset, control, setValue } = useForm({
    defaultValues,
  })

  const onSubmit = (data) => {
    console.log('Enviando mensagem', data)
  }

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
      <FormInputText name={'name'} control={control} label="Nome" fullWidth />
      <FormInputText
        name={'phone'}
        control={control}
        label="Telefone"
        fullWidth
      />
      <FormInputText name={'email'} control={control} label="Email" fullWidth />
      <FormInputText
        name={'message'}
        control={control}
        label="Mensagem"
        fullWidth
        multiline
        rows={4}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 1,
        }}
      >
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          color="primary"
          type="submit"
        >
          Enviar
        </Button>
        <Button onClick={() => reset()} variant="outlined" color="grey">
          Reset
        </Button>
      </Box>
    </Box>
  )
}
