'use client';

import { motion, useMotionValue, useSpring } from 'motion/react';

export default function MouseSpotlight() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, {
    stiffness: 80,
    damping: 25,
  });

  const mouseY = useSpring(y, {
    stiffness: 80,
    damping: 25,
  });

  return (
    <motion.div
      onMouseMove={(e) => {
        x.set(e.clientX - 200);
        y.set(e.clientY - 200);
      }}
      className="fixed inset-0 pointer-events-none z-0"
    >
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        className="h-[400px] w-[400px] rounded-full bg-pink-300/20 blur-[120px]"
      />
    </motion.div>
  );
}