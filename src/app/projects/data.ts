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
    image: storeSnippets,
    title: 'Store Snippets',
    code: 'https://github.com/vishnumohanrk/store-snippets',
    demo: 'https://drive.google.com/file/d/1bXdSrcY4VuFERVrKJmiMVbMLQcie5SPC/view?usp=sharing',
  },
  {
    image: notezApp,
    title: 'Notez App',
    code: 'https://github.com/vishnumohanrk/notez-app',
    live: 'https://notez-app.vercel.app/',
  },
  {
    image: pkgSizeExt,
    title: 'NPM Package Size - Browser Extension',
    code: 'https://github.com/vishnumohanrk/npm-package-size-extension',
    demo: 'https://github.com/vishnumohanrk/npm-package-size-extension#screenshot',
  },
  {
    image: sentiment1,
    title: 'Twitter Sentiment Analysis',
    demo: 'https://drive.google.com/file/d/1JNLFNahVt4as5TCZX-Wus801SWYWDI2m/view?usp=sharing',
  },
  {
    image: sentiment2,
    title: 'Sentiment Analysis on Textual Images',
    demo: 'https://drive.google.com/file/d/1IHwPOz_ylQQ7IEoLvNxyFTBxeYWO6JQU/view?usp=sharing',
  },
  {
    image: restCountries,
    title: 'World Demographics',
    code: 'https://github.com/vishnumohanrk/rest-countries',
    live: 'https://rest-countries-eight-sigma.vercel.app/',
  },
  {
    image: ipGeo,
    title: 'IP Geolocation Details',
    code: 'https://github.com/vishnumohanrk/ip-address-tracker',
    live: 'https://ip-address-tracker-phi-ten.vercel.app/',
  },
];
