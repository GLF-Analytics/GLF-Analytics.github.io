import Image from "next/image";

import { Taviraj } from "next/font/google";
import { TypeAnimation } from "react-type-animation";
import { forwardRef } from "react";

const taviraj_title = Taviraj({ weight: "300", subsets: ["latin"] });

type IndexProps = {
  ref?: string;
};

function Title(props: IndexProps) {
  return (
    <div style={taviraj_title.style} className="flex h-[100vh] justify-center">
      <div className="absolute h-screen w-full">
        <Image
          className="object-cover brightness-75"
          src={"/images/bg-1.jpg"}
          fill={true}
          alt="background image"
        />
      </div>
      <div className="relative -mt-16 flex flex-col items-center justify-center">
        <div
          data-scroll
          data-scroll-speed="0.2"
          className="brightness-70 absolute min-w-[280px] w-[60vw] lg:w-full h-1/4 min-h-[250px] rounded-xl bg-Eerie-black opacity-90 xl:h-[475px]"
        ></div>
        <div className="relative z-[3] flex flex-col items-center justify-center xl:p-12 text-center uppercase text-Magnolia">
          <h1
            data-scroll
            data-scroll-speed="0.3"
            className="w-6/12 sm:w-full min-w-[220px] md:flex md:gap-2 lg:gap-3 max-w-[220px] md:max-w-full brightness-70 rounded-xl border xl:border-2 bg-Eerie-black text-3xl sm:p-4 lg:p-8 xl:p-12 lg:text-5xl"
          >
            <p>Data</p>
            <p>Consulting</p>
            <p>Services</p>
          </h1>
          <div
            data-scroll
            data-scroll-speed="0.4"
            className="mt-8 brightness-70 flex-col justify-center rounded-xl border xl:border-2 bg-Eerie-black text-lg lowercase xl:mt-16 p-2 xl:p-4 lg:text-4xl"
          >
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Growth Analytics",
                2000,
                "Reporting",
                2000,
                "Dashboard Creation",
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
