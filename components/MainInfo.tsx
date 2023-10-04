import { forwardRef } from "react"
import { Taviraj } from 'next/font/google';
import { faq } from "@/components/content/faq";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { type } from "os";

type MainInfoProps = {
  ref?:string
}

const taviraj_title = Taviraj({ weight: "400", subsets: ["latin"]})

function MainInfo( props:MainInfoProps ){
  const data: React.ReactNode[] = [];

  faq.forEach((ele,index) => {
    data.push(
      <AccordionItem value={`${index}`}>
        <AccordionTrigger>{ele.q}</AccordionTrigger>
        <AccordionContent className="text-2xl">{ele.a}</AccordionContent>
      </AccordionItem>
    )
  })
  
  return (
    <div ref={props.ref} className="bg-Magnolia w-full flex flex-col justify-center min-h-screen">
      <div className="absolute min-h-screen brightness-75 w-full">
        <Image className="object-cover" src={"/images/bg-4.jpg"} fill={true} alt='background image'/>
      </div>
      <div className="bg-Eerie-black opacity-90 h-[75vh] rounded-md z-[0] text-Magnolia p-8 w-[85%] self-center flex flex-col justify-center" style={taviraj_title.style}>
      <div className="text-3xl">
        <Accordion type="single" collapsible className="bg-green">
          {data}
        </Accordion>
      </div>
      </div>
    </div>
  )
}

// eslint-disable-next-line react/display-name
const ForwardedMainInfo = forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div ref={ref}>
    <MainInfo {...props}/>
  </div>
));

export default ForwardedMainInfo;