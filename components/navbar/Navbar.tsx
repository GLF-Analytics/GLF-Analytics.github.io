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
{/* 
        <div
          style={taviraj_logo.style}
          className="hidden justify-start gap-4 items-center text-center w-3/4"
        >
          <Button
            style={taviraj_logo.style}
            onClick={() => scrollToComponent(props.top)}
            variant="ghost"
            className="text-2xl"
          >
            Home
          </Button>
          <Button
            style={taviraj_logo.style}
            onClick={() => scrollToComponent(props.faq)}
            variant="ghost"
            className="text-2xl"
          >
            FAQ
          </Button>
          <Button
            style={taviraj_logo.style}
            onClick={() => scrollToComponent(props.clients)}
            variant="ghost"
            className="text-2xl"
          >
            Clients
          </Button>
          <Button
            style={taviraj_logo.style}
            onClick={() => scrollToComponent(props.customDataSolutions)}
            variant="ghost"
            className="text-2xl whitespace-nowrap"
          >
            Custom Data Solutions
          </Button>
          <Button
            style={taviraj_logo.style}
            onClick={() => scrollToComponent(props.media)}
            variant="ghost"
            className="text-2xl"
          >
            Media
          </Button>
          <Button
            style={taviraj_logo.style}
            onClick={() => scrollToComponent(props.footer)}
            variant="ghost"
            className="text-2xl"
          >
            Contact
          </Button> 
        </div>*/}
      </div>
    </nav>
  );
};

export default Navbar;
