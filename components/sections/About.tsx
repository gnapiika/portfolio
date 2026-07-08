import Section from '@/components/common/Section';
import FadeUp from '@/components/common/FadeUp';
import {
  Shield,
  Brain,
  Code2,
  GraduationCap,
} from 'lucide-react';

const cards = [
  {
    icon: GraduationCap,
    title: 'Education',
    text: '7th Semester Computer Science Engineering student passionate about solving real-world problems through technology. This includes a strong foundation in programming, algorithms, data structures, and software development principles with a focus on cybersecurity, artificial intelligence, data science, and full stack development.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    text: 'Interested in ethical hacking, digital forensics, network security, secure software engineering, and threat detection. I am passionate about protecting systems and data from cyber threats and ensuring the security of applications and networks. I enjoy learning about the latest security trends, vulnerabilities, and best practices to build secure and resilient systems.',
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    text: 'Building intelligent applications using Machine Learning, Deep Learning, Computer Vision, and Data Science and exploring the potential of AI to solve complex problems and improve decision-making processes. I am fascinated by the capabilities of AI and its applications in various domains, from healthcare to finance, and I am eager to contribute to the development of innovative AI solutions.',
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    text: 'Creating fast, responsive and scalable web applications with modern technologies and beautiful user experiences. I enjoy working on both the front-end and back-end aspects of web development, building robust and efficient applications that meet user needs. I am constantly learning new frameworks, libraries, and tools to enhance my skills and stay up-to-date with the latest trends in web development.',
  },
];

const stats = [
  {
    value: '10+',
    label: 'Projects',
  },
  {
    value: '10+',
    label: 'Technologies',
  },
  {
    value: '4+',
    label: 'Domains',
  },
  {
    value: '2027',
    label: 'Graduation',
  },
];

export default function About() {
  return (
    <Section id="about" title="About Me">
      <FadeUp>

        <div className="grid gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <h3 className="mb-8 text-4xl font-bold text-gray-900">
              Passionate about building
              <span className="gradient-text"> secure & intelligent </span>
              software.
            </h3>

            <p className="mb-6 text-lg leading-9 text-gray-700">
              I'm <span className="font-semibold text-pink-600">Gnapika Reddy</span>,
              a Computer Science Engineering student with interests spanning
              Cybersecurity, Artificial Intelligence, Data Science,
              Full Stack Development and Game Development.
            </p>

            <p className="mb-6 text-lg leading-9 text-gray-700">
              I enjoy transforming ideas into real applications that are
              secure, scalable and user-friendly while continuously learning
              modern technologies. I love exploring new domains, solving complex problems, and building innovative solutions that make a positive impact on people's lives.
            </p>

            <p className="text-lg leading-9 text-gray-700">
              My goal is to become a Software Engineer building impactful
              products that combine innovation with security. I am always open to new opportunities, collaborations, and challenges that allow me to grow as a developer and contribute to meaningful projects.
            </p>

          </div>

          {/* RIGHT */}

          <div className="grid gap-6">

            {cards.map((card) => {

              const Icon = card.icon;

              return (

                <div
                  key={card.title}
                  className="glass rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(236,72,153,.18)]"
                >

                  <Icon
                    size={34}
                    className="mb-5 text-pink-500"
                  />

                  <h3 className="mb-3 text-2xl font-bold text-gray-900">
                    {card.title}
                  </h3>

                  <p className="leading-8 text-gray-600">
                    {card.text}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

        {/* STATS */}

        <div className="mt-24 grid grid-cols-2 gap-6 md:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.label}
              className="glass rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(236,72,153,.15)]"
            >

              <h2 className="gradient-text text-5xl font-black">
                {item.value}
              </h2>

              <p className="mt-3 font-medium text-gray-600">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </FadeUp>
    </Section>
  );
}