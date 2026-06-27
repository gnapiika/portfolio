import Section from '@/components/common/Section';

const projects = [
  {
    title: 'Cyber Threat Detection System',
    description:
      'AI-powered system to detect malicious network activity using behavioral analytics.',
  },
  {
    title: 'Full Stack Portfolio Website',
    description:
      'Modern animated portfolio built with Next.js, Tailwind CSS, and glassmorphism UI.',
  },
  {
    title: 'Game Dev Mini Engine',
    description:
      'A lightweight 2D game engine built using JavaScript and Canvas API.',
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass rounded-3xl p-6 transition hover:scale-[1.02]"
          >
            <h3 className="mb-2 text-xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}