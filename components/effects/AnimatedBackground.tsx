'use client';

import { motion } from 'motion/react';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      <motion.div
        animate={{
          x: [0, 120, -120, 0],
          y: [0, -80, 80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-10 top-20 h-96 w-96 rounded-full bg-blue-600/30 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 120, 0],
          y: [0, 120, -120, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[160px]"
      />

    </div>
  );
}