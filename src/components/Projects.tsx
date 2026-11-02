const projects = [
  {
    title: "داشبورد مدیریت (Vue)",
    description: "داشبورد مدیریتی ریسپانسیو با نمودارهای تعاملی و جدول داده‌ها",
    tech: ["Vue 3", "TypeScript", "Chart.js"],
    demo: "https://vue-admin-dashboard-seven.vercel.app",
    code: "https://github.com/zahraslani/frontend-journey/tree/main/vue-admin-dashboard",
  },
  {
    title: "اپلیکیشن جستجوی فیلم (Vue)",
    description: "جستجوی فیلم با API، حالت تاریک/روشن و ذخیره‌ی علاقه‌مندی‌ها",
    tech: ["Vue 3", "TypeScript", "Pinia"],
    demo: "https://vue-movie-app-vert.vercel.app",
    code: "https://github.com/zahraslani/frontend-journey/tree/main/vue-movie-app",
  },
  {
    title: "اپلیکیشن آب‌وهوا",
    description: "جستجوی شهر با Debounce، نمایش دما و تغییر پس‌زمینه بر اساس آب‌وهوا",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://weather-app-zahra.vercel.app",
    code: "https://github.com/zahraslani/frontend-journey/tree/main/weather",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          پروژه‌ها
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-indigo-50 text-primary text-xs px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-6 flex gap-4">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium hover:underline">
                  مشاهده دمو
                </a>
                <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm font-medium hover:underline">
                  کد گیت‌هاب
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}