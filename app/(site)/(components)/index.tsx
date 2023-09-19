import Image from "next/image"

import { Taviraj } from 'next/font/google';

const taviraj_title = Taviraj({ weight: "300", subsets: ["latin"]})

export default function Index(){
  return (
    <div style={taviraj_title.style}>
      <div className="absolute h-[140vh] w-full">
        <Image className="object-cover brightness-75" src={"/images/arch-1.jpg"} fill={true} alt='background image'/>
      </div>
      <div className="relative mt-[35vh] mb-[65vh] flex justify-center items-center">
        <div data-scroll data-scroll-speed="0.3" className="absolute w-[350px] h-[475px] opacity-90 brightness-75 bg-Eerie-black"></div>
        <div className="z-[3] relative text-white text-center uppercase">
          <h1 data-scroll data-scroll-speed="0.2" className="m-2 text-8xl">Data Consulting Services</h1>
          <div data-scroll data-scroll-speed="0.2" className="text-5xl mt-16">
            <h1 className="m-2">Reporting</h1>
            <h1 className="m-2">&</h1>
            <h1 className="m-2">Growth Analytics</h1>
          </div>
        </div>
      </div>
      
    </div>
  )
}