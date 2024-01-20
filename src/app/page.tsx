'use client'
/* 
TODO

extract all timer related code into a component

*/

import { useState, useEffect } from "react"

export default function Home() {

  const pomTime = 600
  const shortRestTime = 300
  const longRestTime = 1200

  const [startTimer, setStartTimer] = useState<boolean>(false)
  const [time, setTime] = useState<number>(3)

  const minutes = Math.floor(time / 60)
  const seconds = time - (minutes * 60)

  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds

  const toggleTimer = () => {
    setStartTimer(prev => !prev)
  }
  useEffect(() => {
    if(startTimer) {
      const interval = setInterval(() => {
        time > 0 && setTime(prev => prev - 1)

        time <= 1 && setStartTimer(false)
        
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [time, startTimer])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-orange-400">
      <div className="flex flex-col w-1/4 h-2/6 rounded items-center justify-center bg-orange-300/50">
        <div className="flex rounded items-center justify-center mx-auto my-5 w-full">
          <div className="flex text-white text-9xl font-bold mb-5">{`${formattedMinutes}:${formattedSeconds}`}</div>
        </div>
        <button className="rounded drop-shadow-md bg-white px-5 py-2 text-orange-400 text-3xl font-bold w-1/4" onClick={toggleTimer}>{startTimer ? 'Pause' : 'Start'}</button>
      </div>
    </div>
    
  )
}
