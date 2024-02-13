import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Oval} from "react-loader-spinner";
import { FaHtml5,FaCss3Alt,FaReact,FaNodeJs, FaFigma  } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss,SiNextdotjs,SiFirebase, SiMongodb } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { motion, useAnimation } from "framer-motion";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import quote from  "./assets/quote.png"
import send from "./assets/send.png"
import arrow from "./assets/arrow.png"
import profile from "./assets/profile-pic.png"
import ContactForm from "./components/ContactForm";

const App = () => {
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
          <Oval color="#74f437" height={50} width={100} />
        </div>
      ) : (
        // Content loaded
        <>
         <main className="hero">
       
          <header className="">
            <Navbar />
          </header>

          <div className=" h-screen md:h-3/4 flex flex-col justify-center items-center space-y-3">
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
              className="text-primary text-center text-6xl font-bold hero-header"
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
               className="text-white text-3xl md:text-4xl leading-normal font-bold  w-full md:w-3/4">Welcome to my portfolio! I'm a passionate frontend engineer, specializing in the MERN stack, Firebase, and AWS.</motion.h2>
              <button className="bg-primary w-48 h-12 rounded-full mt-3 border-none text-secondary font-bold flex">
                <a href="" className="flex flex-row justify-center py-3 items-center w-full">
                  Send Message
                  <img src={send} alt="" className="w-5 ml-2"/>
                </a>
              </button>
              <div className="absolute bottom-0 right-0 md:top-96 md:right-32">
              <img src={arrow} alt="" className="w-48 px-6"/>
              </div>
              </div>
        </section>
        <section className="bg-background flex flex-col md:flex-row justify-center items-center px-5 md:px-12 pt-36 md:pt-0 ">
          <div className="md:w-1/2">
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
          <div className="md:w-1/2 space-y-4 md:pt-0 pt-10">
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
        <section className="bg-background px-5 md:px-12 space-y-10">
          <div className="space-y-5 pb-10">
          <h1 className="font-bold text-4xl pt-60 text-white text-center">My Tech Stack</h1>
          <hr className="bg-primary border-none  w-60 h-1 m-auto "/>
          <p className="text-white text-center md:w-3/4 m-auto">As a frontend engineer, I specialize in crafting robust and dynamic applications using cutting-edge technologies. Here's a glimpse of my preferred tech stack</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4  gap-20 md:gap-40">
            <FaHtml5 className="text-white text-6xl hover:text-primary hover:scale-105"/>
            <FaCss3Alt className="text-white text-6xl hover:text-primary hover:scale-105"/>
            <IoLogoJavascript className="text-white text-6xl hover:text-primary hover:scale-105"/>
            <SiTailwindcss className="text-white text-6xl hover:text-primary hover:scale-105"/>
            <FaReact className="text-white text-6xl hover:text-primary hover:scale-105"/>
            <TbBrandRedux   className="text-white text-6xl hover:text-primary hover:scale-105"/>
            <SiNextdotjs className="text-white text-6xl hover:text-primary hover:scale-105"/>
            <SiFirebase  className="text-white text-6xl hover:text-primary hover:scale-105"/>
            < SiMongodb className="text-white text-6xl hover:text-primary hover:scale-105"/>
            < FaNodeJs  className="text-white text-6xl hover:text-primary hover:scale-105"/>
            <  FaFigma className="text-white text-6xl hover:text-primary hover:scale-105"/>
            </div>
        </section>
        <section id="projects">

        </section>
        <section id="contact" className="bg-background pt-48 h-screen ">
          <ContactForm/>

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
