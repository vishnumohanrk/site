import './globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Vishnumohan R K',
  description:
    'Vishnumohan R K - Front-End Web Developer skilled in React, Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-neutral-950 font-sans text-neutral-50 antialiased">
        <main className="mx-auto max-w-screen-sm">{children}</main>
      </body>
    </html>
  );
}
