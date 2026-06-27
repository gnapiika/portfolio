'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

import AnimatedBackground from '../effects/AnimatedBackground';
import MouseSpotlight from '../effects/MouseSpotlight';
import FloatingTech from '../ui/FloatingTech';
import GlassCard from '../ui/GlassCard';
import MagneticButton from '../ui/MagneticButton';

export default function Hero() {
  return (
    <>
      <MouseSpotlight />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

        <AnimatedBackground />
        <FloatingTech />

        <div className="grid max-w-7xl grid-cols-1 items-center gap-20 md:grid-cols-2">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="mb-5 text-lg text-blue-400">
              Hello, I'm
            </p>

            <h1 className="mb-6 text-7xl font-black leading-none md:text-9xl">
              Gnapika
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Reddy
              </span>
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-8 text-gray-400">
              Passionate Computer Science student specializing in
              Cybersecurity, Artificial Intelligence, Data Science,
              Full Stack Development, and Game Development.
              I build secure, scalable and intelligent software solutions.
            </p>

            <div className="flex flex-wrap gap-5">

              <MagneticButton>
                View Projects
              </MagneticButton>

              <MagneticButton>
                Contact Me
              </MagneticButton>

            </div>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="flex justify-center"
          >

            <GlassCard>

              <Image
                src="/images/profile.jpeg"
                alt="Gnapika Reddy"
                width={350}
                height={350}
                priority
                className="rounded-3xl object-cover"
              />

            </GlassCard>

          </motion.div>

        </div>

      </section>
    </>
  );
}