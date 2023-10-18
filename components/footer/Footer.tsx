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
      className="flex h-[25vh] max-h-[300px] xl:max-h-[400px] min-h-[150px] flex-col items-center justify-center gap-8 bg-Eerie-black text-Magnolia xl:h-[35vh] xl:gap-12"
    >
      <h2 className="text-2xl xl:text-5xl">Get in touch.</h2>
      <Button
        style={taviraj_title.style}
        variant="ghost"
        className="w-fit min-w-[250px] bg-Magnolia p-4 text-lg text-Eerie-black xl:min-w-[500px] xl:p-8 xl:text-4xl"
        onClick={handleCopy}
      >
        {!isCopied ? "gabrielf@glfanalytics.com" : "Copied."}
      </Button>
      <Link href="https://www.linkedin.com/in/gabriel-freeman-47b80389/" className="border p-2 rounded-lg border-Eerie-black hover:border-Magnolia">
        <Image
          src="/icons/linkedin.svg"
          alt="linkedin logo"
          width={50}
          height={50}
          className="w-6 sm:w-7 xl:w-10"
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
