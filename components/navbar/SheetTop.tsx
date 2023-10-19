"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RefObject } from "react";
import MDI_Menu from "../icons/MDI_Menu";
import { Button } from "../ui/button";
import { Taviraj } from "next/font/google";

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

const SheetTop = (props: NavbarProps) => {
  const scrollToComponent = (
    ref: React.RefObject<HTMLDivElement>,
    position: ScrollLogicalPosition,
  ) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: position });
    }
  };

  return (
    <Sheet>
      <SheetTrigger>
        <MDI_Menu />
      </SheetTrigger>
      <SheetContent
        className="flex w-screen flex-col items-center justify-start"
        side={"top"}
      >
        <SheetHeader style={taviraj_logo.style} className="text-4xl font-bold">
          Navigation
        </SheetHeader>
        <SheetFooter>
          <SheetClose className="mx-auto">
            <div className="flex flex-col items-center justify-center">
              <Button
                style={taviraj_logo.style}
                onClick={() => scrollToComponent(props.top, "center")}
                variant="ghost"
                className="text-2xl"
              >
                Home
              </Button>
              <Button
                style={taviraj_logo.style}
                onClick={() => scrollToComponent(props.faq, "center")}
                variant="ghost"
                className="text-2xl"
              >
                FAQ
              </Button>
              <Button
                style={taviraj_logo.style}
                onClick={() => scrollToComponent(props.clients, "center")}
                variant="ghost"
                className="text-2xl"
              >
                Clients
              </Button>
              <Button
                style={taviraj_logo.style}
                onClick={() =>
                  scrollToComponent(props.customDataSolutions, "center")
                }
                variant="ghost"
                className="whitespace-nowrap text-2xl"
              >
                Custom Data Solutions
              </Button>
              <Button
                style={taviraj_logo.style}
                onClick={() => scrollToComponent(props.media, "center")}
                variant="ghost"
                className="text-2xl"
              >
                Media
              </Button>
              <Button
                style={taviraj_logo.style}
                onClick={() => scrollToComponent(props.footer, "start")}
                variant="ghost"
                className="text-2xl"
              >
                Contact
              </Button>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SheetTop;
