import Image from "next/image"
import { Taviraj } from 'next/font/google';
import { forwardRef } from "react";

const taviraj_title = Taviraj({ weight: "300", subsets: ["latin"]})

type IndexProps = {
  ref?:string
}

function Media(props: IndexProps){
  return (
    <div style={taviraj_title.style} className="h-full flex flex-col items-center justify-center min-h-screen">
      <div className="absolute h-full w-full">
        <Image className="object-cover brightness-75" src={"/images/arch-1.jpg"} fill={true} alt='background image'/>
      </div>
      <div className="relative bg-Eerie-black w-[70%] h-[50%] text-Magnolia flex flex-col justify-center items-center">
        <h2 className="text-center text-5xl">Media</h2>
        <div className="pt-6 text-center">       
        </div>
      </div>
    </div>
  )
}


// eslint-disable-next-line react/display-name
const ForwardedMedia = forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div ref={ref}>
    <Media {...props}/>
  </div>
));

export default ForwardedMedia;