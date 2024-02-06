import logo from "../assets/logo.png"
import {motion} from "framer-motion"
 const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center p-10 h-20">
        <div>
            <img src={logo} alt="logo" className="mt-14 w-20"/>
        </div>
        <div className="flex flex-row justify-center items-center gap-x-20 ">
            <a href="#" className="text-white uppercase text-lg hover:text-primary hover:font-bold ">About</a>
            <a href="#" className="text-white uppercase text-lg hover:text-primary hover:font-bold ">Portfolio</a>
            <a href="#" className="text-white uppercase text-lg hover:text-primary hover:font-bold ">Resume</a>
            <a href="#" className="text-white uppercase text-lg hover:text-primary hover:font-bold ">About</a>
        </div>
    </nav>
  )
}

export default Navbar