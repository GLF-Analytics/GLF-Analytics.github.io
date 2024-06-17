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
    faq: useRef<HTMLDivElement>(null),
    clients: useRef<HTMLDivElement>(null),
    ecomServiceOfferings: useRef<HTMLDivElement>(null),
    customDataSolutions: useRef<HTMLDivElement>(null),
    media: useRef<HTMLDivElement>(null),
    timeline: useRef<HTMLDivElement>(null),
    footer: useRef<HTMLDivElement>(null),
  };

  return (
    <main>
      <Navbar
        top={refs.top}
        faq={refs.faq}
        clients={refs.clients}
        ecomServiceOfferings={refs.ecomServiceOfferings}
        customDataSolutions={refs.customDataSolutions}
        timeline={refs.timeline}
        media={refs.media}
        footer={refs.footer}
      />
      <ForwardedTitle ref={refs.top} />
      <ForwardedFAQ ref={refs.faq} />
      <ForwardedClients ref={refs.clients} />
      <ForwardedEcomServiceOfferings ref={refs.ecomServiceOfferings}/>
      <ForwardedCustomDataSolutions ref={refs.customDataSolutions} />
      <ForwardedTimeline ref={refs.timeline} />
      <ForwardedMedia ref={refs.media} />
      <ForwardedFooter ref={refs.footer} />
    </main>
  );
}
