import { Box, Typography } from '@mui/material'

import { ErrorMessage } from '@hookform/error-message'
import { useTranslation } from 'react-i18next'

export default function FormErrors({ errors, name, label }) {
  const { t } = useTranslation(['common'])

  return (
    <Box
      sx={{
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        padding: '6px',
        color: 'error.main',
      }}
    >
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ messages }) => {
          if (!messages) {
            return (
              <Typography
                key="unknown"
                variant="caption"
                className="error-message"
              >
                {t('common:form.error.unknown')}
              </Typography>
            )
          }

          const erros = Object.entries(messages).map((errorMessage) => {
            let [type, message] = errorMessage

            if (!message) {
              message = t(`common:form.error.default.${type}`)
            }

            return (
              <Typography
                key={type}
                variant="caption"
                className="error-message"
              >
                {message}
              </Typography>
            )
          })
          return erros
        }}
      />
    </Box>
  )
}
