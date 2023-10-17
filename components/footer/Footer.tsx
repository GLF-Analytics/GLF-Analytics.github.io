import { Taviraj } from 'next/font/google';
import { forwardRef } from 'react';
import { Button } from '../ui/button';

const taviraj_title = Taviraj({ weight: '300', subsets: ['latin'] });

const Footer = () => {
  return (
    <footer
      style={taviraj_title.style}
      className="flex flex-col justify-center gap-4 xl:gap-8 items-center h-[25vh] bg-Eerie-black text-Magnolia"
    >
      <h2 className="text-2xl xl:text-5xl">Get in touch.</h2>
      <Button
        style={taviraj_title.style}
        variant="ghost"
        className="text-lg xl:text-4xl bg-Magnolia p-4 xl:p-8 text-Eerie-black w-fit"
      >
        gabrielf@glfanalytics.com
      </Button>
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
