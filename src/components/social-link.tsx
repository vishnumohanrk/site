import clsx from 'clsx';
import type { IconType } from 'react-icons';

type SocialLinkProps = {
  name: string;
  href: string;
  Icon: IconType;
  className?: string;
};

export function SocialLink({ Icon, href, name, className }: SocialLinkProps) {
  return (
    <li className="w-full">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          'flex items-center justify-center gap-2 rounded-full border py-4 text-lg font-semibold transition hover:scale-105 focus-visible:scale-105 active:scale-95',
          className
        )}
      >
        <Icon size={24} />
        {name}
      </a>
    </li>
  );
}
