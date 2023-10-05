import { forwardRef } from "react";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

type ClientsProps = {
  ref:string
}

const Clients = (props: ClientsProps) => {
  return (
  <div className="h-[10vh] w-full  bg-Eerie-black text-white">
    <Carousel
      navigation={() => (<div></div>)}
      loop={true} 
      autoplay={true} 
      className="rounded-xl"
      transition={{ duration: 5, type:"spring" }}
      prevArrow={() => <div></div>}
      nextArrow={() => <div></div>}
    > 
      <div className="flex justify-around items-center h-full gap-8">
        <Image
          src="/images/clients/Dove.png"
          alt="image 1"
          className="h-[100px] w-[150px] flex items-center justify-center rounded-xl"
          width={500}
          height={100}
        />    
        <Image
          src="/images/clients/UCAN.png"
          alt="image 1"
          className="h-[100px] w-[200px] flex items-center justify-center rounded-xl"
          width={500}
          height={100}
        />   
        <Image
          src="/images/clients/KoH.png"
          alt="image 1"
          className="h-[100px] w-[150px] flex items-center justify-center rounded-xl"
          width={500}
          height={100}
          />    
        </div>
      <div className="flex justify-around items-center h-full gap-8">
        <Image
          src="/images/clients/Indie+Consulting.png"
          alt="image 1"
          className="h-[150px] w-[150px] flex items-center justify-center rounded-xl"
          width={500}
          height={100}
        />
        <Image
          src="/images/clients/YS.png"
          alt="image 1"
          className="h-[50px] w-[200px] flex items-center justify-center rounded-xl"
          width={500}
          height={100}
        />        
        <Image
          src="/images/clients/UL.png"
          alt="image 1"
          className="h-[150px] w-[150px] flex items-center justify-center rounded-xl"
          width={500}
          height={100}
        />    

      </div>

    </Carousel>
  </div>
  )
}

// eslint-disable-next-line react/display-name
const ForwardedClients = forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div ref={ref}>
    <Clients {...props}/>
  </div>
));

export default ForwardedClients;