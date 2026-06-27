interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  title,
  children,
}: SectionProps) {
  return (
    <section id={id} className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-5xl font-black">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>

        {children}
      </div>
    </section>
  );
}