'use client'

import { useState, useEffect } from "react"

export default function Home() {
  const startTime: number = 20; // this will be the set time for the pomodoro in seconds
  const restTime: number = 5; // this will be the set time for the rest period in seconds
  const [currentTime, setCurrentTime] = useState<number>(startTime);
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  
  const toggleTimer = () => {
    setButtonPressed(!buttonPressed)    
  }

  const runTimer = () => {
    if(buttonPressed && currentTime >= 1) {
      setTimeout(() => {
        setCurrentTime(currentTime-1)
      }, 1000)
    }

    if(currentTime < 1) {
      setButtonPressed(false)
      setCurrentTime(startTime + 1)
    }
  }

  useEffect(() => {
    runTimer()
  })

  return (
    <div>
      <div>{currentTime}</div>
      <button className="rounded bg-blue-400 px-2 py-1.5 text-white" onClick={toggleTimer}>{buttonPressed ? 'Pause' : 'Start'}</button>
    </div>
    
  )
}
