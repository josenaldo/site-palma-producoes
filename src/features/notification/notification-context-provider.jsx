import { useReducer } from 'react'

import {
  NotificationContext,
  notificationReducer,
  NO_NOTIFICATION_STATE,
} from '@/features/notification'

export default function NotificationContextProvider({ children }) {
  const [notification, dispatch] = useReducer(
    notificationReducer,
    NO_NOTIFICATION_STATE
  )

  return (
    <NotificationContext.Provider value={{ notification, dispatch }}>
      {children}
    </NotificationContext.Provider>
  )
}
