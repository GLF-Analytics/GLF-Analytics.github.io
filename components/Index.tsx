import Image from "next/image"

import { Taviraj } from 'next/font/google';
import { TypeAnimation } from "react-type-animation";
import { forwardRef } from "react";

const taviraj_title = Taviraj({ weight: "300", subsets: ["latin"]})

type IndexProps = {
  ref?:string
}

function Index(props: IndexProps){
  return (
    <div style={taviraj_title.style} className="h-screen flex justify-center min-h-screen">
      <div className="absolute h-full w-full">
        <Image className="object-cover brightness-75" src={"/images/arch-1.jpg"} fill={true} alt='background image'/>
      </div>
      <div className="relative flex flex-col justify-center items-center -mt-24">
        <div data-scroll data-scroll-speed="0.2" className="absolute w-[1400px] rounded-md h-[475px] opacity-90 brightness-70 bg-Eerie-black"></div>
        <div className="z-[3] relative text-Magnolia text-center uppercase flex flex-col items-center justify-center">
          <h1 data-scroll data-scroll-speed="0.3" className="text-[5rem] border-2 rounded-md brightness-70 bg-Eerie-black p-12">Data Consulting Services</h1>
          <div data-scroll data-scroll-speed="0.4" className="text-4xl mt-16 border-2 rounded-md brightness-70 bg-Eerie-black flex-col justify-center p-4 lowercase">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Growth Analytics',
                2000,
                'Reporting',
                2000,
                'Dashboard Creation',
                2000,
                'Data Warehousing',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              preRenderFirstString={true}
              cursor={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}


// eslint-disable-next-line react/display-name
const ForwardedIndex = forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div ref={ref}>
    <Index {...props}/>
  </div>
));

export default ForwardedIndex;