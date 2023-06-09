import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import { ExtLink } from './ext-link';

export type ProjectProps = {
  title: string;
  live?: string;
  demo?: string;
  code?: string;
  image: StaticImageData;
};

export function Project({ code, image, title, demo, live }: ProjectProps) {
  return (
    <li>
      <Image
        src={image}
        placeholder="blur"
        alt={`${title} screenshot`}
        className="aspect-video w-full rounded-md border object-contain"
      />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <div>
        {code && <ExtLink href={code} label="Code" />}
        {demo && <ExtLink href={demo} label="Demo" />}
        {live && <ExtLink href={live} label="Live" />}
      </div>
    </li>
  );
}
