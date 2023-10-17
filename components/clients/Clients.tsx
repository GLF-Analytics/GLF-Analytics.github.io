import { forwardRef } from 'react';
import { Carousel } from '@material-tailwind/react';
import { Taviraj } from 'next/font/google';
import { clientList } from './clientList';
import Client from './Client';

const taviraj_title = Taviraj({ weight: '200', subsets: ['latin'] });

const Clients = () => {
  const clientDisplay = [];

  for (let i = 0; i < clientList.length; i++){
    let current = <Client key={i} clientName={clientList[i].clientName} link={clientList[i].link} src={clientList[i].src}/>;
    if (i % 3 === 0){
      clientDisplay.push([current])
    } else {
      clientDisplay[clientDisplay.length - 1].push(current)
    }
  }

  return (
    <div
      className="w-full bg-Eerie-black text-white"
      style={taviraj_title.style}
    >
      <h2 className="text-center text-3xl lg:text-5xl pt-6 sm:pt-12 sm:pb-6">Clients We Serve:</h2>
      <Carousel
        navigation={() => <div></div>}
        loop={true}
        autoplay={true}
        className="rounded-xl flex items-center"
        transition={{ duration: 1, type:"tween", repeat:0, repeatType: "mirror" }}
        prevArrow={() => <div></div>}
        nextArrow={() => <div></div>}
      >
        {clientDisplay.map((ele,index) =>
          <div className="flex justify-around items-center sm:gap-8 lg:pb-12 text-center text-2xl" key={index}>
            {...ele}
          </div>
        )}
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
