'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

import AnimatedBackground from '@/components/effects/AnimatedBackground';
import MouseSpotlight from '@/components/effects/MouseSpotlight';

export default function Hero() {
  return (
    <>
      <MouseSpotlight />

      <section className="relative flex min-h-screen items-center overflow-hidden px-6">

        <AnimatedBackground />

        <div className="mx-auto grid max-w-7xl items-center gap-24 md:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
          >
            <h1 className="text-6xl font-black leading-tight md:text-8xl">
              <span className="gradient-text">
                Gnapika
              </span>

              <br />

              <span className="text-slate-900">
                Reddy
              </span>
            </h1>

            <h2 className="mt-8 text-2xl font-semibold leading-relaxed text-slate-700">
              Cybersecurity • AI • Data Science
              <br />
              Full Stack Development • Game Development
            </h2>

            <p className="mt-10 max-w-xl text-xl leading-10 text-slate-600">
              Computer Science Engineering student passionate about building
              secure, intelligent and scalable software using Artificial
              Intelligence, Cybersecurity, Data Science and modern web
              technologies.
            </p>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="flex justify-center"
          >
            <div className="rounded-[36px] border border-white bg-white/60 p-5 backdrop-blur-3xl shadow-[0_25px_70px_rgba(236,72,153,.18)]">

              <Image
                src="/images/profile.jpeg"
                alt="Gnapika Reddy"
                width={430}
                height={430}
                priority
                className="rounded-[28px] object-cover"
              />

            </div>
          </motion.div>

        </div>

      </section>
    </>
  );
}