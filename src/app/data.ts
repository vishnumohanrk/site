type TProj = {
  name: string;
  link: string;
  description: string;
};

export const PROJECTS_DATA: TProj[] = [
  {
    name: 'Store Snippets',
    description: 'A Code Snippet Sharing, Storing app.',
    link: 'https://drive.google.com/file/d/1bXdSrcY4VuFERVrKJmiMVbMLQcie5SPC/view?usp=sharing',
  },
  {
    name: 'Notez App',
    description:
      'A Full Stack Note taking app with user authentication, Rich text editing and MarkDown support.',
    link: 'https://notez-app.vercel.app/',
  },
  {
    name: 'NPM Package Size - Browser Extension',
    description:
      'A Chrome Extension that adds Bundlephobia Minzip size badge to the corresponding NPM package page.',
    link: 'https://github.com/vishnumohanrk/npm-package-size-extension#screenshot',
  },
  {
    name: 'Sentiment Analysis on Textual Images',
    description:
      'A Web Application to obtain the Sentiment of any given textual image.',
    link: 'https://drive.google.com/file/d/1IHwPOz_ylQQ7IEoLvNxyFTBxeYWO6JQU/view?usp=sharing',
  },
  {
    name: 'Twitter Sentiment Analysis',
    description:
      'A Web Application to visualize sentiments for tweets analyzed using NLP.',
    link: 'https://drive.google.com/file/d/1JNLFNahVt4as5TCZX-Wus801SWYWDI2m/view?usp=sharing',
  },
  {
    name: 'World Demographics',
    description:
      'A Web Application that shows the details of every country in the world.',
    link: 'https://rest-countries-eight-sigma.vercel.app/',
  },
  {
    name: 'IP Geolocation Details',
    description:
      'A Web Application that shows the geolocation details of any given domain or IP Address.',
    link: 'https://ip-address-tracker-phi-ten.vercel.app/',
  },
];

export const LINKS: Omit<TProj, 'description'>[] = [
  { link: 'https://github.com/vishnumohanrk', name: 'GitHub' },
  { link: 'https://www.codewars.com/users/vishnumohanrk', name: 'Codewars' },
  { link: 'https://www.linkedin.com/in/vishnumohanrk/', name: 'LinkedIn' },
];
