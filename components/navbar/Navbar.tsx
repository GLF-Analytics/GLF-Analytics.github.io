import { Taviraj } from "next/font/google";
import { RefObject, useRef } from "react";
import SheetTop from "./SheetTop";

const taviraj_logo = Taviraj({
  weight: "300",
  subsets: ["latin"],
  style: "italic",
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
    <nav className="brightness-70 min-w-screen sticky top-0 z-50 flex h-fit flex-col items-center justify-center bg-Eerie-black py-3 xl:py-4">
      <div className="max-w-9xl flex w-11/12 items-center justify-between text-Magnolia">
        <span
          style={taviraj_logo.style}
          className="min-w-[175px] text-2xl xl:text-3xl"
        >
          GLF Analytics
        </span>
        <span className="flex flex-col justify-center">
          <SheetTop
            top={props.top}
            faq={props.faq}
            clients={props.clients}
            customDataSolutions={props.customDataSolutions}
            media={props.media}
            footer={props.footer}
          />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
