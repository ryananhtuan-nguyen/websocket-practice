'use client'
import React, { useState, useEffect } from 'react'
import NotificationsContainer from '@/components/NotificationContainer'

const Home: React.FC = () => {
  const [token, setToken] = useState<string | null>(null)
  const BASE_URL = 'https://notifications-server.fly.dev'
  const WEBSOCKET_BASE_URL = 'wss://notifications-server.fly.dev'
  const HIRING_SECRET = 'm4v3H34l7H-5JJW'

  useEffect(() => {
    // Fetch the token using the hiring secret
    const fetchToken = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/token?hiring_secret=${HIRING_SECRET}`
        )
        const data = await response.json()

        if (data.token) {
          console.log(token)
          setToken(data.token)
        } else {
          console.error('Token not received from the server')
        }
      } catch (error) {
        console.error('Error fetching token:', error)
      }
    }

    fetchToken()
  }, [HIRING_SECRET, BASE_URL, token])

  return (
    <div>
      {token && (
        <NotificationsContainer url={WEBSOCKET_BASE_URL} token={token} />
      )}
    </div>
  )
}

export default Home
