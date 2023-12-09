'use client'
import React from 'react'
import NotificationCard from './NotificationCard'
import useWebSocket from '@/hooks/useWebsocket'

const NotificationsContainer: React.FC<{ url: string; token: string }> = ({
  url,
  token,
}) => {
  const { notifications } = useWebSocket(url, token)

  return (
    <div className="max-w-[400px] m-auto">
      {notifications.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ))}
    </div>
  )
}

export default NotificationsContainer
