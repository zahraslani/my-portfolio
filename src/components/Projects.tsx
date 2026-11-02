interface Project {
  title: string;
  description: string;
  highlight: string;
  image?: string;
  tech: string[];
  demo: string;
  code: string;
}

const projects: Project[] = [
  {
    title: "داشبورد مدیریت (Vue)",
    description: "داشبورد مدیریتی ریسپانسیو با نمودارهای تعاملی و جدول داده‌ها",
    highlight: "جدول داده با جستجو و صفحه‌بندی، و نمودار با Chart.js",
    image: "/projects/dashboard.png",
    tech: ["Vue 3", "TypeScript", "Chart.js"],
    demo: "https://vue-admin-dashboard-seven.vercel.app",
    code: "https://github.com/zahraslani/frontend-journey/tree/main/vue-admin-dashboard",
  },
  {
    title: "اپلیکیشن جستجوی فیلم (Vue)",
    description: "جستجوی فیلم با API و ذخیره‌ی علاقه‌مندی‌ها",
    highlight: "جستجوی خودکار (autocomplete) و مدیریت state با Pinia بین دو صفحه",
    image: "/projects/movie.png",
    tech: ["Vue 3", "TypeScript", "Pinia", "Vue Router", "OMDb API"],
    demo: "https://vue-movie-app-vert.vercel.app",
    code: "https://github.com/zahraslani/frontend-journey/tree/main/vue-movie-app",
  },
  {
    title: "اپلیکیشن آب‌وهوا",
    description: "جستجوی شهر، نمایش دما و تغییر پس‌زمینه بر اساس آب‌وهوا",
    highlight: "استفاده از Debounce برای کم کردن تعداد درخواست‌ها به API",
    image: "/projects/weather.png",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://weather-app-zahra.vercel.app",
    code: "https://github.com/zahraslani/frontend-journey/tree/main/weather",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          پروژه‌ها
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={`تصویر پروژه ${project.title}`}
                  loading="lazy"
                  className="w-full h-44 object-cover object-top"
                />
              )}
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                <p className="text-gray-500 text-sm mb-4">{project.highlight}</p>
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li key={t} className="bg-indigo-50 text-gray-700 text-xs px-2 py-1 rounded">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6 flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`مشاهده دموی ${project.title}`}
                  className="text-primary text-sm font-medium hover:underline focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  مشاهده دمو
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`کد گیت‌هاب ${project.title}`}
                  className="text-gray-600 text-sm font-medium hover:underline focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  کد گیت‌هاب
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}