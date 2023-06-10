import './globals.css';

import { Inter } from 'next/font/google';

import { AppHeader } from '@/components/app-header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-neutral-900 font-sans text-neutral-50 antialiased">
        <AppHeader />
        <main className="mx-auto max-w-screen-md px-4 py-20 max-sm:pt-4">
          {children}
        </main>
      </body>
    </html>
  );
}

export const metadata = {
  description: 'Vishnumohan R K - Front-End Web Developer',
  title: {
    absolute: 'Vishnumohan R K',
    template: '%s | Vishnumohan R K',
  },
};
