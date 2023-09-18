"use client"

import 'material-symbols';
import { Taviraj } from 'next/font/google';

const taviraj_logo = Taviraj({ weight: "300", subsets: ["latin"], style: "italic"})

export const NavBar = () => {
  return (
    <nav className='bg-Eerie-black sticky top-0 bg-gradient-to-b from-Neon-blue to-Maya-blue flex flex-col justify-center max-h-screen min-w-screen'>
      <div className="bg-Eerie-black flex flex-col items-center text-Magnolia">
        <div className='flex justify-around w-8/12 h-12'>
          <span style={taviraj_logo.style} className="place-self-center text-2xl min-w-full">GLF Analytics</span>
          <button className="material-symbols-outlined scale-150">menu</button>
        </div>
      </div>
    </nav>
  )
}