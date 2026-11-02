import { useState } from 'react';

const links = [
  { href: '#about', label: 'درباره من' },
  { href: '#skills', label: 'مهارت‌ها' },
  { href: '#projects', label: 'پروژه‌ها' },
  { href: '#contact', label: 'تماس' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full backdrop-blur-md shadow-sm z-50 ${open ? 'bg-white' : 'bg-white/80'}`}>
      <nav
        aria-label="ناوبری اصلی"
        className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center"
      >
        <a href="#top" className="text-xl font-bold text-gray-800">
          زهرا اصلانی
        </a>

        <ul className="hidden md:flex items-center gap-x-8 text-gray-600">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2"
          aria-label="باز و بسته کردن منو"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden px-4 pb-4 flex flex-col gap-y-3 text-gray-700">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}