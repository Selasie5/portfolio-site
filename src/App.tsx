import Navbar from "./components/Navbar"
import { useEffect, useState } from "react"
import Aos from "aos";
import { motion, useAnimation} from "framer-motion";
import { IoArrowDownCircleOutline } from "react-icons/io5";

const App = () => {
  useEffect(() => {
    // Initialize AOS
    Aos.init({
      duration: 1000, // Animation duration
      easing: 'ease', // Easing function
      once: true, // Whether animation should happen only once
      mirror: false // Whether elements should animate out while scrolling past them
    });
  }, []);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const bounceAnimation = {
    y: [0, -20, 0], // Bounce animation values
    transition: {
      duration: 0.92,
      repeat: Infinity, // Infinite animation
      repeatType: 'mirror', // Bounce back and forth
    },
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.stop(); // Stop the animation when mouse is hovered
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.start(bounceAnimation); // Start the animation again when mouse leaves
  };
  return (
    <body className="hero">
    <header className="">
      <Navbar/>
    </header>
    <div
    className="h-3/4 flex flex-col justify-center items-center space-y-3 " >
    <motion.h1 
     initial={{
      opacity: 0,
      left: -100,
      scale: 0.5
     }}
     animate={{
      opacity: 1,
      left: 0,
      scale: 1
     }}
     transition={{ duration: 0.9}}
      className="text-primary  text-6xl font-bold hero-header">Selasie Sepenu</motion.h1>
    <h2 className="text-white text-2xl uppercase font-bold">frontend engineer</h2>
    </div>
    <motion.div 
    animate={controls}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className=" bouncy-div flex flex-row justify-end items-end px-10 group">
      <span className=" flex flex-row justify-center items-center gap-3 text-white font-normal text-lg group-hover:underline group-hover:text-primary">
        <IoArrowDownCircleOutline className="text-3xl"/>
        Scroll Down
        </span>
    </motion.div>
    </body>
    
  )
}

export default App