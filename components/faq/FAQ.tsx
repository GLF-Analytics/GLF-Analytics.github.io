import { forwardRef } from "react";

import Image from "next/image";
import FAQAccordion from "./FAQAccordion";



function FAQ() {
  return (
    <div className="flex min-h-screen w-full flex-col justify-center xl:h-[130vh] items-center">
      <div className="absolute min-h-screen w-full brightness-75 xl:h-[130vh]">
        <Image
          className="object-cover hidden sm:flex"
          src={"/images/bg-4.jpg"}
          fill={true}
          alt="background image"
        />
        <Image
          className="object-cover sm:hidden h-screen"
          src={"/images/bg-4.jpg"}
          fill={false}
          width={800}
          height={1600}
          alt="background image"
        />
      </div>
      <FAQAccordion />
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
