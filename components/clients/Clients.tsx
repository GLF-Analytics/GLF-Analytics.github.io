import { forwardRef } from "react";
import { Carousel } from "@material-tailwind/react";
import { Taviraj } from "next/font/google";
import { clientList } from "./clientList";
import Client from "./Client";

const taviraj_title = Taviraj({ weight: "200", subsets: ["latin"] });

const Clients = () => {
  const clientDisplay = [];

  for (let i = 0; i < clientList.length; i++) {
    let current = (
      <Client
        key={i}
        clientName={clientList[i].clientName}
        link={clientList[i].link}
        src={clientList[i].src}
      />
    );
    if (i % 3 === 0) {
      clientDisplay.push([current]);
    } else {
      clientDisplay[clientDisplay.length - 1].push(current);
    }
  }

  return (
    <div
      className="w-full bg-Eerie-black text-white"
      style={taviraj_title.style}
    >
      <h2 className="pt-6 text-center text-3xl sm:pt-12 sm:text-4xl xl:text-5xl">
        Clients We Serve:
      </h2>
      <Carousel
        navigation={() => <div></div>}
        loop={true}
        autoplay={true}
        className="flex items-center rounded-xl"
        transition={{
          duration: 1,
          type: "tween",
          repeat: 0,
          repeatType: "mirror",
        }}
        prevArrow={() => <div></div>}
        nextArrow={() => <div></div>}
      >
        {clientDisplay.map((ele, index) => (
          <div
            className="flex items-center justify-around pb-6 text-center text-2xl sm:gap-8 lg:pb-12"
            key={index}
          >
            {...ele}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

// eslint-disable-next-line react/display-name
const ForwardedClients = forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div ref={ref}>
    <Clients {...props} />
  </div>
));

export default ForwardedClients;
