'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  children: React.ReactNode;
  href: React.ComponentProps<typeof Link>['href'];
};

export function NavLink({ href, children }: NavLinkProps) {
  const pathName = usePathname();

  return (
    <li className="max-sm:w-1/3">
      <Link
        href={href}
        className={clsx(
          'inline-flex h-16 w-full items-center justify-center font-semibold hover:underline sm:px-4',
          pathName === href ? 'text-neutral-50' : 'text-neutral-400'
        )}
      >
        {children}
      </Link>
    </li>
  );
}
