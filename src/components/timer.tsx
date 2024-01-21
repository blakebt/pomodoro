'use client'

import { useState, useEffect } from "react"

interface TimerProps {
  state: string,
}

export default function Timer({state}: TimerProps) {
  const [startTimer, setStartTimer] = useState<boolean>(false)

  var currentTime;
  if(state === 'FOCUS') {
    currentTime = 600
  } else if(state === 'SHORT') {
    currentTime = 300
  } else {
    currentTime = 900
  }

  const [time, setTime] = useState<number>(currentTime)

  

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

        if(time <= 1) {
          alert('timer ended')
          setStartTimer(false)
          setTime(time) // this will be set to the next state (pom, short rest, long rest)
        }
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [time, startTimer])

  return (
    <div className="flex flex-col w-1/4 h-2/6 rounded items-center justify-center bg-orange-300/50">
      <div className="flex rounded items-center justify-center mx-auto my-5 w-full">
        <div className="flex text-white text-8xl font-bold mb-5">{`${formattedMinutes}:${formattedSeconds}`}</div>
      </div>
      <button className="rounded drop-shadow-md bg-white px-5 py-2 text-orange-400 text-3xl font-bold w-1/4" onClick={toggleTimer}>{startTimer ? 'Pause' : 'Start'}</button>
    </div>
  )
}