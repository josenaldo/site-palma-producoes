import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import 'yup-phone-lite'

import { Box, Button } from '@mui/material'
import { Form, FormInputPhone, FormInputText } from '@/features/form'
import { useTranslation } from 'react-i18next'

const defaultValues = {
  name: '',
  phone: '',
  email: '',
  message: '',
}

export default function ContactForm({ t }) {
  const nameLabel = t('contato:form.name')
  const phoneLabel = t('contato:form.phone')
  const emailLabel = t('contato:form.email')
  const messageLabel = t('contato:form.message')

  const validations = yup
    .object({
      name: yup
        .string()
        .min(
          3,
          t('common:form.error.minLength', { label: nameLabel, value: 3 })
        )
        .required(t('common:form.error.required', { label: nameLabel })),
      phone: yup
        .string()
        .phone(
          ['BR', 'US'],
          t('common:form.error.phone', { label: phoneLabel })
        )
        .required(t('common:form.error.required', { label: phoneLabel })),
      email: yup
        .string()
        .email(t('common:form.error.email', { label: emailLabel }))
        .required(t('common:form.error.required', { label: emailLabel })),
      message: yup
        .string()
        .min(
          3,
          t('common:form.error.minLength', { label: messageLabel, value: 3 })
        )
        .required(t('common:form.error.required', { label: messageLabel })),
    })
    .required()

  const { handleSubmit, reset, control, setValue } = useForm({
    defaultValues,
    resolver: yupResolver(validations),
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
      <Form
        id="contactForm"
        onSubmit={onSubmit}
        validations={validations}
        defaultValues={defaultValues}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          gap: 2,
        }}
      >
        <FormInputText
          id="name"
          type="text"
          name="name"
          label="Nome"
          fullWidth
          required
        />
        <FormInputPhone
          id="phone"
          name="phone"
          label="Telefone"
          fullWidth
          required
        />
        <FormInputText
          id="email"
          type="text"
          name="email"
          label="Email"
          fullWidth
          required
        />
        <FormInputText
          id="message"
          type="text"
          name="message"
          label="Mensagem"
          fullWidth
          required
          multiline
          rows={4}
        />
      </Form>
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
          variant="contained"
          color="primary"
          type="submit"
          form="contactForm"
        >
          {t('contato:form.send')}
        </Button>
        <Button onClick={() => reset()} variant="outlined" color="grey">
          {t('contato:form.reset')}
        </Button>
      </Box>
    </Box>
  )
}
