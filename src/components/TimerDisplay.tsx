'use client'

import { useState } from "react";
import Link from "next/link";
import Timer from "./Timer"
import { FaCircleQuestion } from "react-icons/fa6";


export default function TimerDisplay() {
  const stateConfig = {
    'FOCUS': {
      duration: 600,
      message: "Let's work!",
      screenColor: 'bg-orange-400',
      dispColor: 'bg-orange-300/50',
      textColor: 'text-orange-400'
    },
    'SHORT_REST': {
      duration: 300,
      message: "Take a breath...",
      screenColor: 'bg-blue-500',
      dispColor: 'bg-blue-400',
      textColor: 'text-blue-500'
    },
    'LONG_REST': {
      duration: 900,
      message: "Enjoy your break",
      screenColor: 'bg-emerald-500',
      dispColor: 'bg-emerald-400',
      textColor: 'text-emerald-500'
    }
  }

  const stateFlow = [stateConfig.FOCUS, stateConfig.SHORT_REST, stateConfig.FOCUS, stateConfig.SHORT_REST, stateConfig.FOCUS, stateConfig.LONG_REST]
  const [timerState, setTimerState] = useState(0);

  const currentState = stateFlow[timerState]

  return (
    <div className={`flex flex-col h-full min-h-screen ${currentState.screenColor}`}>
      <div className="p-5">
        <Link href="/about" className="my-5"><FaCircleQuestion className="ml-5 text-5xl text-slate-300 hover:text-slate-50"/></Link>
      </div>
      <div className="flex mx-auto">
        <div className="text-white text-8xl font-bold p-5" >{currentState.message}</div>
      </div>
      <div className={`flex flex-col items-center mx-auto`}>
        <div className={`flex flex-col rounded-2xl my-5 px-72 py-48 ${currentState.dispColor}`}>
          <div>
            <Timer setTimerState={setTimerState} state={currentState}/>
          </div>
        </div>
      </div>
    </div>
  )
}