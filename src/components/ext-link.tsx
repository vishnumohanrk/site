export function ExtLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mr-3 text-neutral-400 underline"
    >
      {label}
    </a>
  );
}
