"use client"

import 'material-symbols';
import { Taviraj } from 'next/font/google';

const taviraj_title = Taviraj({ weight: "300", subsets: ["latin"]})
const taviraj_logo = Taviraj({ weight: "300", subsets: ["latin"], style: "italic"})

export const NavBar = () => {
  return (
    <nav className='bg-Eerie-black brightness-75 sticky top-0 z-20 flex flex-col justify-center max-h-screen min-w-screen'>
      <div className="bg-Eerie-black flex flex-col items-center text-Magnolia">
        <div className='flex justify-between w-11/12 max-w-9xl h-16'>
          <span style={taviraj_logo.style} className="place-self-center text-2xl whitespace-pre-line">GLF Analytics</span>
          <div className='flex justify-between items-center'>
            <button style={taviraj_title.style} className='k z-10 hover:bg-[#232b2b] mr-8 rounded-sm p-1 h-1/2 font-bold text-Magnolia text-lg '>Schedule Free Consultation</button>
            <button className="material-symbols-outlined scale-150">menu</button>
          </div>
        </div>
      </div>
    </nav>
  )
}