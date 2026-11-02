const skills = [
  { name: "HTML5", level: "پیشرفته" },
  { name: "CSS3", level: "پیشرفته" },
  { name: "JavaScript (ES6+)", level: "پیشرفته" },
  { name: "TypeScript", level: "متوسط" },
  { name: "Vue.js", level: "پیشرفته" },
  { name: "React.js", level: "در حال یادگیری" },
  { name: "Tailwind CSS", level: "متوسط" },
  { name: "Git & GitHub", level: "متوسط" },
  { name: "Vite", level: "متوسط" },
  { name: "REST API", level: "متوسط" },
  { name: "Pinia", level: "متوسط" },
  { name: "Chart.js", level: "متوسط" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          مهارت‌ها
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
            >
              <p className="font-semibold text-gray-800">{skill.name}</p>
              <p className="text-sm text-primary mt-1">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}