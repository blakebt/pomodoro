'use client'

import { useState } from "react";
import Link from "next/link";
import Timer from "./Timer"
import { FaCircleQuestion } from "react-icons/fa6";


export default function TimerDisplay() {
  const stateConfig = {
    'FOCUS': {
      duration: 5,
      screenColor: 'bg-orange-400',
      dispColor: 'bg-orange-300/50',
      textColor: 'text-orange-400'
    },
    'SHORT_REST': {
      duration: 10,
      screenColor: 'bg-blue-500',
      dispColor: 'bg-blue-400',
      textColor: 'text-blue-500'
    },
    'LONG_REST': {
      duration: 15,
      screenColor: 'bg-emerald-500',
      dispColor: 'bg-emerald-400',
      textColor: 'text-emerald-500'
    }
  }

  const stateFlow = [stateConfig.FOCUS, stateConfig.SHORT_REST, stateConfig.FOCUS, stateConfig.SHORT_REST, stateConfig.FOCUS, stateConfig.LONG_REST]
  const [timerState, setTimerState] = useState(0);

  const currentState = stateFlow[timerState]

  return (
    <div className={`h-screen ${currentState.screenColor}`}>
      <div className="p-5">
        <Link href="/about" className="my-5"><FaCircleQuestion className="ml-5 text-5xl text-slate-300 hover:text-slate-50"/></Link>
      </div>
      <div className={`flex flex-col items-center justify-center h-2/3`}>
        <div className={`flex flex-col rounded items-center justify-center w-full md:lg:w-1/4 p-5 h-1/2 ${currentState.dispColor}`}>
          <Timer setTimerState={setTimerState} state={currentState}/>
        </div>
      </div>
    </div>
  )
}