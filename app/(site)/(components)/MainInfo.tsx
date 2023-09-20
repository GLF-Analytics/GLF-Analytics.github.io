import { useState } from "react"

export default function MainInfo(){
  const [toggled, setToggled] = useState(false);
  
  return (
    <div className="bg-Magnolia brightness-75 relative h-screen">
      <div className="relative mt-[35vh] mb-[65vh] flex justify-center items-center">
        {/* <div data-scroll data-scroll-speed="0.4" className="absolute w-[1400px] h-[475px] opacity-90 brightness-75 bg-Eerie-black"></div> */}
        <div className="z-[3] relative text-Eerie-black text-center uppercase">
          <h1 data-scroll data-scroll-speed="0.4" className="m-2 text-8xl">Data Consulting Services</h1>
        </div>
      </div>
    </div>
  )
}