import Image from 'next/image';
import Section from '@/components/common/Section';

const projects = [
  {
    title: 'DeepShield - Deepfake Detection Platform',
    description:
      'An AI-powered deepfake detection platform that analyzes manipulated images and videos using deep learning. Built using Python, TensorFlow, OpenCV and deployed on Vercel.',
    image: '/images/projects/deepfake.png',
    github: 'https://github.com/gnapiika/DeepShield-Deepfake-Detection',
    live: 'https://deep-shield-deepfake-detection.vercel.app/',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A premium portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion to showcase my projects, skills and experience.',
    image: '/images/projects/portfolio.png',
    github: 'https://github.com/gnapiika/portfolio',
    live: '',
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="mt-12 space-y-12">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="grid items-center gap-10 md:grid-cols-2">

              {/* Project Image */}

              <div className="p-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={450}
                  className="rounded-2xl border border-pink-200 object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Project Details */}

              <div className="p-8">

                <h3 className="mb-4 text-3xl font-bold text-slate-900">
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

                  {project.live !== '' && (
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

            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}