interface Skill {
  name: string;
  note?: string;
}

const groups: { title: string; skills: Skill[] }[] = [
  {
    title: 'پایه',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript (ES6+)' },
      { name: 'TypeScript' },
    ],
  },
  {
    title: 'فریمورک و کتابخانه',
    skills: [
      { name: 'Vue 3' },
      { name: 'Pinia' },
      { name: 'Vue Router' },
      { name: 'Tailwind CSS' },
      { name: 'React', note: 'آشنایی' },
    ],
  },
  {
    title: 'ابزار',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Vite' },
      { name: 'REST API' },
      { name: 'Chart.js' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          مهارت‌ها
        </h2>
        <div className="space-y-8">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                {g.title}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {g.skills.map((s) => (
                  <li
                    key={s.name}
                    className="bg-indigo-50 border border-indigo-100 rounded-lg px-4 py-2 text-gray-800"
                  >
                    {s.name}
                    {s.note && (
                      <span className="text-sm text-gray-500 mr-2">({s.note})</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}