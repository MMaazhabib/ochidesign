import React from 'react'

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
        <h1 className="font-['Neue_Montreal'] text-zinc-800 text-[4vw] leading-[4.5vw] tracking-tight">Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className="w-full border-t-[2px] border-[#1c1f12] mt-20 pt-20 flex gap-5">
            <div className="w-1/2">
                <h1 className="text-7xl text-zinc-900">Our Approach</h1>
                <button className=" uppercase flex gap-7 px-10 items-center py-6 bg-zinc-900 rounded-full mt-10 text-white">Read More
                    <div className="rounded-full bg-zinc-100 h-2 w-2"></div>
                </button>
            </div>
            <div className=" flex items-center  w-1/2 h-[70vh] bg-red-950 rounded-3xl">
                <img className="object-fill w-full h-[70vh] rounded-3xl" src="img/ab.jpg" alt="image here" />
            </div>
        </div>
    </div>
  )
}

export default About