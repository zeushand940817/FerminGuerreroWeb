import { useState } from 'react'

export default function Time() {
  let time = new Date().toLocaleTimeString()
  const [Ctime, setCtime] = useState(time)

  const updateTime = () => {
    time = new Date().toLocaleTimeString()
    setCtime(time)
  }

  setInterval(updateTime, 1000)

  return <div>{time}</div>
}
