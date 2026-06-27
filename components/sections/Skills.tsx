import Section from '@/components/common/Section';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiGithub,
  SiMysql,
  SiMongodb,
  SiCplusplus,
  SiTensorflow,
} from 'react-icons/si';

import { FaJava } from 'react-icons/fa6';

const skillCategories = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', icon: SiPython, level: 90 },
      { name: 'Java', icon: FaJava, level: 85 },
      { name: 'C++', icon: SiCplusplus, level: 85 },
      { name: 'JavaScript', icon: SiJavascript, level: 85 },
      { name: 'TypeScript', icon: SiTypescript, level: 80 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, level: 90 },
      { name: 'Next.js', icon: SiNextdotjs, level: 85 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'MySQL', icon: SiMysql, level: 85 },
      { name: 'MongoDB', icon: SiMongodb, level: 80 },
      { name: 'Docker', icon: SiDocker, level: 70 },
    ],
  },
  {
    title: 'Tools & AI',
    skills: [
      { name: 'Git', icon: SiGit, level: 90 },
      { name: 'GitHub', icon: SiGithub, level: 90 },
      { name: 'TensorFlow', icon: SiTensorflow, level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="glass rounded-3xl p-8 transition duration-300 hover:-translate-y-2"
          >
            <h3 className="mb-8 text-2xl font-bold text-cyan-400">
              {category.title}
            </h3>

            <div className="space-y-6">
              {category.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className="text-2xl text-cyan-400" />
                        <span>{skill.name}</span>
                      </div>

                      <span>{skill.level}%</span>
                    </div>

                    <div className="h-2 rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        style={{
                          width: `${skill.level}%`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}