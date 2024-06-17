export type SingleMediaItem = {
  link: string;
  imagePath: string;
  title: string;
  mediaType: "Podcast" | "Article";
};

export const mediaList: SingleMediaItem[] = [
  {
    link: "https://youtu.be/vJMtFG0l8rA?si=j3964uWTKnbNTZCf",
    imagePath: "/images/media/ElevarPodcast.jpg",
    title: "Shopify Analytics Reporting Automation via Big Query",
    mediaType: "Podcast",
  },
  {
    link: "https://www.shopify.com/enterprise/customer-data",
    imagePath: "/images/media/ShopifyPlus.png",
    title: "Shopify Plus 2022: Customer Data Trends & Best Practices",
    mediaType: "Article",
  },
  {
    link: "https://medium.com/@gabe_freeman21/building-glf-from-solo-data-analyst-to-full-service-ecommerce-consultancy-afc3f8f358d6",
    imagePath: "/images/media/BuildingGLF.png",
    title: "Building GLF: From Solo Data Analyst to Full-Service eCommerce Consultancy",
    mediaType: "Article",
  },
];
