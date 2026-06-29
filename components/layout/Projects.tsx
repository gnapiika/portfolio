import Section from '@/components/common/Section';

const projects = [
  {
    title: 'DeepShield - Deepfake Detection Platform',
    description:
      'An AI-powered deepfake detection platform that analyzes manipulated images and videos using deep learning. Built with Python, TensorFlow, OpenCV and deployed on Vercel.',
    github: 'https://github.com/gnapiika/DeepShield-Deepfake-Detection',
    live: 'https://deep-shield-deepfake-detection.vercel.app/',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A premium animated portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion. Designed to showcase my projects, skills and experience with a modern UI.',
    github: 'https://github.com/gnapiika/portfolio',
    live: '', // Add your deployed portfolio URL here after deployment
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              {project.title}
            </h3>

            <p className="mb-8 leading-8 text-slate-600">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-pink-500 px-6 py-3 font-semibold text-white transition hover:bg-pink-600"
              >
                GitHub
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-pink-400 px-6 py-3 font-semibold text-pink-600 transition hover:bg-pink-100"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}