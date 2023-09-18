"use client"

import 'material-symbols';
import { Taviraj } from 'next/font/google';

const taviraj_logo = Taviraj({ weight: "300", subsets: ["latin"], style: "italic"})
const taviraj_title = Taviraj({ weight: "300", subsets: ["latin"]})
const taviraj_body = Taviraj({ weight: "400", subsets: ["latin"]})

export const TopComponent = () => {
  return (
    <section className='bg-Eerie-black bg-gradient-to-b from-Neon-blue to-Maya-blue flex flex-col justify-center max-h-screen min-w-screen'>
      <div style={taviraj_title.style} className='flex flex-col justify-start text-Magnolia items-center'>
        <div className='text-5xl text-center font-bold m-8 pb-8 border-b-2'>
          <p className=''>Data Consulting Services</p>
        </div>
        <div className='text-2xl text-center font-bold'>
        <p>Reporting</p>
        <p>&</p>
        <p>Growth Analytics</p>
        </div>
        <button className='bg-Eerie-black hover:bg-[#232b2b] p-4 font-bold mb-16 mt-12 place-self-center text-Magnolia text-md max-w-md'>Schedule Free Consultation</button>
      </div>
    </section>
  )
}