import Image from 'next/image';
import { Taviraj } from 'next/font/google';
import { forwardRef } from 'react';
import { mediaList } from './MediaList'; 
import MediaItem from './MediaItem';
import { Carousel } from '@material-tailwind/react';

const taviraj_title = Taviraj({ weight: '300', subsets: ['latin'] });

type IndexProps = {
  ref?: string;
};

function Media(props: IndexProps) {
  const media:JSX.Element[] = [];

  mediaList.forEach((ele, index) => {
    media.push(
      <div className='flex h-full justify-around items-center'>
        <MediaItem link={ele.link} imagePath={ele.imagePath} mediaType={ele.mediaType} title={ele.title} key={index} />
      </div>
    )
  })

  return (
    <div
      style={taviraj_title.style}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <div className="absolute min-h-screen brightness-75 w-full">
        <Image
          className="object-cover"
          src={'/images/bg-2.jpg'}
          fill={true}
          alt="background image"
        />
      </div>
      <div className='relative flex justify-center items-center'>
        <div className="bg-Eerie-black w-[70%] h-[60vh] max-h-[48rem] rounded-xl text-Magnolia flex flex-col justify-around items-center">
          <h2 className="text-center text-5xl mt-12">Media</h2>
          <Carousel
          // navigation={() => <div></div>}
          autoplay={false}
          className=""
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
