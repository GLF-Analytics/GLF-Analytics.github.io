import Image from 'next/image';
import Link from 'next/link';
import { ClientProps } from './clientList';

const Client = (props: ClientProps) => {
  return (
    <Link href={props.link} className=" mt-8 flex flex-col justify-between items-center">
      <div className='h-[175px] w-[175px] flex flex-col justify-end items-center'>
        <Image
          src={props.src}
          alt="image 1"
          className="flex items-center justify-center rounded-xl"
          width={150}
          height={100}
          />
      </div>
      <p
        className="mt-12 w-full"
      >
        {props.clientName}
      </p>
    </Link>
  );
};

export default Client;
