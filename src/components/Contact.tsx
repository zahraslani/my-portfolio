export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">تماس با من</h2>
        <p className="text-gray-600 mb-12">
          اگر به همکاری، استخدام یا گرفتن پروژه علاقه‌مند هستید، خوشحال می‌شوم با من در ارتباط باشید.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="mailto:zaraaslani95@gmail.com" className="flex items-center justify-center gap-2 bg-white px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-700 font-medium border border-gray-200">
            ایمیل: zaraaslani95@gmail.com
          </a>
          <a href="https://linkedin.com/in/zaraslani" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-700 font-medium border border-gray-200">
            لینکدین
          </a>
          <a href="https://github.com/zahraslani" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-700 font-medium border border-gray-200">
            گیت‌هاب
          </a>
        </div>
      </div>
    </section>
  );
}