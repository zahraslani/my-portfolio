const contacts = [
  { label: 'ایمیل', href: 'mailto:zaraaslani95@gmail.com', external: false },
  { label: 'لینکدین', href: 'https://linkedin.com/in/zaraslani', external: true },
  { label: 'گیت‌هاب', href: 'https://github.com/zahraslani', external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">تماس با من</h2>
        <p className="text-gray-600 mb-12">
          اگر به همکاری، استخدام یا گرفتن پروژه علاقه‌مند هستید، خوشحال می‌شوم با من در ارتباط باشید.
        </p>

        <ul className="flex flex-col sm:flex-row justify-center gap-6">
          {contacts.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-center bg-white px-8 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-700 font-medium border border-gray-200 focus-visible:ring-2 focus-visible:ring-primary"
              >
                {c.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-gray-500 text-sm mt-8">zaraaslani95@gmail.com</p>
      </div>
    </section>
  );
}