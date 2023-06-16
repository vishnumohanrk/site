import Link from 'next/link';

import { NavLink } from './nav-link';

export function AppHeader() {
  return (
    <header className="fixed bottom-0 z-50 h-16 w-full border-b bg-neutral-950 max-sm:border-t sm:top-0">
      <div className="mx-auto flex max-w-screen-md items-center sm:px-4">
        <h1 className="text-3xl font-bold max-sm:hidden">
          <Link href="/">Vishnumohan R K</Link>
        </h1>
        <nav className="grow">
          <ul className="flex justify-end">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/links">Links</NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
