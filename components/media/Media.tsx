import Image from "next/image";
import { Taviraj } from "next/font/google";
import { forwardRef } from "react";
import { mediaList } from "./MediaList";
import MediaItem from "./MediaItem";
import { Carousel } from "@material-tailwind/react";

const taviraj_title = Taviraj({ weight: "300", subsets: ["latin"] });

type IndexProps = {
  ref?: string;
};

function Media(props: IndexProps) {
  const media: JSX.Element[] = [];

  mediaList.forEach((ele, index) => {
    media.push(
      <div className="flex h-full items-center justify-around">
        <MediaItem
          link={ele.link}
          imagePath={ele.imagePath}
          mediaType={ele.mediaType}
          title={ele.title}
          key={index}
        />
      </div>,
    );
  });

  return (
    <div
      style={taviraj_title.style}
      className="flex min-h-screen flex-col items-center justify-center xl:h-[130vh]"
    >
      <div className="absolute min-h-screen w-full brightness-75 xl:h-[130vh]">
        <Image
          className="hidden object-cover sm:flex"
          src={"/images/bg-1.jpg"}
          fill={true}
          alt="background image"
        />
        <Image
          className="h-screen object-cover sm:hidden"
          src={"/images/bg-1.jpg"}
          fill={false}
          width={1600}
          height={3200}
          alt="background image"
        />
      </div>
      <div className="relative flex items-center justify-center">
        <div className="flex max-h-[48rem] flex-col items-center justify-around bg-Eerie-black text-Magnolia sm:w-[85%] sm:h-[45vh] sm:rounded-xl xl:h-[70vh] xl:max-h-[800px] xl:w-[70%]">
          <h2 className="mt-6 text-center text-3xl xl:mt-12 xl:text-5xl">
            Media
          </h2>
          <Carousel
            // navigation={() => <div></div>}
            autoplay={false}
            className="overflow-hidden"
          >
            {media}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/display-name
const ForwardedMedia = forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div ref={ref}>
    <Media {...props} />
  </div>
));

export default ForwardedMedia;
