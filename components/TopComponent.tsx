"use client"

import 'material-symbols';
import { Taviraj } from 'next/font/google';
// import { TopImages } from './TopImages';

const taviraj_title = Taviraj({ weight: "300", subsets: ["latin"]})

export const TopComponent = () => {
  return (
    <div className='flex flex-col justify-center'>
      {/* <TopImages/> */}
      <div style={taviraj_title.style} className='max-h-screen h-screen min-w-screen flex flex-col bg-Magnolia justify-center text-Magnolia items-center'>
        <div className='z-20'>
          <p className='text-5xl text-center font-bold m-12'>Data Consulting Services</p>
        </div>
        {/* <div className='text-xl text-center font-bold mt-8 mb-4 p-2 z-20'>
          <p>Reporting</p>
          <p>&</p>
          <p>Growth Analytics</p>
        </div> */}
      </div>
        <button className='bg-Eerie-black z-20 hover:bg-[#232b2b] p-4 font-bold mb-16 mt-24 place-self-center text-Magnolia text-md max-w-md'>Schedule Free Consultation</button>
    </div>
  )
}