import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">

        {/* LEFT SIDE - IMAGE */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/profile.jpeg"
            alt="Gnapika Profile"
            width={380}
            height={380}
            className="object-cover shadow-2xl border border-white/10"
          />
        </div>

        {/* RIGHT SIDE - TEXT */}
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

      </div>

    </section>
  );
}