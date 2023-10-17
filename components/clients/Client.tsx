import Image from 'next/image';
import Link from 'next/link';
import { ClientProps } from './clientList';

const Client = (props: ClientProps) => {
  return (
    <Link href={props.link} className="hover:brightness-75 mt-8 flex flex-col justify-between items-center">
      <div className='h-[50px] w-[75px] sm:h-[100px] sm:w-[150px] lg:h-[200px] lg:w-[300px] flex flex-col justify-end items-center'>
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
