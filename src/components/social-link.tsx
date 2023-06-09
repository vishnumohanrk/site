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
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          'inline-flex items-center gap-2 rounded-md border px-8 py-2 text-xl font-semibold transition-colors',
          className
        )}
      >
        <Icon />
        {name}
      </a>
    </li>
  );
}
