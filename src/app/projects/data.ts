import type { ProjectProps } from '@/components/project';

import ipGeo from '../../../public/ip-geo.webp';
import notezApp from '../../../public/notez-app.webp';
import pkgSizeExt from '../../../public/pkg-size-ext.webp';
import restCountries from '../../../public/rest-countries.webp';
import sentiment1 from '../../../public/sentiment-1.webp';
import sentiment2 from '../../../public/sentiment-2.webp';
import storeSnippets from '../../../public/store-snippets.webp';

export const PROJECTS_DATA: ProjectProps[] = [
  {
    image: notezApp,
    title: 'Notez App',
    code: 'https://github.com/vishnumohanrk/notez-app',
    live: 'https://notez-app.vercel.app/',
    description:
      'A Full Stack Note taking app with rich text editing and MarkDown support.',
  },
  {
    image: storeSnippets,
    title: 'Store Snippets',
    code: 'https://github.com/vishnumohanrk/store-snippets',
    demo: 'https://drive.google.com/file/d/1bXdSrcY4VuFERVrKJmiMVbMLQcie5SPC/view?usp=sharing',
    description: 'A Full Stack Code Snippet storing, sharing app.',
  },
  {
    image: pkgSizeExt,
    title: 'NPM Package Size Extension',
    code: 'https://github.com/vishnumohanrk/npm-package-size-extension',
    demo: 'https://github.com/vishnumohanrk/npm-package-size-extension#screenshot',
    description:
      'A Chrome Extension that adds Bundlephobia Minzip size badge to the corresponding NPM package page.',
  },
  {
    image: ipGeo,
    title: 'IP Geolocation Details',
    code: 'https://github.com/vishnumohanrk/ip-address-tracker',
    live: 'https://ip-address-tracker-phi-ten.vercel.app/',
    description:
      'A Web Application that shows the geolocation details of any given domain or IP Address.',
  },
  {
    image: sentiment1,
    title: 'Twitter Sentiment Analysis',
    demo: 'https://drive.google.com/file/d/1JNLFNahVt4as5TCZX-Wus801SWYWDI2m/view?usp=sharing',
    description:
      'A Web Application to visualize sentiments for tweets analyzed using NLP.',
  },
  {
    image: sentiment2,
    title: 'Sentiment Analysis on Textual Images',
    demo: 'https://drive.google.com/file/d/1IHwPOz_ylQQ7IEoLvNxyFTBxeYWO6JQU/view?usp=sharing',
    description:
      'A Web Application to obtain the Sentiment of any given textual image.',
  },
  {
    image: restCountries,
    title: 'World Demographics',
    code: 'https://github.com/vishnumohanrk/rest-countries',
    live: 'https://rest-countries-eight-sigma.vercel.app/',
    description:
      'A React app that shows the details of every country in the world.',
  },
];
