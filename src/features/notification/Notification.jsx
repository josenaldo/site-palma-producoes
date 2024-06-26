import { useState } from 'react'

import { Alert, AlertTitle, Box, Button, Collapse } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

import {
  useRemoveNotification,
  useNotificationDispatch,
  useNotificationValue,
} from '@/features/notification'
import { useTranslation } from '@/features/i18n'

export default function Notification() {
  const { t } = useTranslation(['common'])
  const dispatch = useNotificationDispatch()
  const removeNotification = useRemoveNotification()
  const notification = useNotificationValue()
  const [open, setOpen] = useState(false)

  const close = () => {
    dispatch(removeNotification())
  }

  if (!notification || !notification.message) {
    return null
  }

  return (
    <Alert
      variant="outlined"
      severity={notification.type}
      onClose={close}
      sx={{
        width: '100%',
      }}
    >
      <AlertTitle>{notification.message}</AlertTitle>

      {notification.details && <p>{notification.details}</p>}
      {notification.error && (
        <Box>
          <Button
            size="small"
            color={notification.type}
            onClick={() => setOpen(!open)}
            endIcon={open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          >
            {open
              ? t('common:notification.hideDetails')
              : t('common:notification.showDetails')}
          </Button>

          <Collapse in={open}>
            <Box component="ul" sx={{ padding: '0' }}>
              {notification.error.statusCode && (
                <li>Status code: {notification.error.statusCode}</li>
              )}
              {notification.error.errorMessage && (
                <li>Message Error: {notification.error.errorMessage}</li>
              )}
              {notification.error.errorDetails && (
                <li>Details: {notification.error.errorDetails}</li>
              )}
            </Box>
          </Collapse>
        </Box>
      )}
    </Alert>
  )
}
