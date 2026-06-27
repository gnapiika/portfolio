interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-4xl font-bold">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}