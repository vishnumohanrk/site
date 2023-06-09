import { ExtLink } from './ext-link';

export type ProjectProps = {
  image?: string;
  title: string;
  live?: string;
  demo?: string;
  code?: string;
};

export function Project({ code, image, title, demo, live }: ProjectProps) {
  return (
    <li>
      <img
        alt={`${title} screenshot`}
        src={image || 'https://picsum.photos/id/42/500'}
        className="aspect-video w-full rounded-md object-cover"
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
