'use client';

import HeroButtons from './HeroButtons';
import HeroBadge from './HeroBadge';

export default function HeroContent() {
  return (
    <div className="space-y-8">

      <HeroBadge />

      <div>

        <p className="text-cyan-400">
          Hello, I'm
        </p>

        <h1 className="text-7xl font-black leading-none md:text-9xl">
          Gnapika
          <br />

          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Reddy
          </span>

        </h1>

      </div>

      <h2 className="text-2xl text-gray-300">
        Cybersecurity • AI • Data Science
      </h2>

      <p className="max-w-xl leading-8 text-gray-400">
        Passionate Computer Science student specializing in
        Cybersecurity, Artificial Intelligence,
        Data Science, Full Stack Development,
        and Game Development.
      </p>

      <HeroButtons />

    </div>
  );
}