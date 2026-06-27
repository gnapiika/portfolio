'use client';

import { motion } from 'motion/react';
import {
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiDocker,
  SiTensorflow,
} from 'react-icons/si';

const techIcons = [
  { Icon: SiPython, left: '8%', top: '18%', duration: 7 },
  { Icon: SiReact, left: '20%', top: '72%', duration: 6 },
  { Icon: SiNextdotjs, left: '82%', top: '20%', duration: 8 },
  { Icon: SiTypescript, left: '90%', top: '65%', duration: 7 },
  { Icon: SiDocker, left: '60%', top: '12%', duration: 9 },
  { Icon: SiTensorflow, left: '42%', top: '82%', duration: 6 },
];

export default function FloatingTech() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {techIcons.map(({ Icon, left, top, duration }, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl text-cyan-400/20"
          style={{
            left,
            top,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  );
}