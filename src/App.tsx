import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { CirclesWithBar} from "react-loader-spinner";
import Aos from "aos";
import { motion, useAnimation } from "framer-motion";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import quote from  "./assets/quote.png"
import send from "./assets/send.png"
import arrow from "./assets/arrow.png"
import profile from "./assets/profile-pic.png"

const App = () => {
  const skillLinks =[
    {
      id: 1,
      desc: "All",
    },
    
    {
      id: 2,
      desc: "Frontend",
    },
    {
      id: 3,
      desc: "Backend",
    },
    {
      id: 4,
      desc: "UI/UX",
    },


  ]
  const [isLoading, setIsLoading] = useState(true);
  const [scrollDown, setScrollDown]= useState(false);
  const [readMore, setReadMore]= useState(true)
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
          <CirclesWithBar color="#74f437" height={50} width={50} />
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
            <>
<section id="about" className="bg-background h-screen snap-start relative ">
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
              <div className="absolute top-96 right-32">
              <img src={arrow} alt="" className="w-48 px-6"/>
              </div>
              </div>
        </section>
        <section className="bg-background flex flex-row justify-center items-center px-12">
          <div className="w-1/2">
                <motion.img
                initial={{
                  opacity: 0,
                  x: -100
                }}
                animate={{
                  opacity: 1,
                  x:0
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.9 
                }}
                 src={profile} alt="" className="w-96"
                />
          </div>
          <div className="w-1/2 space-y-4">
            <h1 className="text-3xl font-bold text-primary">Dedicated, Enthusiastic , Problem-Solver</h1>
            <p className="text-white leading-normal font-light text-md">
            Hey there! I'm Selasie Sepenu, a dedicated and enthusiastic frontend engineer with a passion for crafting seamless and innovative digital experiences. My journey in the tech world began with a fascination for problem-solving and a commitment to turning ideas into reality through code.

As a practitioner of the MERN stack (MongoDB, Express.js, React.js, Node.js) and proficient in Firebase and AWS technologies, I thrive on the dynamic and ever-evolving nature of web development. My goal is not just to write code but to architect robust and scalable solutions that make a meaningful impact.

            </p>
            {
              !readMore ?
              (
                <p className="text-white leading-normal font-light text-md">
                  With a solid foundation in computer science, coupled with hands-on experience in building web applications, I constantly seek to push the boundaries of what's possible. Whether it's collaborating on team projects or taking the lead on individual endeavors, I relish the opportunity to tackle challenges head-on and learn something new in the process.

Beyond the lines of code, you'll find me exploring the latest tech trends, contributing to open-source projects, and always striving to stay at the forefront of emerging technologies. I believe in the power of continuous learning and the importance of a strong community, both of which are integral to my growth as a developer.

I'm excited about the potential of technology to transform industries and enhance user experiences. Let's connect and explore how my skills and passion can contribute to your next project or team!
                </p>
              ):
              <p></p>
            }
          {
            readMore ?(
              <button className="text-primary border  border-primary rounded-full w-40 h-12 hover:bg-primary hover:text-secondary hover:font-bold" onClick={()=> setReadMore(false)}>Read More</button>
            ):
            <button className="text-primary border  border-primary rounded-full w-40 h-12  hover:bg-primary hover:text-secondary hover:font-bold" onClick={()=> setReadMore(true)} >See Less</button>
          }
            </div>
        </section>
        <section className="bg-background px-12 space-y-10">
          <h1 className="font-bold text-3xl pt-60 text-white">My Tech Stack</h1>
          <div className="flex flex-row justify-center items-center gap-10 py-10">
            {
              skillLinks.map((skillLink)=>
              (
                <button className="text-primary border border-primary rounded-full w-36 h-12 hover:bg-primary hover:text-secondary hover:font-bold" key={skillLink.id}>{skillLink.desc}</button>
              ))
            }
          </div>
        </section>
        </>
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
