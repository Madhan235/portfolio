import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/developer.jpg";
import { motion } from "framer-motion";

const container = (delay)=>({
   hidden: {x: -100,opacity:0},
   visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay}
   }
})

export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
              className="pb-16 text-5xl tracking-tight lg:mt-16 lg:text-7xl  
            bg-gradient-to-r from-pink-300   to-purple-500 bg-clip-text text-transparent
            "
            >
              Hi, i'm Madhan R
            </motion.h1>

            <motion.span
               variants={container(.5)}
               initial="hidden"
               animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Mern Stack Developer
            </motion.span>
            <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6   
          "
            >
              {HERO_CONTENT}
              <span>, Click on <a href="https://docs.google.com/document/d/163wcwRhfb6bnLGk9rk6Dd2leSvcswdjzu6esDQF0c6A/edit?usp=sharing" target="_blank"   className="bg-gradient-to-r from-pink-300 to-purple-500 text-transparent bg-clip-text">Resume</a> to visit </span>
            </motion.p>
             
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
            initial={{x:100, opacity:0}}
            animate={{x:0 , opacity:1}}
            transition={{duration:1,delay:1.2}}

            className="rounded-[10%]" src={profilePic} alt="animate-pic" />
          </div>
        </div>
      </div>
    </div>
  );
}
