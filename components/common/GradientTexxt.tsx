interface Props {
  children: React.ReactNode;
}

export default function GradientText({ children }: Props) {
  return (
    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
      {children}
    </span>
  );
}