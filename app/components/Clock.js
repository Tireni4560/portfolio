'use client'

import { useEffect, useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState('--:--:--')

  useEffect(() => {
    // Initialize with current time
    const updateTime = () => {
      const now = new Date()
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Africa/Lagos',
      }
      const formatted = now.toLocaleTimeString('en-GB', options)
      setTime(formatted)
    }

    updateTime()
    let timer = setInterval(updateTime, 1000)

    // Pause when tab is hidden
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(timer)
        timer = null
      } else if (timer === null) {
        timer = setInterval(updateTime, 1000)
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      clearInterval(timer)
    }
  }, [])

  return <time aria-label="Current time in Nigeria">{time}</time>
}

export default Clock