import { useState } from "react"

import { Taviraj } from 'next/font/google';

const taviraj_title = Taviraj({ weight: "300", subsets: ["latin"]})

export default function MainInfo(){
  const [toggled, setToggled] = useState(false);
  
  return (
    <div className="bg-Magnolia h-screen top-[35vh] flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center">
        <div data-scroll data-scroll-speed="0.1" className="absolute w-[1400px] h-3/4 brightness-70 bg-Eerie-black"></div>
        <div data-scroll data-scroll-speed="0.2"  className=" relative text-Magnolia mb-[10vh] text-center uppercase" style={taviraj_title.style}>
          <h1 className="text-8xl mt-1">Data Consulting Services</h1>
          <h1 className="text-8xl mt-1">Data Consulting Services</h1>
          <h1 className="text-8xl mt-1">Data Consulting Services</h1>
          <h1 className="text-8xl mt-1">Data Consulting Services</h1>
        </div>
      </div>
    </div>
  )
}