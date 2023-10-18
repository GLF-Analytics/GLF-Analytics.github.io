export type MediaItem = {
  link: string;
  imagePath: string;
  title: string;
  mediaType: 'Podcast' | 'Article Feature';
};

export const mediaList: MediaItem[] = [
  {
    link: 'https://youtu.be/vJMtFG0l8rA?si=j3964uWTKnbNTZCf',
    imagePath: '/images/media/ElevarPodcast.jpg',
    title:
      'Shopify Analytics Reporting Automation via Big Query',
    mediaType: 'Podcast',
  },
  {
    link: 'https://www.shopify.com/enterprise/customer-data',
    imagePath: '/images/media/ShopifyPlus.png',
    title:
      'Shopify Plus 2022: Customer Data Trends & Best Practices',
    mediaType: 'Article Feature',
  },
];
