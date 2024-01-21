import Timer from "@/components/timer"

export default function Pomodoro() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-orange-400">
      <Timer state='FOCUS'/>
    </div>
    
  )
}
