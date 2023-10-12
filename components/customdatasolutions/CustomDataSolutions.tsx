import Image from 'next/image';
import { Taviraj } from 'next/font/google';
import { forwardRef } from 'react';
import CustomTable from './CustomTable';

const taviraj_title = Taviraj({ weight: '300', subsets: ['latin'] });

type IndexProps = {
  ref?: string;
};

function CustomDataSolutions(props: IndexProps) {
  return (
    <div
      style={taviraj_title.style}
      className="h-[130vh] flex flex-col items-center justify-center min-h-screen"
    >
      <div className="absolute h-[130vh] w-full">
        <Image
          className="object-cover brightness-75"
          src={'/images/bg-4.jpg'}
          fill={true}
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
  )
);

export default ForwardedCustomDataSolutions;
