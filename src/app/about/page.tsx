import Link from "next/link";
import { FaHouse } from "react-icons/fa6";

export default function AboutPage() {
  return (
    <div className="flex flex-col h-screen bg-stone-400">
      <Link href="/" className="text-5xl ml-5 p-5 text-slate-300 hover:text-slate-50"><FaHouse /></Link>
      <div className="mx-auto">
        <div className="text-5xl">This timer was developed as a personal project</div>
        <div className="flex flex-col text-4xl">
          <div className="">If you want to see other projects that I've worked on</div>
          <div className="">Visit my Github <Link className="hover:text-emerald-400" href="https://www.github.com/blakebt">here</Link></div>
        </div> 
      </div>
      
    </div>
    
  )
}