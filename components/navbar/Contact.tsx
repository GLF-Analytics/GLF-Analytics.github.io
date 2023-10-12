import { Taviraj } from 'next/font/google';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
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
      {/* <Dialog>
      <DialogTrigger className="text-2xl h-10 px-4 py-2 hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
        <p style={taviraj_logo.style}>
          Schedule Free Consultation
        </p>
      </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog> */}
    </div>
  );
}

export default Contact;
