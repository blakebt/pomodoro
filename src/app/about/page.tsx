import Link from "next/link";
import { redirect } from "next/navigation";
import { FaHouse } from "react-icons/fa6";

export default function AboutPage() {

  const githubLink = "https://www.github.com/blakebt";

  return (
    <div className="flex flex-col h-screen bg-stone-400">
      <Link href="/" className="text-5xl ml-5 p-5 text-slate-300 hover:text-slate-50"><FaHouse /></Link>
      <div className="mx-auto">
        <div className="flex flex-col items-center text-4xl">
          <div className="text-5xl">This pomodoro timer was developed as a personal project</div>
          <div className="my-5">It is currently coded to have three set times, but there is room in the design for scalability</div>
          <button className="rounded px-4 py-3 w-2/5 my-5 bg-orange-400 hover:bg-orange-300"><Link href={githubLink}>Visit my Github</Link></button>
        </div>
      </div>

    </div>

  )
}