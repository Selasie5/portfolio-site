import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Bars } from "react-loader-spinner";
import Aos from "aos";
import { motion, useAnimation } from "framer-motion";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import quote from  "./assets/quote.png"
import send from "./assets/send.png"

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollDown, setScrollDown]= useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);
const handleSetScrollDown =()=>
{
  setScrollDown(true);
}
  useEffect(() => {
    // Initialize AOS
    Aos.init({
      duration: 1000, // Animation duration
      easing: "ease", // Easing function
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const bounceAnimation = {
    y: [0, -20, 0], // Bounce animation values
    transition: {
      duration: 0.92,
      repeat: Infinity, // Infinite animation
      repeatType: "mirror", // Bounce back and forth
    },
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.stop(); // Stop the animation when the mouse is hovered
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.start(bounceAnimation); // Start the animation again when the mouse leaves
  };

  return (
   
    <body className="bg-secondary scroll-smooth snap-mandatory snap-y">
      {isLoading ? (
        // Loading state
        <div className="flex justify-center items-center h-screen">
          <Bars color="#74f437" height={50} width={50} />
        </div>
      ) : (
        // Content loaded
        <>
         <main className="hero">
       
          <header className="">
            <Navbar />
          </header>

          <div className="h-3/4 flex flex-col justify-center items-center space-y-3">
            <motion.h1
              initial={{
                opacity: 0,
                x: -100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="text-primary text-6xl font-bold hero-header"
            >
              Selasie Sepenu
            </motion.h1>
            <motion.h2
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="text-white text-2xl uppercase font-bold"
            >
              Frontend Engineer
            </motion.h2>
          </div>

          {/* Scroll down indicator */}
          <motion.div
            animate={controls}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="bouncy-div flex flex-row justify-end items-end px-10 group"
          >
            <span className="flex flex-row justify-center items-center gap-3 text-white font-normal text-lg group-hover:underline group-hover:text-primary group-hover:cursor-pointer" onClick={handleSetScrollDown}>
              <a href="#about">
              <IoArrowDownCircleOutline className="text-5xl" />
              </a>
              </span>
             
          </motion.div>
          </main>
       
          {/* // About Section */}
        {
          scrollDown ? (
<section id="about" className="bg-background h-screen snap-start">
              <motion.img
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.3
              }} 
              src={quote} alt="" className="w-64 "/>
              <div className=" p-6 ">
              <motion.h3 
              initial={{
                x: -100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4
              }}
              className="text-primary text-xl">INTRODUCTION</motion.h3>
              <motion.h2
              initial={{
                x: -100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.8
              }}
               className="text-white text-4xl leading-normal font-bold w-3/4">Welcome to my portfolio! I'm a passionate frontend engineer, specializing in the MERN stack, Firebase, and AWS.</motion.h2>
              <button className="bg-primary w-48 h-12 rounded-full mt-3 border-none text-secondary font-bold flex">
                <a href="" className="flex flex-row justify-center py-3 items-center w-full">
                  Send Message
                  <img src={send} alt="" className="w-5 ml-2"/>
                </a>
              </button>
              </div>
             
        </section>
          ): 
          (
            <section></section>
          )
        }
      
        
      </>
        
        )}
    </body>
    
  );
};

export default App;
