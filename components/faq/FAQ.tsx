import { forwardRef } from 'react';
import { Taviraj } from 'next/font/google';
import { faq } from '@/components/faq/faqContent';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { type } from 'os';

const taviraj_title = Taviraj({ weight: '200', subsets: ['latin'] });

function FAQ() {
  const data: React.ReactNode[] = [];

  faq.forEach((ele, index) => {
    let answer = [];

    if (ele.a.length === 1) {
      answer.push(
        <div key={index} className="flex justify-start items-center mb-4 gap-4">
          <p className="">{ele.a[0]}</p>
        </div>
      );
    } else {
      for (let i = 0; i < ele.a.length; i++) {
        answer.push(
          <div
            key={index}
            className="flex justify-start items-center mb-4 gap-4"
          >
            <div className="">&bull;</div>
            <p className="">{ele.a[i]}</p>
          </div>
        );
      }
    }

    data.push(
      <AccordionItem value={`${index}`} key={index}>
        <AccordionTrigger className="text-2xl">{ele.q}</AccordionTrigger>
        <AccordionContent className="text-2xl">{answer}</AccordionContent>
      </AccordionItem>
    );
  });

  return (
    <div className="bg-black w-full flex flex-col justify-center min-h-screen">
      <div className="absolute min-h-screen brightness-75 w-full">
        <Image
          className="object-cover"
          src={'/images/bg-2.jpg'}
          fill={true}
          alt="background image"
        />
      </div>
      <div
        className="bg-Eerie-black max-w-[1200px] max-h-[90vh] rounded-xl z-[0] text-Magnolia p-8 w-[60%] self-center flex flex-col justify-center"
        style={taviraj_title.style}
      >
        <div className="h-full">
          <Accordion type="single" collapsible className="">
            <AccordionItem value="FAQ" className="text-center text-5xl pb-12">
              FAQ
            </AccordionItem>
            {data}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/display-name
const ForwardedFAQ = forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div ref={ref}>
    <FAQ {...props} />
  </div>
));

export default ForwardedFAQ;
