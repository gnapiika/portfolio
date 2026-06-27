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
    title: 'Deepfake Detection Platform',
    description:
      'AI-powered deepfake detection system that analyzes videos to identify manipulated content.',
    live: 'https://deep-shield-deepfake-detection.vercel.app/',
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      {/* mt-10 provides the padding under the heading title */}
      <div className="grid gap-6 md:grid-cols-2 mt-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass rounded-3xl p-6 transition hover:scale-[1.02]"
          >
            <h3 className="mb-2 text-xl font-bold text-white">
              {project.title}
            </h3>

            <p className="text-gray-400">{project.description}</p>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-cyan-400 hover:underline"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}