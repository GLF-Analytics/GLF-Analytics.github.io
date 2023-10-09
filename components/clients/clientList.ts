export type ClientProps = {
  clientName: string,
  link: string,
  src: string
}

export type ClientList = ClientProps[];

export const clientList:ClientList  = [
  {
    clientName: "Dove",
    link: "https://www.dove.com/us/en/home.html",
    src: "/images/clients/Dove.png"
  },
  {
    clientName: "UCAN",
    link: "https://ucan.co/",
    src: "/images/clients/UCAN.png"
  },
  {
    clientName: "Kreatures of Habit",
    link: "https://kreaturesofhabit.com/",
    src:"/images/clients/KoH.png"
  },
  {
    clientName: "Indie Consulting",
    link: "https://indie-consulting.com/",
    src:"/images/clients/Indie+Consulting.png"
  },
  {
    clientName: "Your Super",
    link: "https://www.dove.com/us/en/home.html",
    src:"/images/clients/YS.png"
  },
  {
    clientName: "Unilever",
    link: "https://www.unilever.com/",
    src:"/images/clients/UL.png"
  },
]