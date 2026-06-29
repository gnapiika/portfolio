'use client';

import { motion } from 'motion/react';

const tech = [
  'Python',
  'React',
  'Next.js',
  'AI',
  'Cybersecurity',
  'TypeScript',
];

export default function FloatingTech() {
  return (
    <>
      {tech.map((item, index) => (
        <motion.div
          key={item}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + index,
          }}
          className="absolute rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-pink-600 shadow-lg backdrop-blur-xl"
          style={{
            top: `${10 + index * 12}%`,
            left: index % 2 === 0 ? '8%' : '78%',
          }}
        >
          {item}
        </motion.div>
      ))}
    </>
  );
}