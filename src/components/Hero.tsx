export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-svh flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white pt-20 px-4"
    >
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          زهرا اصلانی
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium mb-6">
          توسعه‌دهنده فرانت‌اند
        </p>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          کارشناسی ارشد مهندسی نرم‌افزار دارم و با Vue 3، TypeScript و Tailwind
          رابط‌های کاربری ریسپانسیو می‌سازم. با React هم آشنا هستم.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            مشاهده پروژه‌ها
          </a>
          <a
            href="/zaresume.pdf"
            download
            className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            دانلود رزومه
          </a>
        </div>
      </div>
    </section>
  );
}