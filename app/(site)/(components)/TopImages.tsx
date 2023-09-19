import Image from 'next/image';


export const TopImages = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex justify-center items-center w-2/12'>
        <Image src={'/images/bg.jpg'} className="absolute w-fit h-full top-0 brightness-50" width={222} height={277} alt=""/>
      </div>
      <div className='flex flex-col justify-center items-center'>
        {/* <Image src={'/images/bg-2.jpg'} className="top-72 w-48 h-48 2xl:top-64 brightness-75 absolute" width={520} height={781} alt=""/> */}
        <div className='bg-Eerie-black w-72 h-48 top-2/4 opacity-60 absolute '></div>
      </div>
    </div>
  )
}