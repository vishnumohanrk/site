import type { CodeIcon } from '@radix-ui/react-icons/';
import clsx from 'clsx';

type SocialLinkProps = {
  name: string;
  href: string;
  className?: string;
  Icon: typeof CodeIcon;
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
        <Icon className="h-6 w-6" />
        {name}
      </a>
    </li>
  );
}
