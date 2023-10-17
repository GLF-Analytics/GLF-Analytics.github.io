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
        <div key={index} className="xl:mb-4 flex items-center justify-start">
          {ele.a[0]}
        </div>,
      );
    } else {
      for (let i = 0; i < ele.a.length; i++) {
        answer.push(
          <div
            key={index}
            className="mb-1 xl:mb-4 flex items-center justify-start"
          >
            <p className="">&bull; {ele.a[i]}</p>
          </div>,
        );
      }
    }

    data.push(
      <AccordionItem className="" value={`${index}`} key={index}>
        <AccordionTrigger className="text-[20px] xl:text-2xl text-center flex justify-center sm:justify-between sm:text-left">{ele.q}</AccordionTrigger>
        <AccordionContent className="text-[17px] xl:text-2xl text-left">{answer}</AccordionContent>
      </AccordionItem>,
    );
  });

  return (
    <div
      className="z-[0] flex xl:max-h-[90vh] max-w-[700px] flex-col justify-center items-center sm:rounded-xl bg-Eerie-black py-8 text-Magnolia"
      style={taviraj_title.style}
    >
      <Accordion type="single" collapsible className="w-11/12 bg-Eerie-black">
        <AccordionItem value="FAQ" className="text-center text-3xl pb-2 xl:pb-6 xl:text-5xl">
          FAQ
        </AccordionItem>
        {data}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
