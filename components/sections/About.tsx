import Section from '@/components/common/Section';
import {
  GraduationCap,
  Shield,
  Brain,
  Code2,
} from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description:
      '7th Semester Computer Science Engineering student specializing in Cybersecurity, AI, Data Science, Full Stack Development, and Game Development.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Interested in network security, ethical hacking, digital forensics, and secure software development.',
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description:
      'Developing intelligent applications using Machine Learning, Deep Learning, and Data Science.',
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    description:
      'Building responsive, scalable, and modern web applications using React, Next.js, TypeScript, and Python.',
  },
];

const stats = [
  {
    number: '15+',
    label: 'Projects',
  },
  {
    number: '10+',
    label: 'Technologies',
  },
  {
    number: '5',
    label: 'Domains',
  },
  {
    number: '2027',
    label: 'Graduation',
  },
];

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid gap-12 lg:grid-cols-2">

        {/* Left Side */}
        <div>
          <p className="text-lg leading-8 text-gray-400">
            I'm <span className="font-semibold text-white">Gnapika Reddy</span>,
            a passionate Computer Science Engineering student dedicated to
            creating secure, intelligent, and scalable software solutions.

            <br />
            <br />

            My interests span across Cybersecurity, Artificial Intelligence,
            Data Science, Full Stack Development, and Game Development. I enjoy
            solving real-world problems through technology while continuously
            learning new tools and frameworks.

            <br />
            <br />

            My goal is to become a software engineer who develops impactful,
            secure, and innovative products that improve people's lives.
          </p>
        </div>

        {/* Right Side */}
        <div className="grid gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="glass rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
              >
                <Icon
                  size={32}
                  className="mb-4 text-cyan-400"
                />

                <h3 className="mb-2 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      {/* Statistics */}
      <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass rounded-2xl p-6 text-center transition duration-300 hover:-translate-y-2"
          >
            <h3 className="text-4xl font-black text-cyan-400">
              {stat.number}
            </h3>

            <p className="mt-2 text-gray-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}