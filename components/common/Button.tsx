'use client';

import { motion } from 'motion/react';

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -3,
      }}
      whileTap={{ scale: 0.95 }}
      className="rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
    >
      {children}
    </motion.button>
  );
}