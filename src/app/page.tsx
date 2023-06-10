import Image from 'next/image';

import { PageCenter } from '@/components/page-center';

import profile from '../../public/profile.webp';

export default function AppHome() {
  return (
    <PageCenter className="text-center">
      <Image
        priority
        width={256}
        height={256}
        src={profile}
        placeholder="blur"
        alt="vishnumohanrk"
        className="h-64 w-64 rounded-full object-cover"
      />
      <h1 className="text-4xl font-bold">Hi! I&apos;m Vishnumohan</h1>
      <p className="text-neutral-400">
        Passionate front-end web developer dedicated to crafting performant,
        user-friendly, and accessible web apps. Constantly driven by curiosity
        and an insatiable desire to learn, I am always seeking new opportunities
        to build exciting and innovative digital products.
      </p>
    </PageCenter>
  );
}
