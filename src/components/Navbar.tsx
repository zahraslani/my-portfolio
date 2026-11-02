export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-gray-800">
          زهرا اصلانی
        </a>
        <div className="hidden md:flex items-center gap-x-8 text-gray-600">
          <a href="#about" className="hover:text-primary transition-colors">درباره من</a>
          <a href="#skills" className="hover:text-primary transition-colors">مهارت‌ها</a>
          <a href="#projects" className="hover:text-primary transition-colors">پروژه‌ها</a>
          <a href="#contact" className="hover:text-primary transition-colors">تماس</a>
        </div>
      </div>
    </nav>
  );
}