import { Taviraj } from 'next/font/google';
import { forwardRef } from 'react';
import { Button } from '../ui/button';
import Newsletter from './Newsletter';

const taviraj_title = Taviraj({ weight: '300', subsets: ['latin'] });

const Footer = () => {
  return (
    <footer
      style={taviraj_title.style}
      className="flex flex-col items-center h-[40vh] w-screen bg-Eerie-black text-Magnolia"
    >
      <div className="w-11/12 h-full flex flex-col justify-around items-center">
        <div className="h-1/3 flex items-center flex-col gap-8">
          <h2 className="text-5xl">Get in touch.</h2>
          <Button
            style={taviraj_title.style}
            variant="ghost"
            className="text-4xl bg-Magnolia p-12 text-Eerie-black w-fit"
          >
            gabrielf@glfanalytics.com
          </Button>
        </div>
        <div className="h-1/3 w-1/2">
          <Newsletter/>
        </div>
      </div>
    </footer>
  );
};

// eslint-disable-next-line react/display-name
const ForwardedFooter = forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div ref={ref}>
    <Footer {...props} />
  </div>
));

export default ForwardedFooter;
