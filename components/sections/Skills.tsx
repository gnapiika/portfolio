import Section from '@/components/common/Section';

export default function Skills() {
  const skills = [
    'Cybersecurity',
    'Artificial Intelligence',
    'Data Science',
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'C++',
    'Java',
    'SQL',
  ];

  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3"
          >
            {skill}
          </div>
        ))}
      </div>
    </Section>
  );
}