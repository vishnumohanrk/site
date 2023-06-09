import './globals.css';

import { Inter } from 'next/font/google';

import { AppHeader } from '@/components/app-header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Vishnumohan R K',
  description: 'Vishnumohan R K - Front-End Web Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-neutral-950 font-sans text-neutral-50 antialiased">
        <AppHeader />
        <main className="mx-auto max-w-screen-md px-4 pb-16 sm:pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
