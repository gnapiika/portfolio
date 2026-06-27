"use client";

import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: false,
        },

        background: {
          color: "transparent",
        },

        particles: {
          number: {
            value: 60,
          },

          color: {
            value: "#ffffff",
          },

          opacity: {
            value: 0.5,
          },

          size: {
            value: 3,
          },

          move: {
            enable: true,
            speed: 1,
          },

          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}