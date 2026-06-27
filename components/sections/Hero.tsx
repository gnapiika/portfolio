'use client';

import AnimatedBackground from '../effects/AnimatedBackground';
import MouseSpotlight from '../effects/MouseSpotlight';
import FloatingTech from '../ui/FloatingTech';

import HeroContent from './hero/HeroContent';
import HeroImage from './hero/HeroImage';
import ScrollIndicator from './hero/ScrollIndicator';

export default function Hero() {
  return (
    <>
      <MouseSpotlight />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

        <AnimatedBackground />
        <FloatingTech />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 md:grid-cols-2">

          <HeroContent />

          <HeroImage />

        </div>

        <ScrollIndicator />

      </section>
    </>
  );
}