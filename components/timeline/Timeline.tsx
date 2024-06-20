import Image from "next/image";
import { Taviraj } from "next/font/google";
import { forwardRef } from "react";

const taviraj_title = Taviraj({ weight: "300", subsets: ["latin"] });

function Timeline() {
  return (
    <div
      style={taviraj_title.style}
      className="flex flex-col items-center justify-center md:h-[122vh]"
    >
        <Image
          className="absolute object-cover w-full sm:h-full md:h-[122vh] brightness-75"
          src={"/images/bg-1.jpg"}
          fill={false}
          width={1200}
          height={1800}
          alt="background image"
        />
        <Image
          className="brightness-90 sm:rounded-xl"
          src={"/images/GLFTimeline-v2.png"}
          fill={false}
          width={600}
          height={1300}
          alt="GLF Timeline"
        />
    </div>
  );
}

// eslint-disable-next-line react/display-name
const ForwardedTimeline = forwardRef<HTMLDivElement, {}>(
  (props, ref) => (
    <div ref={ref}>
      <Timeline {...props} />
    </div>
  ),
);

export default ForwardedTimeline;
