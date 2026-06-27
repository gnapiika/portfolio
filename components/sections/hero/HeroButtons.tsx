'use client';

import MagneticButton from '@/components/ui/MagneticButton';

export default function HeroButtons() {
  return (
    <div className="flex gap-5">

      <MagneticButton>
        View Projects
      </MagneticButton>

      <MagneticButton>
        Contact Me
      </MagneticButton>

    </div>
  );
}