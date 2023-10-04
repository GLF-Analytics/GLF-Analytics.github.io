"use client"

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


const taviraj_title = Taviraj({ weight: "300", subsets: ["latin"]})
const taviraj_logo = Taviraj({ weight: "300", subsets: ["latin"], style: "italic"})

export const NavBar = () => {
  return (
    <nav className='bg-Eerie-black brightness-70 sticky top-0 z-20 flex flex-col justify-center min-w-screen h-20'>
      <div className="bg-Eerie-black flex flex-col items-center text-Magnolia">
        <div className='flex justify-between w-11/12 max-w-9xl h-16'>
          <span style={taviraj_logo.style} className="place-self-center text-3xl whitespace-pre-line w-1/3">GLF Analytics</span>
          <div style={taviraj_logo.style} className='flex justify-centerw-1/3'>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
          </div>
          <div className='flex items-center justify-end w-1/3 gap-8'>
            <Button style={taviraj_logo.style} variant="ghost" className='text-lg'>Schedule Free Consultation</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}