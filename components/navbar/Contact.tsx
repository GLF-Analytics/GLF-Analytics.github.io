import { Taviraj } from 'next/font/google';
import { Button } from '../ui/button';
import { RefObject } from 'react';

const taviraj_logo = Taviraj({
  weight: '300',
  subsets: ['latin'],
  style: 'italic',
});

type FooterProps = {
  footer: RefObject<HTMLDivElement>;
};

function Contact(props: FooterProps) {
  const scrollToComponent = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div
      className="flex items-center justify-end w-1/3 gap-8"
      style={taviraj_logo.style}
    >
      <Button
        onClick={() => scrollToComponent(props.footer)}
        style={taviraj_logo.style}
        variant="ghost"
        className="text-2xl"
      >
        Schedule Free Consultation
      </Button>
    </div>
  );
}

export default Contact;
