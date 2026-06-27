export default function GlassCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      backdrop-blur-2xl
      shadow-2xl
    "
    >
      {children}
    </div>
  );
}