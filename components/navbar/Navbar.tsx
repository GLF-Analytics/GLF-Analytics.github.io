import { Taviraj } from 'next/font/google';
import { Button } from '../ui/button';
import { RefObject, useRef } from 'react';
import Contact from './Contact';

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
  const scrollToComponent = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <nav className="bg-Eerie-black brightness-70 sticky top-0 z-50 flex items-center justify-center min-w-screen h-24">
      <div className="flex justify-between w-11/12 max-w-9xl text-Magnolia">
        <span
          style={taviraj_logo.style}
          className="place-self-center text-4xl whitespace-pre-line w-1/3"
        >
          GLF Analytics
        </span>
        <div
          style={taviraj_logo.style}
          className="hidden sm:flex justify-center gap-4 items-center text-center w-2/5"
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
        </div>
        <Contact footer={props.footer} />
      </div>
    </nav>
  );
};

export default Navbar;
