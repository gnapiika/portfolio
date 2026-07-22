import Section from '@/components/common/Section';

export default function Contact() {
  return (
    <Section id="contact" title="Let's Connect">
      <div className="glass rounded-3xl p-10 text-center">
        <h3 className="mb-5 text-3xl font-bold">
          Let's Build Something Amazing and Make a Difference Together! I am always open to new opportunities and collaborations, so feel free to reach out to me. Whether you have a project in mind, want to discuss potential partnerships, or simply want to connect and share ideas, I would love to hear from you. Let's work together to create innovative solutions that make a positive impact in the world.
        </h3>

        <p className="mb-8 text-gray-400">
          I'm currently open to internships, freelance work, research
          collaborations, and exciting software development opportunities. The best way to reach me is through email, and I will do my best to respond promptly. I look forward to connecting with you and exploring how we can work together to create innovative solutions and make a positive impact in the world. Let's do it!
        </p>

        <div className="flex justify-center gap-8 flex-wrap">
          {/* Email */}
          <a
            href="mailto:gnapiika@gmail.com"
            className="transition hover:text-cyan-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16v16H4z" />
              <path d="M4 4l8 8 8-8" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/gnapiika"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 5 3.2 9.2 7.6 10.7.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.9 2.8 1.3.1-.7.4-1.2.8-1.5-2.5-.3-5.1-1.2-5.1-5.3 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .9a10.5 10.5 0 0 1 5.4 0c2.1-1.2 3-.9 3-.9.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3 0 4.1-2.6 5-5.1 5.3.5.4.9 1.2.9 2.5v3.7c0 .3.2.7.8.6 4.4-1.5 7.6-5.7 7.6-10.7C23.2 5.4 18.3.5 12 .5z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/gnapiika"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 4h4v16H4zM6 2a2 2 0 110 4 2 2 0 010-4zm6 6h4v2h.1c.6-1 2-2 4-2 4 0 4.9 2.6 4.9 6v8h-4v-7c0-1.7 0-3-2-3s-2 1.5-2 3v7h-4V8z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/ignapika"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-pink-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a1 1 0 110 2 1 1 0 010-2zm-5 3a6 6 0 110 12 6 6 0 010-12z" />
            </svg>
          </a>
        </div>
      </div>
    </Section>
  );
}