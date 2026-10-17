import { useEffect, useState } from 'react'

function getTimeLeft(targetDate) {
  const diff = new Date(targetDate).getTime() - Date.now()
  if (diff <= 0) return null
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function isPast(date) {
  return Boolean(date) && Date.now() > new Date(date).getTime()
}

export default function EventCountdown({ targetDate, endDate }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate))
  const [ended, setEnded] = useState(() => isPast(endDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate))
      setEnded(isPast(endDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate, endDate])

  if (!timeLeft) {
    return <p className="countdown-live">{ended ? 'This event has ended' : 'Happening now!'}</p>
  }

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Sec', value: timeLeft.seconds },
  ]

  return (
    <div className="countdown">
      {units.map((u) => (
        <div className="countdown-unit" key={u.label}>
          <span className="countdown-value">{String(u.value).padStart(2, '0')}</span>
          <span className="countdown-label">{u.label}</span>
        </div>
      ))}
    </div>
  )
}
