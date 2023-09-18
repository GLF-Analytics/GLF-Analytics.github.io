"use client"

import 'material-symbols';

export const TopComponent = () => {
  return (
    <section className='bg-Midnight-green flex flex-col justify-center h-screen min-w-screen'>
      <div className="bg-Midnight-green font-semibold flex flex-col items-center text-white">
        <div className='flex justify-around w-10/12 h-24'>
          <span className="place-self-center text-4xl min-w-full">GLF Analytics</span>
          <button className="material-symbols-outlined scale-150 mt-4">menu</button>
        </div>
      </div>
      <div className='flex flex-col justify-around text-white items-center bg-Midnight-green h-[50rem]'>
        <div className='text-6xl font-bold text-center m-12 mt-6 border-8 p-12 rounded-3xl bg-Caribbean-Current'>Data Consulting Services</div>
        <div className='flex flex-col text-4xl mb-12 font-bold text-center border-4 w-96 p-12 rounded-3xl bg-Caribbean-Current'>
          <span>reporting</span>
          <span>&</span>
          <span>growth</span>
          <span>analytics</span>
        </div>
      </div>
      <button className='bg-Selective-yellow col-span-1 p-4 font-semibold border-4 m-24 mt-12 place-self-center text-white text-2xl max-w-md'>Schedule Free Consultation</button>
    </section>
  )
}