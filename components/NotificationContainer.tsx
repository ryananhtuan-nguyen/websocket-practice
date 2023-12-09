'use client'
import React from 'react'
import NotificationCard from './NotificationCard'
import useWebSocket from '@/hooks/useWebsocket'

const NotificationsContainer: React.FC<{ token: string }> = ({ token }) => {
  const { notifications } = useWebSocket(process.env.WEBSOCKET_BASE_URL!, token)

  return (
    <div className="max-w-[400px] m-auto">
      {notifications.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ))}
    </div>
  )
}

export default NotificationsContainer
