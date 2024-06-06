import React from 'react'
import {motion} from "framer-motion"
function Marquee() {
  return (
    <div className="w-full py-8 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">

        <div className="text border-t-2 border-b-2 gap-5 overflow-hidden border-zinc-800 flex whitespace-nowrap">
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className="text-[10vw] leading-none font-['Founders_Grotesk_X-Condensed'] font-bold uppercase pt-5 mb-[2vw]">We are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className="text-[10vw] leading-none font-['Founders_Grotesk_X-Condensed'] font-bold uppercase pt-5 mb-[2vw]">We are Ochi</motion.h1>
           
        </div>

    </div>
  )
}

export default Marquee