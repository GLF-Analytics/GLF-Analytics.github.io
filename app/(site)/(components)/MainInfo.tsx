import { useState } from "react"
import { Taviraj } from 'next/font/google';
import { faq } from "./(content)/faq";
import { JsxElement } from "typescript";

const taviraj_title = Taviraj({ weight: "300", subsets: ["latin"]})

export default function MainInfo(){
  const data: React.ReactNode[] = []

  faq.forEach(ele => {
    let answer = [<li className="m-4" key={ele.id}>- {ele.a[0]}</li>];
    if (ele.a.length > 1){
      for (let i = 1; i < ele.a.length; i++){
        answer.push(
          <li className="m-4" key={ele.id}>- {ele.a[i]}</li>
        )
      }
    }
    data.push(
      <div className="mt-8 mb-8">
        <h3 className="text-4xl mt-4 mb-4">{ele.q}</h3>
        <ul className="mt-4 mb-4 text-xl text-left">
          {answer}
        </ul>
      </div>
    )
  })
  
  return (
    <div className="bg-Magnolia h-screen flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center">
        <div data-scroll data-scroll-speed="0.1" className="absolute w-11/12 h-5/6 brightness-70 bg-Eerie-black"></div>
        <div data-scroll data-scroll-speed="0.2"  className=" text-Magnolia w-3/4" style={taviraj_title.style}>
          {data}
        </div>
      </div>
    </div>
  )
}