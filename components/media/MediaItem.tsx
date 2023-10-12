import Link from 'next/link';
import { MediaItem } from './MediaList';
import Image from 'next/image';

const MediaItem = (props: MediaItem) => {
  return (
    <div className="flex flex-col items-center justify-around ">
      <Link
        href={props.link}
        className="hover:brightness-75 flex flex-col justify-center items-center border-2 border-Eerie-black w-[85%] p-4 py-6 rounded-xl hover:border-Magnolia"
      >
        <Image
          className="z-40 max-w-3xl w-fit h-fit max-h-xl"
          alt={props.title}
          src={props.imagePath}
          width={500}
          height={500}
        />
        <p className="text-center text-2xl mt-8 w-2/3">{props.title}</p>
        <p className="text-center text-xl mt-4 w-2/3">{props.mediaType}</p>
      </Link>
    </div>
  );
};

export default MediaItem;
