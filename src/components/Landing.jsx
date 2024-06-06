import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
        <div className="texstructure mt-52 px-20">
            {["We Create", "Eye Opening", "Presentations"].map((item,index) =>
        {
            return <div className="masker">
              <div className="w-fit flex items-center">
                {index===1 &&(<div className="w-[6vw] h-[4vw] relative rounded-md bg-red-700"></div>)}
            <h1 className="flex items-center uppercase text-[6vw] leading-[6vw] font-['Founders_Grotesk_X-Condensed'] font-bold">{item}</h1>
            </div>
        </div>

        } )}
            
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
            {["For Public and Private Companies", "From the first pitch to IPO"].map((item,index)=>
            <p className="text-md text white font-light tracking-tight leading-none">{item}</p>)}
            <div className="start flex items-center gap-5">
              <div className="px-4 py-2 border-[2px] border-zinc-500 rounded-full font-light text-sm capitalize">Start the Project</div>
              <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
                <span className="rotate-[45deg]">
                  <FaArrowUpLong/>
                </span>
               
                </div>            
            </div>
        </div>
    </div>
  )
}

export default Landing