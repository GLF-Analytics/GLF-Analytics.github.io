"use client"

import { useEffect } from "react"
import Index from "./(components)"
import { NavBar } from "./(components)/Navbar"
import MainInfo from "./(components)/MainInfo"

export default function Home() {
  useEffect( () => {
    (
     async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll;
      }
    )()
  }, [])

  return (
    <main>
      <NavBar/>
      <Index/>
      <MainInfo/>
    </main>
  )
}
