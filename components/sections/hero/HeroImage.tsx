'use client';

import Image from 'next/image';
import GlassCard from '@/components/ui/GlassCard';

export default function HeroImage() {
  return (
    <div className="flex justify-center">

      <GlassCard>

        <Image
          src="/images/profile.jpeg"
          alt="Gnapika Reddy"
          width={400}
          height={400}
          priority
          className="rounded-3xl object-cover"
        />

      </GlassCard>

    </div>
  );
}