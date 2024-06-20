import Image from "next/image";
import { Taviraj } from "next/font/google";
import { forwardRef } from "react";
import CustomTable from "./CustomTable";

const taviraj_title = Taviraj({ weight: "300", subsets: ["latin"] });

type IndexProps = {
  ref?: string;
};

function CustomDataSolutions(props: IndexProps) {
  return (
    <div
      style={taviraj_title.style}
      className="flex h-[160vh] min-h-screen flex-col items-center justify-center"
    >
      <div className="absolute h-[160vh] w-full">
        <Image
          className="hidden object-cover brightness-75 sm:flex"
          src={"/images/bg-3.jpg"}
          fill={true}
          alt="background image"
        />
        <Image
          className="h-[160vh] object-cover brightness-75 sm:hidden sm:h-screen"
          src={"/images/bg-3.jpg"}
          fill={false}
          width={1600}
          height={3200}
          alt="background image"
        />
      </div>
      <CustomTable />
    </div>
  );
}

// eslint-disable-next-line react/display-name
const ForwardedCustomDataSolutions = forwardRef<HTMLDivElement, {}>(
  (props, ref) => (
    <div ref={ref}>
      <CustomDataSolutions {...props} />
    </div>
  ),
);

export default ForwardedCustomDataSolutions;
