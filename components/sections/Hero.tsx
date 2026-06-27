import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">

      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl w-full mx-auto">

        {/* LEFT SIDE - TEXT */}
        <div className="text-center md:text-left">

          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Gnapika Reddy
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-400">
            Cybersecurity • AI • Data Science • Full Stack Developer
          </p>

          <p className="mt-6 text-gray-500 max-w-xl">
            Building secure, intelligent, and scalable systems with a focus on
            real-world impact and modern web technologies.
          </p>

          {/* Scroll hint */}
          <p className="mt-10 text-sm text-gray-500 animate-pulse">
            Scroll to explore ↓
          </p>

        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex justify-center md:justify-end">

          <div className="group transition duration-500 hover:scale-105 hover:rotate-1">

            <Image
              src="/images/profile.jpeg"
              alt="Gnapika Profile"
              width={380}
              height={380}
              className="rounded-2xl object-cover shadow-2xl border border-white/10 transition duration-500 group-hover:shadow-cyan-500/20"
            />

          </div>

        </div>

      </div>

    </section>
  );
}