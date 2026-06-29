'use client';

import { motion } from 'motion/react';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-0 top-10 h-[520px] w-[520px] rounded-full bg-pink-300/40 blur-[170px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 120, -100, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-purple-300/35 blur-[190px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/25 blur-[140px]"
      />

    </div>
  );
}