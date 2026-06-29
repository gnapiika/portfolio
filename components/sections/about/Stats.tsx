const stats = [
  {
    number: '10+',
    label: 'Projects',
  },
  {
    number: '10+',
    label: 'Technologies',
  },
  {
    number: '4+',
    label: 'Domains',
  },
  {
    number: '2027',
    label: 'Graduation',
  },
];

export default function Stats() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="glass rounded-2xl p-6 text-center"
        >
          <h3 className="text-4xl font-black text-cyan-400">
            {stat.number}
          </h3>

          <p className="mt-2 text-gray-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}