'use client';

import Link from 'next/link';

const links = [
  'About',
  'Skills',
  'Projects',
  'Experience',
  'Contact',
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-pink-200/60 bg-white/60 backdrop-blur-3xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <Link href="/" className="text-3xl font-black tracking-tight">
          <span className="gradient-text">GR.</span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="font-medium text-gray-700 transition duration-300 hover:text-pink-500"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}