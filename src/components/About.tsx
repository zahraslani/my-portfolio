const highlights = [
  {
    title: 'تحصیلات',
    text: 'کارشناسی ارشد مهندسی نرم‌افزار - دانشگاه اصفهان',
  },
  {
    title: 'دوره‌ها',
    text: 'دوره‌ی امنیت اپلیکیشن - شرکت خدمات انفورماتیک',
  },
  {
    title: 'تمرکز فعلی',
    text: 'Vue 3، TypeScript و ساخت رابط‌های کاربری ریسپانسیو',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          درباره من
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 text-gray-600 leading-relaxed space-y-4">
            <p>
              کارشناسی ارشد مهندسی نرم‌افزار دارم و حالا به‌صورت جدی در حوزه‌ی
              فرانت‌اند کار می‌کنم. بیشتر با Vue 3 و TypeScript پروژه ساخته‌ام و
              علاقه دارم دیزاین را به رابط‌های تمیز و کاربرپسند تبدیل کنم.
            </p>
            <p>
              در پروژه‌هایم با مدیریت state با Pinia، روتینگ و کار با APIهای
              مختلف سروکار داشته‌ام. دوره‌ی امنیت اپلیکیشن هم باعث شده موقع
              نوشتن کد به امنیت وب توجه بیشتری داشته باشم.
            </p>
            <p>
              سعی می‌کنم کدی بنویسم که برای بقیه‌ی توسعه‌دهنده‌ها خوانا و
              قابل‌نگهداری باشد، و با React هم در حال آشنایی هستم.
            </p>
          </div>

          <ul className="flex-1 w-full grid grid-cols-1 gap-4">
            {highlights.map((h) => (
              <li
                key={h.title}
                className="bg-indigo-50 p-6 rounded-lg border border-indigo-100"
              >
                <h3 className="font-bold text-gray-900 mb-1">{h.title}</h3>
                <p className="text-sm text-gray-600">{h.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}