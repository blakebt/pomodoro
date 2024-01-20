'use client'
/* 
TODO

extract all timer related code into a component

*/

import { useState, useEffect } from "react"

export default function Home() {
  // const [minutes, setMinutes] = useState<number>(0);
  // const [seconds, setSeconds] = useState<number>(0);
  const pomTime = 5000 // pomodoro time in milliseconds
  const [formattedMinutes, setFormattedMinutes] = useState<string>('10');
  const [formattedSeconds, setFormattedSeconds] = useState<string>('00');
  const [startTime, setStartTime] = useState<number>(0);
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  
  const formatTime = (milliseconds: number) => {
    if(milliseconds <= 0) {
      setButtonPressed(prev => !prev)
    }
    var seconds = milliseconds / 1000
    var minutes = Math.floor(seconds / 60)
    seconds = Math.floor(seconds - Math.floor(minutes) * 60)
    
    seconds = seconds < 0 ? 0 : seconds
    minutes = minutes < 0 ? 0 : minutes
    
    const mins = minutes < 10 ? ('0' + minutes) : minutes.toString();
    setFormattedMinutes(mins)
    const secs = seconds < 10 ? ('0' + seconds) : seconds.toString();
    setFormattedSeconds(secs)
  }

  const toggleButton = () => {
    setStartTime(prev => {
      return Date.now() - prev
    })
    setButtonPressed(!buttonPressed);  
  }
  
  useEffect(() => {
    var interval: NodeJS.Timeout
    if(buttonPressed) {

      /* I'm not entirely sure why I need to subtract 1000 milliseconds here. It prevents the timer from starting 1 second lower than it should
         TODO figure this out
      */
      interval = setInterval(() => formatTime(pomTime - (Date.now() - startTime - 1000)), 1000);
    }
    return () => clearInterval(interval)
  })

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-orange-400">
      <div className="flex flex-col w-1/4 h-2/6 rounded items-center justify-center bg-orange-300/50">
        <div className="flex rounded items-center justify-center mx-auto my-5 w-full">
          <div className="flex text-white text-9xl font-bold mb-5">{`${formattedMinutes}:${formattedSeconds}`}</div>
        </div>
        <button className="rounded drop-shadow-md bg-white px-5 py-2 text-orange-400 text-3xl font-bold w-1/4" onClick={toggleButton}>{buttonPressed ? 'Pause' : 'Start'}</button>
      </div>
    </div>
    
  )
}
