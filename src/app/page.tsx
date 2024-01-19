'use client'
/* 
TODO

extract all timer related code into a component

*/

import { useState, useEffect } from "react"

export default function Home() {
  const startTime: number = 20; // this will be the set time for the pomodoro in seconds
  const restTime: number = 5; // this will be the set time for the rest period in seconds
  const [currentTime, setCurrentTime] = useState<number>(startTime);
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  
  var totalSecondsLeft = currentTime;
  var minutesLeft = Math.floor(totalSecondsLeft / 60);
  totalSecondsLeft = totalSecondsLeft - (minutesLeft * 60);

  const formattedMinutes = minutesLeft < 10 ? ('0' + minutesLeft) : minutesLeft;
  const formattedSeconds = totalSecondsLeft < 10 ? ('0' + totalSecondsLeft) : totalSecondsLeft;

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
      setCurrentTime(startTime)
    }
  }

  useEffect(() => {
    runTimer()
  })

  return (
    <div>
      <div>{`${formattedMinutes}:${formattedSeconds}`}</div>
      <button className="rounded bg-blue-400 px-2 py-1.5 text-white" onClick={toggleTimer}>{buttonPressed ? 'Pause' : 'Start'}</button>
    </div>
    
  )
}
