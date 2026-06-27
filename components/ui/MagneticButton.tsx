'use client';

import { motion } from 'motion/react';

export default function MagneticButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.08,
        y: -5,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        rounded-full
        bg-gradient-to-r
        from-blue-500
        to-purple-600
        px-8
        py-4
        font-semibold
        shadow-lg
      "
    >
      {children}
    </motion.button>
  );
}