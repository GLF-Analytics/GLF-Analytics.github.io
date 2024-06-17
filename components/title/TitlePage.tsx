import Image from "next/image";

import { Taviraj } from "next/font/google";
import { TypeAnimation } from "react-type-animation";
import { forwardRef } from "react";

const taviraj_title = Taviraj({ weight: "300", subsets: ["latin"] });

type IndexProps = {
  ref?: string;
};

function Title() {
  return (
    <div
      style={taviraj_title.style}
      className="flex h-[100vh] justify-center"
    >
      <div className="absolute h-screen w-full xl:h-[105vh]">
        <Image
          className="object-cover brightness-75"
          src={"/images/bg-1.jpg"}
          fill={true}
          alt="background image"
          priority={true}
        />
      </div>
      <div className="relative -mt-16 flex flex-col items-center justify-center">
        <div className="brightness-70 absolute h-1/4 min-h-[250px] min-w-[280px] rounded-xl bg-Eerie-black opacity-90 sm:w-[75vw] sm:max-w-[400px] md:w-[75vw] md:min-w-[600px] md:max-w-[650px] lg:h-1/3 lg:w-[90vw] lg:max-w-[800px] xl:max-h-[475px] xl:min-h-[400px] xl:w-[60vw] xl:min-w-[1000px] xl:max-w-[1000px]"></div>
        <div className="relative z-[3] flex flex-col items-center justify-center text-center uppercase text-Magnolia xl:p-12">
          <h1 className="brightness-70 w-6/12 p-2 min-w-[230px] rounded-xl border bg-Eerie-black text-2xl sm:text-3xl sm:min-w-[300px] sm:w-full sm:p-4 md:flex md:max-w-full md:gap-2 lg:gap-3 lg:p-8 lg:text-4xl xl:text-5xl xl:border-2 xl:p-10">
            <p>E-Commerce</p>
            <p>Consulting</p>
            <p>Services</p>
          </h1>
          <div className="brightness-70 mt-8 flex-col justify-center rounded-xl border bg-Eerie-black p-2 text-lg lowercase lg:text-4xl xl:mt-16 xl:border-2 xl:p-4">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web Development",
                2000,
                "Shopify Management",
                2000,
                "Analytics Support",
                2000,
                "Reporting",
                2000,
                "Digital Strategy",
                2000,
                "Data Warehousing",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              preRenderFirstString={true}
              cursor={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/display-name
const ForwardedTitle = forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div ref={ref}>
    <Title {...props} />
  </div>
));

export default ForwardedTitle;
