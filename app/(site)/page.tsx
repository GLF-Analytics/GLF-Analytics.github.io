'use client';

import { useEffect, useRef } from 'react';
import ForwardedIndex from '@/components/TitlePage';
import ForwardedClients from '@/components/clients/Clients';
import ForwardedCustomDataSolutions from '@/components/customdatasolutions/CustomDataSolutions';
import ForwardedMedia from '@/components/media/Media';
import ForwardedFAQ from '@/components/faq/FAQ';
import Navbar from '@/components/navbar/Navbar';
import ForwardedFooter from '@/components/footer/Footer';

export default function Home() {
  const refs = {
    top: useRef<HTMLDivElement>(null),
    faq: useRef<HTMLDivElement>(null),
    clients: useRef<HTMLDivElement>(null),
    customDataSolutions: useRef<HTMLDivElement>(null),
    media: useRef<HTMLDivElement>(null),
    footer: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main data-scroll-container>
      <Navbar
        top={refs.top}
        faq={refs.faq}
        clients={refs.clients}
        customDataSolutions={refs.customDataSolutions}
        media={refs.media}
        footer={refs.footer}
      />
      <ForwardedIndex ref={refs.top} />
      <ForwardedFAQ ref={refs.faq} />
      <ForwardedClients ref={refs.clients} />
      <ForwardedCustomDataSolutions ref={refs.customDataSolutions} />
      <ForwardedMedia ref={refs.media} />
      <ForwardedFooter ref={refs.footer} />
    </main>
  );
}
