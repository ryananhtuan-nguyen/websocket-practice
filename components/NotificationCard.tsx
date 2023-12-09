// components/NotificationCard.tsx
import React from 'react'
import { Notification } from '@/types/types'
import Image from 'next/image'

interface NotificationCardProps {
  notification: Notification
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  notification,
}) => {
  return (
    <div className="flex p-2.5 border border-[#ddd] mb-2.5">
      <Image
        src={notification.user.profile_picture}
        alt="Profile"
        width={48}
        height={48}
      />
      <div className="flex">
        <p>
          <strong>
            {notification.user.first_name} {notification.user.last_name}
          </strong>{' '}
          {notification.event}{' '}
          {notification.action && (
            <a href={notification.action.url}>{notification.action.title}</a>
          )}
        </p>
        {notification.media && (
          <Image src={notification.media} alt="media" width={48} height={48} />
        )}
      </div>
    </div>
  )
}

export default NotificationCard
