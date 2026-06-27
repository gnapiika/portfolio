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
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <h2 className="text-xl font-bold">
          GR
        </h2>

        <ul className="hidden gap-8 md:flex">
          {links.map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-blue-400"
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