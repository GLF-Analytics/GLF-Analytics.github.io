import { Taviraj } from "next/font/google";
import { forwardRef, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { useCopyToClipboard } from "usehooks-ts";

const taviraj_title = Taviraj({ weight: "300", subsets: ["latin"] });

const Footer = () => {
  const [value, copy] = useCopyToClipboard();
  const [isCopied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    copy("gabrielf@glfanalytics.com");

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <footer
      style={taviraj_title.style}
      className="flex h-[25vh] flex-col items-center justify-center gap-4 bg-Eerie-black text-Magnolia xl:h-[35vh] xl:gap-16"
    >
      <h2 className="text-2xl xl:text-5xl">Get in touch.</h2>
      <Button
        style={taviraj_title.style}
        variant="ghost"
        className="w-fit bg-Magnolia p-4 text-lg text-Eerie-black xl:p-8 xl:text-4xl"
        onClick={handleCopy}
      >
        {!isCopied ? "gabrielf@glfanalytics.com" : "Copied."}
      </Button>
      <Link href="https://www.linkedin.com/in/gabriel-freeman-47b80389/">
        <Image
          src="/icons/linkedin.svg"
          alt="linkedin logo"
          width={50}
          height={50}
          className="w-6 sm:w-8 xl:w-10"
        ></Image>
      </Link>
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
