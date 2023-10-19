import Image from "next/image";
import Link from "next/link";
import { ClientProps } from "./clientList";

const Client = (props: ClientProps) => {
  return (
    <Link
      href={props.link}
      className="mt-8 flex flex-col items-center justify-between hover:brightness-75"
    >
      <div className="flex h-[50px] w-[75px] flex-col items-center justify-end sm:h-[100px] sm:w-[150px] lg:h-[180px] lg:w-[270px]">
        <Image
          src={props.src}
          alt="image 1"
          className="flex items-center justify-center rounded-xl"
          width={300}
          height={200}
        />
      </div>
    </Link>
  );
};

export default Client;
