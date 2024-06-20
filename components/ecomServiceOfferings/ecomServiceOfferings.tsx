import Image from "next/image";
import { Taviraj } from "next/font/google";
import { forwardRef } from "react";

const taviraj_title = Taviraj({ weight: "300", subsets: ["latin"] });

function EcomServiceOfferings() {
  return (
    <div
      style={taviraj_title.style}
      className="flex min-h-screen flex-col items-center justify-center xl:h-[140vh]"
    >
      <div className="absolute h-[140vh] w-full brightness-75 xl:h-[140vh]">
        <Image
          className="hidden object-cover sm:flex"
          src={"/images/bg-3.jpg"}
          fill={true}
          alt="background image"
        />
        <Image
          className="h-[140vh] object-cover sm:hidden"
          src={"/images/bg-3.jpg"}
          fill={false}
          width={2400}
          height={4800}
          alt="background image"
        />
      </div>
      <div className="relative h-[140vh] flex items-center justify-center">
        <div className="flex h-[40vh] flex-col items-center justify-center bg-Eerie-black text-Magnolia md:w-[100%] md:rounded-xl xl:min-h-[600px] xl:max-h-[800px] lg:max-w-[1600px]">
          <h2 className="mb-6 md:mb-16 text-center text-2xl sm:text-4xl xl:mt-12 xl:text-5xl">
            E-commerce Service Offerings
          </h2>
          <Image
          className="brightness-90 rounded-xl w-5/6 md:w-3/4"
          src={"/images/Services.png"}
          fill={false}
          width={600}
          height={1200}
          alt="background image"
        />
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/display-name
const ForwardedEcomServiceOfferings = forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div ref={ref}>
    <EcomServiceOfferings {...props} />
  </div>
));

export default ForwardedEcomServiceOfferings;
