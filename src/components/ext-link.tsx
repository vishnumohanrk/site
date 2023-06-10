import { ExternalLinkIcon } from '@radix-ui/react-icons';

export function ExtLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-medium underline"
    >
      {label}
      <ExternalLinkIcon />
    </a>
  );
}
