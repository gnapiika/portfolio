import Section from '@/components/common/Section';
import FadeUp from '@/components/common/FadeUp';

const categories = [
  {
    title: 'Cybersecurity',
    
    skills: [
      'Network Security',
      'Ethical Hacking',
      'Digital Forensics',
      'Wireshark',
      'Kali Linux',
      'Nmap',
    ],
  },
  {
    title: 'Artificial Intelligence',
    
    skills: [
      'Machine Learning',
      'Deep Learning',
      'TensorFlow',
      'PyTorch',
      'OpenCV',
      'Scikit-Learn',
      'Computer Vision',
    ],
  },
  {
    title: 'Full Stack Development',
    
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'REST APIs',
    ],
  },
  {
    title: 'Programming',
    
    skills: [
      'Python',
      'Java',
      'C++',
      'JavaScript',
      'SQL',
      'Git',
      'GitHub',
    ],
  },
  {
    title: 'Data Science',
    
    skills: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Data Analysis',
      'Data Visualization',
      'Feature Engineering',
    ],
  },
  {
    title: 'Game Development',
    
    skills: [
      'Unity (CyberPunk-Hacking-Simulator)',
      'Unreal Engine',
      'Blender',
      'Game Physics',
      'Level Design',
      'C#',
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <FadeUp>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {categories.map((category) => (

            <div
              key={category.title}
              className="glass rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(236,72,153,.18)]"
            >

              <div className="mb-6 flex items-center gap-3">

                <span className="text-4xl">
                  
                </span>

                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>

              </div>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                    rounded-full
                    bg-pink-100
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-pink-700
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:bg-pink-500
                    hover:text-white
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </FadeUp>
    </Section>
  );
}