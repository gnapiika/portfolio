import Section from "@/components/common/Section";

export default function About() {
  return (
    <Section id="about" title="About Me">

      {/* ABOUT TEXT */}
      <p className="text-gray-400 max-w-3xl leading-relaxed">
        I am a Computer Science student specializing in Cybersecurity, AI,
        Data Science, and Full Stack Development. I enjoy building secure
        systems and intelligent applications that solve real-world problems.
      </p>

      {/* GAP BETWEEN TEXT AND STATS (IMPORTANT FIX YOU ASKED) */}
      <div className="mt-14"></div>

      {/* STATS SECTION */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

        <div className="p-3 transition hover:scale-105">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            15+
          </h3>
          <p className="text-gray-400 mt-3">Projects</p>
        </div>

        <div className="p-3 transition hover:scale-105">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            10+
          </h3>
          <p className="text-gray-400 mt-3">Technologies</p>
        </div>

        <div className="p-3 transition hover:scale-105">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            5
          </h3>
          <p className="text-gray-400 mt-3">Domains</p>
        </div>

        <div className="p-3 transition hover:scale-105">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            2027
          </h3>
          <p className="text-gray-400 mt-3">Graduation</p>
        </div>

      </div>

    </Section>
  );
}