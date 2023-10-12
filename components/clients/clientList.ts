export type ClientProps = {
  clientName: string;
  link: string;
  src: string;
};

export type ClientList = ClientProps[];

export const clientList: ClientList = [
  {
    clientName: 'Dove',
    link: 'https://www.dove.com/us/en/home.html',
    src: '/images/clients/Dove-300x200.png',
  },
  {
    clientName: 'UCAN',
    link: 'https://ucan.co/',
    src: '/images/clients/UCAN-300x200.png',
  },
  {
    clientName: 'Kreatures of Habit',
    link: 'https://kreaturesofhabit.com/',
    src: '/images/clients/KOH-300x200.png',
  },
  {
    clientName: 'Indie Consulting',
    link: 'https://indie-consulting.com/',
    src: '/images/clients/Indie-Consulting-300x200.png',
  },
  {
    clientName: 'Your Super',
    link: 'https://www.dove.com/us/en/home.html',
    src: '/images/clients/Your-Super-300x200.png',
  },
  {
    clientName: 'Unilever',
    link: 'https://www.unilever.com/',
    src: '/images/clients/Unilever-300x200.png',
  },
];
