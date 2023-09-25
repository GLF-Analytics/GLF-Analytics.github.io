import { useState } from "react"
import { Taviraj } from 'next/font/google';
import { faq } from "./(content)/faq";
import Image from "next/image"

const taviraj_title = Taviraj({ weight: "400", subsets: ["latin"]})
const taviraj_content = Taviraj({ weight: "200", subsets: ["latin"]})

export default function MainInfo(){
  const data: React.ReactNode[] = [];

  faq.forEach((ele,index) => {
    let answer = [<li className="p-4" key={ele.id}>- {ele.a[0]}</li>];
    if (ele.a.length > 1){
      for (let i = 1; i < ele.a.length; i++){
        answer.push(
          <li className="p-4" key={ele.id}>- {ele.a[i]}</li>
        )
      }
    }
    data.push(
      <div className="pt-8 pl-12 pr-12 pb-4">
        <h3 className="text-4xl text-center pb-4">{ele.q}</h3>
        <ul className="text-2xl text-left" style={taviraj_content.style}>
          {answer}
        </ul>
      </div>
    )
  })
  
  return (
    <div className="bg-Magnolia w-full flex flex-col justify-center min-h-screen">
      <div className="absolute min-h-screen brightness-75 w-full">
        <Image className="object-cover" src={"/images/bg-4.jpg"} fill={true} alt='background image'/>
      </div>
      <div className="bg-Eerie-black rounded-md z-[3] bg-opacity-95 text-Magnolia p-8 w-[85%] self-center" style={taviraj_title.style}>
        <div data-scroll data-scroll-speed="0.1"  className="border-2 p-8 rounded-md max-h-screen">
          {data}
        </div>
      </div>
      {/* <div className="z-[1] absolute opacity-90 w-[1400px] rounded-md h-3/4 brightness-70 self-center bg-Eerie-black"></div> */}
    </div>
  )
}