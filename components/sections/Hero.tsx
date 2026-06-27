import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      {/* Profile Image */}
      <div className="mb-6">
        <Image
          src="/images/profile.jpeg"
          alt="Gnapika Profile"
          width={160}
          height={160}
          className="rounded-full object-cover border border-white/20 shadow-lg"
        />
      </div>

      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-bold text-white">
        Gnapika Reddy
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-lg md:text-xl text-gray-400">
        Cybersecurity • AI • Data Science • Full Stack Developer
      </p>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-gray-500">
        Building secure, intelligent, and scalable systems with a focus on
        real-world impact and modern web technologies.
      </p>

      {/* Scroll hint */}
      <p className="mt-10 text-sm text-gray-500 animate-pulse">
        Scroll to explore ↓
      </p>

    </section>
  );
}