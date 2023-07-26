import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import 'yup-phone-lite'

import { Box, Button } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'

import { Form, FormInputPhone, FormInputText } from '@/features/form'
import axios from 'axios'
import { useState } from 'react'

import { Notification, useNotification } from '@/features/notification'

const defaultValues = {
  name: '',
  phone: '',
  email: '',
  message: '',
}

export default function ContactForm({ t }) {
  const [loading, setLoading] = useState(false)
  const { dispatch, setNotification, setErrorNotification, LEVELS } =
    useNotification()

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

  const onSubmit = async (data) => {
    setLoading(true)

    try {
      const res = await axios.post('/api/contact', data)
      dispatch(
        setNotification({
          type: LEVELS.SUCCESS,
          message: t('contato:form.successMessage'),
          details: t('contato:form.successDetails'),
        })
      )
    } catch (error) {
      dispatch(
        setErrorNotification({
          message: t('contato:form.errorMessage'),
          details: t('contato:form.errorDetails'),
          error,
        })
      )
    }
    setLoading(false)
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
      <Notification />
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
          label={t('contato:form.name')}
          fullWidth
          required
        />
        <FormInputPhone
          id="phone"
          name="phone"
          label={t('contato:form.phone')}
          fullWidth
          required
        />
        <FormInputText
          id="email"
          type="text"
          name="email"
          label={t('contato:form.email')}
          fullWidth
          required
        />
        <FormInputText
          id="message"
          type="text"
          name="message"
          label={t('contato:form.message')}
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
        <LoadingButton
          loading={loading}
          variant="contained"
          color="primary"
          type="submit"
          form="contactForm"
        >
          {t('contato:form.send')}
        </LoadingButton>
        <Button onClick={() => reset()} variant="outlined" color="grey">
          {t('contato:form.reset')}
        </Button>
      </Box>
    </Box>
  )
}
