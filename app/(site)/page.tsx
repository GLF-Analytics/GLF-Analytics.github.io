'use client';

import { useRef } from 'react';
import ForwardedClients from '@/components/clients/Clients';
import ForwardedCustomDataSolutions from '@/components/customdatasolutions/CustomDataSolutions';
import ForwardedMedia from '@/components/media/Media';
import ForwardedFAQ from '@/components/faq/FAQ';
import Navbar from '@/components/navbar/Navbar';
import ForwardedFooter from '@/components/footer/Footer';
import ForwardedTitle from '@/components/title/TitlePage';
import ForwardedTimeline from '@/components/timeline/Timeline';
import ForwardedEcomServiceOfferings from '@/components/ecomServiceOfferings/ecomServiceOfferings';

export default function Home() {
  const refs = {
    top: useRef<HTMLDivElement>(null),
    clients: useRef<HTMLDivElement>(null),
    ecomServiceOfferings: useRef<HTMLDivElement>(null),
    media: useRef<HTMLDivElement>(null),
    customDataSolutions: useRef<HTMLDivElement>(null),
    faq: useRef<HTMLDivElement>(null),
    timeline: useRef<HTMLDivElement>(null),
    footer: useRef<HTMLDivElement>(null),
  };

  return (
    <main>
      <Navbar
        top={refs.top}
        clients={refs.clients}
        ecomServiceOfferings={refs.ecomServiceOfferings}
        media={refs.media}
        customDataSolutions={refs.customDataSolutions}
        faq={refs.faq}
        timeline={refs.timeline}
        footer={refs.footer}
      />
      <ForwardedTitle ref={refs.top} />
      <ForwardedClients ref={refs.clients} />
      <ForwardedEcomServiceOfferings ref={refs.ecomServiceOfferings}/>
      <ForwardedMedia ref={refs.media} />
      <ForwardedCustomDataSolutions ref={refs.customDataSolutions} />
      <ForwardedFAQ ref={refs.faq} />
      <ForwardedTimeline ref={refs.timeline} />
      <ForwardedFooter ref={refs.footer} />
    </main>
  );
}
