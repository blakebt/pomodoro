'use client'

import { useState, useEffect } from "react"

interface TimerProps {
  setTimerState: React.Dispatch<React.SetStateAction<number>>,
  state: {
    duration: number,
    message: string,
    screenColor: string,
    dispColor: string,
    textColor: string
  }
}

export default function Timer({setTimerState, state}: TimerProps) {
  const [startTimer, setStartTimer] = useState<boolean>(false)
  const [time, setTime] = useState<number>(state.duration)

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
          
          setStartTimer(false)
          setTimerState(prev => (prev + 1) % 6) // changing timer state using `(prev + 1) % 6` to ensure it cycles through each state and loops back
          
        }
      }, 1000)
      return () => clearInterval(interval)
    } else {
      setTime(state.duration) // once the timer stops reset the time to the next time in the sequence
    }
  }, [time, startTimer, state.duration])

  return (
    <div className="flex flex-col items-center">
      <div className="rounded mx-auto my-5">
        <div className=" text-white text-9xl font-bold mb-5">{`${formattedMinutes}:${formattedSeconds}`}</div>
      </div>
      <button className={`rounded drop-shadow-md bg-white px-5 py-5 w-64 ${state.textColor} text-3xl font-bold`} onClick={toggleTimer}>{startTimer ? 'Pause' : 'Start'}</button> 
    </div> 
  )
}