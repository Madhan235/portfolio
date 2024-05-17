import { FaLinkedin, FaGithub } from "react-icons/fa6";
import guvi from '../assets/guvilogo.png'
 
export default function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <p
          className="text-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white font-semibold rounded-md p-1
        "
        >
          Madhan (mern)
        </p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">

      <FaLinkedin />
      <FaGithub />
      <a href="https://www.guvi.in/code-kata/" target="_blank" >
      <img src={guvi} alt="guvilogo" className="h-8 w-8"/>
      </a>
      </div>
    </nav>
  );
}
