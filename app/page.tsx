'use client'
import React, { useState, useEffect } from 'react'
import NotificationsContainer from '@/components/NotificationContainer'

const Home: React.FC = () => {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch(
          `${process.env.BASE_URL}/api/token?hiring_secret=${process.env.HIRING_SECRET}`
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
  }, [token])

  return <div>{token && <NotificationsContainer token={token} />}</div>
}

export default Home
