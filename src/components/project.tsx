import dynamic from 'next/dynamic';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { Suspense } from 'react';

import { ExtLink } from './ext-link';

const Info = dynamic(() => import('./info'));

export type ProjectProps = {
  title: string;
  live?: string;
  demo?: string;
  code?: string;
  image: StaticImageData;
  description: string;
};

export function Project({
  code,
  demo,
  live,
  title,
  image,
  description,
}: ProjectProps) {
  return (
    <li>
      <div className="group relative">
        <Image
          src={image}
          placeholder="blur"
          alt={`${title} screenshot`}
          className="aspect-video w-full rounded-md border object-contain"
        />
        <div className="absolute inset-0 flex h-full w-full items-center justify-center gap-3 rounded-md bg-neutral-950/70 opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100">
          {code && <ExtLink href={code} label="Code" />}
          {demo && <ExtLink href={demo} label="Demo" />}
          {live && <ExtLink href={live} label="Live" />}
        </div>
      </div>
      <h3 className="mt-2 flex items-stretch gap-2 text-lg  font-semibold">
        <span className="truncate">{title}</span>
        <Suspense>
          <Info text={description} />
        </Suspense>
      </h3>
    </li>
  );
}
