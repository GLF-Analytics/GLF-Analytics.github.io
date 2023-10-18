import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "./faqContent";
import { Taviraj } from "next/font/google";

const taviraj_title = Taviraj({ weight: "200", subsets: ["latin"] });

const FAQAccordion = () => {
  const data: React.ReactNode[] = [];

  faq.forEach((ele, index) => {
    let answer = [];

    if (ele.a.length === 1) {
      answer.push(
        <div key={index} className="flex items-center text-center sm:text-left justify-start xl:mb-4">
          {ele.a[0]}
        </div>,
      );
    } else {
      for (let i = 0; i < ele.a.length; i++) {
        answer.push(
          <div
            key={index}
            className="mb-1 flex items-center justify-start xl:mb-4"
          >
            <p className="">&bull; {ele.a[i]}</p>
          </div>,
        );
      }
    }

    data.push(
      <AccordionItem className="" value={`${index}`} key={index}>
        <AccordionTrigger className="flex justify-center text-center text-[20px] sm:justify-between sm:text-left xl:text-2xl">
          {ele.q}
        </AccordionTrigger>
        <AccordionContent className="text-left text-[17px] xl:text-2xl">
          {answer}
        </AccordionContent>
      </AccordionItem>,
    );
  });

  return (
    <div
      className="z-[0] flex max-w-[700px] xl:w-3/4 xl:max-w-[1200px] flex-col items-center justify-center bg-Eerie-black py-8 text-Magnolia sm:rounded-xl xl:max-h-[90vh]"
      style={taviraj_title.style}
    >
      <Accordion type="single" collapsible className="w-11/12 bg-Eerie-black">
        <AccordionItem
          value="FAQ"
          className="text-center text-3xl pb-6 xl:text-5xl"
        >
          FAQ
        </AccordionItem>
        {data}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
