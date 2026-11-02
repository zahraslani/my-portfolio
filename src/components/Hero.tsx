export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white pt-20 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          زهرا اصلانی
        </h1>
        <h2 className="text-xl md:text-2xl text-primary font-medium mb-6">
          توسعه‌دهنده فرانت‌اند
        </h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          من عاشق تبدیل ایده‌ها و دیزاین‌ها به رابط‌های کاربری سریع، ریسپانسیو و تمیزم. 
          با Vue و React کار می‌کنم و همیشه دنبال یادگیری تکنولوژی‌های جدید هستم.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects" className=" bg-primary text-white px-8 py-3 rounded-lg hover:bg-indigo-600 transition-colors">
            مشاهده پروژه‌ها
          </a>
          <a href="/Resume.pdf" download className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
           دانلود رزومه
          </a>
        </div>
      </div>
    </section>
  );
}