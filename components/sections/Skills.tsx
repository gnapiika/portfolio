'use client';

import Section from '@/components/common/Section';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'Java', level: 85 },
  { name: 'C++', level: 85 },
  { name: 'JavaScript', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Tailwind', level: 90 },
  { name: 'Docker', level: 70 },
  { name: 'MongoDB', level: 80 },
];

function RadialSkill({ name, level }: { name: string; level: number }) {
  const radius = 42;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
    >
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="rgba(255,255,255,0.08)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="url(#grad)"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <defs>
          <linearGradient id="grad">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="mt-3 text-center">
        <p className="text-sm font-medium text-white">{name}</p>
        <p className="text-xs text-white/60">{level}%</p>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => (
          <RadialSkill
            key={skill.name}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </Section>
  );
}