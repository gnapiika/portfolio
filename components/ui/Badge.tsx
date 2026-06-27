import { Circle } from 'lucide-react';

export default function Badge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm">
      <Circle
        size={10}
        fill="#22c55e"
        className="text-green-500"
      />

      Open to Internships & Freelance
    </div>
  );
}