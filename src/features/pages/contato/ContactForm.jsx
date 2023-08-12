import { useState } from 'react'

import { Box, Button } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'

import axios from 'axios'
import * as yup from 'yup'
import 'yup-phone-lite'

import { Form, FormInputPhone, FormInputText } from '@/features/form'
import { useTranslation } from '@/features/i18n'
import { Notification, useNotification } from '@/features/notification'

const defaultValues = {
  name: '',
  phone: '+55',
  email: '',
  message: '',
}

export default function ContactForm() {
  const { t } = useTranslation(['common'])
  const [loading, setLoading] = useState(false)
  const { dispatch, setNotification, setErrorNotification, LEVELS } =
    useNotification()

  const nameLabel = t('common:form.contato.name')
  const phoneLabel = t('common:form.contato.phone')
  const emailLabel = t('common:form.contato.email')
  const messageLabel = t('common:form.contato.message')

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

  const onSubmit = async (data) => {
    setLoading(true)

    try {
      const res = await axios.post('/api/contact', data)
      dispatch(
        setNotification({
          type: LEVELS.SUCCESS,
          message: t('common:form.contato.successMessage'),
          details: t('common:form.contato.successDetails'),
        })
      )
    } catch (error) {
      dispatch(
        setErrorNotification({
          message: t('common:form.contato.errorMessage'),
          details: t('common:form.contato.errorDetails'),
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
          label={t('common:form.contato.name')}
          fullWidth
          required
        />
        <FormInputPhone
          id="phone"
          name="phone"
          label={t('common:form.contato.phone')}
          fullWidth
          required
        />
        <FormInputText
          id="email"
          type="text"
          name="email"
          label={t('common:form.contato.email')}
          fullWidth
          required
        />
        <FormInputText
          id="message"
          type="text"
          name="message"
          label={t('common:form.contato.message')}
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
          form="contactForm"
          type="submit"
          variant="contained"
          color="primary"
          loading={loading}
        >
          {t('common:form.contato.send')}
        </LoadingButton>
        <Button form="contactForm" type="reset" variant="outlined" color="grey">
          {t('common:form.contato.reset')}
        </Button>
      </Box>
    </Box>
  )
}
