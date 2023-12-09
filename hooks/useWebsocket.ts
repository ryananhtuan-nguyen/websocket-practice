// services/socketService.ts
import { useEffect, useState } from 'react'

interface Notification {
  id: string
  user: {
    id: number
    first_name: string
    last_name: string
    profile_picture: string
  }
  event: string
  action: {
    title: string
    url: string
  } | null
  message: string | null
  media: string | null
  created_at: string
}

interface WebSocketService {
  notifications: Notification[]
}

const useWebSocket = (url: string, token: string): WebSocketService => {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (token) {
        const socketInstance = new WebSocket(
          `${url}/ws/notification/?token=${token}`
        )

        socketInstance.addEventListener('open', () => {
          console.log('WebSocket connection opened')
        })

        socketInstance.addEventListener('message', (event) => {
          const notification: Notification = JSON.parse(event.data)
          console.log(event.data)
          setNotifications((prevNotifications) => [
            notification,
            ...prevNotifications,
          ])
        })

        setSocket(socketInstance)
      }
    }, 10000)

    return () => {
      clearTimeout(timeoutId)
      if (socket) {
        socket.close()
      }
    }
  }, [url, token])

  return { notifications }
}

export default useWebSocket
