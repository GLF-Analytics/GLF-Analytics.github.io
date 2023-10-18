import { Taviraj } from 'next/font/google';
import { Button } from '../ui/button';
import { RefObject, useRef } from 'react';
import Contact from './Contact';
import SheetTop from './SheetTop';


const taviraj_logo = Taviraj({
  weight: '300',
  subsets: ['latin'],
  style: 'italic',
});

type NavbarProps = {
  top: RefObject<HTMLDivElement>;
  faq: RefObject<HTMLDivElement>;
  clients: RefObject<HTMLDivElement>;
  customDataSolutions: RefObject<HTMLDivElement>;
  media: RefObject<HTMLDivElement>;
  footer: RefObject<HTMLDivElement>;
};

const Navbar = (props: NavbarProps) => {
  return (
    <nav className="bg-Eerie-black brightness-70 sticky top-0 z-50 py-3 xl:py-4 flex flex-col h-fit items-center justify-center min-w-screen">
      <div className="flex items-center justify-between w-11/12 max-w-9xl text-Magnolia">
        <span
          style={taviraj_logo.style}
          className="text-2xl xl:text-3xl min-w-[175px]"
        >
          GLF Analytics
        </span>
        <span className='flex flex-col justify-center'>
          <SheetTop
            top={props.top}
            faq={props.faq}
            clients={props.clients}
            customDataSolutions={props.customDataSolutions}
            media={props.media}
            footer={props.footer}/>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
