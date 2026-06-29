export default function GlassCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
      rounded-[32px]
      bg-white/60
      border border-white
      backdrop-blur-3xl
      shadow-[0_25px_60px_rgba(236,72,153,.18)]
      p-8
      transition-all
      duration-500
      hover:-translate-y-2
      "
    >
      {children}
    </div>
  );
}