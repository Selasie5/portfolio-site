import logo from "../assets/logo.png"
import {motion} from "framer-motion"
 const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center p-10 h-20">
        <motion.div 
        initial={{
          x: -100,
          opacity: 0
        }}
        animate={{
          x: 0,
          opacity: 1
        }}
        transition={{duration : 0.6,
        delay: 0.5}}
        >
            <img src={logo} alt="logo" className="mt-14 w-20"/>
        </motion.div>
        <motion.div 
         initial={{
          opacity: 0,
         }}
         animate={{
          opacity: 1
         }}
         transition={{duration : 0.7,
          delay: 0.9}}
        className="flex flex-row justify-center items-center gap-x-20 ">
            <a href="#" className="text-white uppercase font-normal leading-normal text-lg hover:text-primary hover:font-bold ">About</a>
            <a href="#" className="text-white uppercase font-normal leading-normal text-lg hover:text-primary hover:font-bold ">Portfolio</a>
            <a href="#" className="text-white uppercase font-normal leading-normal text-lg hover:text-primary hover:font-bold ">Resume</a>
            <a href="#" className="text-white uppercase font-normal leading-normal text-lg hover:text-primary hover:font-bold ">About</a>
        </motion.div>
    </nav>
  )
}

export default Navbar