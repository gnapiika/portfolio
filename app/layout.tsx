import type { Metadata } from 'next';
import {
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from 'next/font/google';

import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

const heading = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Gnapika Reddy',
  description:
    'Cybersecurity • AI • Data Science • Full Stack Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${heading.variable}`}
      >
        {children}
      </body>
    </html>
  );
}