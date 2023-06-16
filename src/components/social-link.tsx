import type { CodeIcon } from '@radix-ui/react-icons/';

type SocialLinkProps = {
  name: string;
  href: string;
  color: string;
  Icon: typeof CodeIcon;
};

export function SocialLink({ Icon, href, name, color }: SocialLinkProps) {
  return (
    <li className="w-full">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ ['--color' as string]: color }}
        className="flex items-center justify-center gap-2.5 rounded-full border py-4 text-lg font-semibold transition hover:border-transparent hover:bg-link focus:border-transparent focus:bg-link focus:outline-none focus:ring-2 focus:ring-link focus:ring-offset-2 focus:ring-offset-neutral-900"
      >
        <Icon className="h-6 w-6" aria-hidden />
        {name}
      </a>
    </li>
  );
}
