import { forwardRef } from "react";

import Image from "next/image";
import FAQAccordion from "./FAQAccordion";



function FAQ() {
  return (
    <div className="flex min-h-screen w-full flex-col justify-center items-center bg-black">
      <div className="absolute min-h-screen w-full brightness-75">
        <Image
          className="object-cover"
          src={"/images/bg-4.jpg"}
          fill={true}
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
