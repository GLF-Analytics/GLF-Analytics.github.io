import Link from "next/link";
import { MediaItem } from "./MediaList";
import Image from "next/image";

const MediaItem = (props: MediaItem) => {
  return (
    <div className="flex flex-col items-center justify-around">
      <Link
        href={props.link}
        className="hover:brightness-75] flex w-[85%] flex-col items-center justify-center rounded-xl border-2 border-Eerie-black p-4 py-6 hover:border-Magnolia"
      >
        <Image
          className="sm:max-h-xl z-40 max-h-[150px] w-[50%] max-w-3xl sm:h-[60%] sm:max-h-[200px] sm:w-[80%] xl:h-fit xl:max-h-[300px]"
          alt={props.title}
          src={props.imagePath}
          width={500}
          height={500}
        />
        <p className="mt-8 text-center text-x w-[55%] sm:w-2/3 xl:w-2/3 xl:text-2xl">
          {props.title}
        </p>
        <p className="mt-4 w-2/3 text-center text-lg xl:text-xl">
          {props.mediaType}
        </p>
      </Link>
    </div>
  );
};

export default MediaItem;
