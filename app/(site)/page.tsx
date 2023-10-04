"use client"

import { useEffect, useRef } from "react"
import ForwardedIndex  from "@/components/Index"
import { NavBar } from "@/components/Navbar"
import MainInfo from "@/components/MainInfo"
import { Taviraj } from 'next/font/google';
import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"


const taviraj_logo = Taviraj({ weight: "300", subsets: ["latin"], style: "italic"})

export default function Home() {
  const top = useRef<HTMLDivElement>(null);
  const mainInfo = useRef<HTMLDivElement>(null);

  useEffect( () => {
    (
     async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll;
      }
    )()
  }, [])

  const scrollToComponent = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth'})
    }
  }

  return (
    <main data-scroll-container>
      <nav className='bg-Eerie-black brightness-70 sticky top-0 z-20 flex flex-col justify-center min-w-screen h-20'>
        <div className="bg-Eerie-black flex flex-col items-center text-Magnolia">
          <div className='flex justify-between w-11/12 max-w-9xl h-16'>
            <span style={taviraj_logo.style} className="place-self-center text-3xl whitespace-pre-line w-1/3">GLF Analytics</span>
            <div style={taviraj_logo.style} className='flex justify-center gap-4 items-center text-center w-1/3'>
                <Button style={taviraj_logo.style} onClick={() => scrollToComponent(top)} variant="ghost" className="text-lg">Home</Button>
                <Button style={taviraj_logo.style} onClick={() => scrollToComponent(mainInfo)} variant="ghost" className="text-lg">FAQ</Button>
            </div>
            <div className='flex items-center justify-end w-1/3 gap-8'>
              <Button style={taviraj_logo.style} variant="ghost" className='text-lg'>Schedule Free Consultation</Button>
            </div>
          </div>
        </div>
      </nav>
      <ForwardedIndex ref={top}/>
      <MainInfo ref={mainInfo}/>
    </main>
  )
}
