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
      className="flex h-[25vh] max-h-[300px] min-h-[150px] flex-col items-center justify-center gap-8 bg-Eerie-black text-Magnolia sm:min-h-[250px] xl:h-[35%] xl:max-h-[400px] xl:min-h-[350px] xl:gap-12"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
        Get in touch.
      </h2>
      <Button
        style={taviraj_title.style}
        variant="ghost"
        className="w-fit min-w-[250px] bg-Magnolia p-4 text-lg text-Eerie-black sm:min-w-[300px] sm:p-5 sm:text-xl md:min-w-[350px] md:p-6 md:text-2xl xl:min-w-[450px] xl:p-8 xl:text-4xl"
        onClick={handleCopy}
      >
        {!isCopied ? "gabrielf@glfanalytics.com" : "Copied."}
      </Button>
      <Link
        href="https://www.linkedin.com/in/gabriel-freeman-47b80389/"
        className="rounded-lg border border-Eerie-black p-2 hover:border-Magnolia"
        target="_blank"
      >
        <Image
          src="/icons/linkedin.svg"
          alt="linkedin logo"
          width={50}
          height={50}
          className="w-6 sm:w-7 md:w-8 lg:w-9 xl:w-10"
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
