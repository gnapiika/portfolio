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
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <span className="text-2xl font-black tracking-wide">
          G<span className="text-cyan-400">.</span>R
        </span>

        <ul className="hidden gap-8 md:flex">
          {links.map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="transition duration-300 hover:text-cyan-400"
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