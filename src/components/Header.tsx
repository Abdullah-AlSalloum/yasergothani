'use client';
import { useState, useEffect } from "react";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      setShowMenu(true);
    } else if (showMenu) {
      // Wait for animation to finish before unmounting
      const timeout = setTimeout(() => setShowMenu(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [menuOpen]);

  return (
    <header className="bg-[#11425C] py-4 sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between max-w-6xl px-4 flex-row-reverse md:flex-row">
        {/* Logo: left on desktop, right on mobile */}
        <div className="text-white text-2xl font-bold whitespace-nowrap order-1 md:order-3 md:ml-auto">اسم الموقع</div>
        {/* Nav links: right on desktop, left on mobile */}
        <div className="flex-1 flex justify-end md:justify-start order-2 md:order-1">
          <ul className="hidden md:flex flex-row-reverse gap-2 text-white text-lg">
            <li>
              <a href="#methodology" className="block px-4 py-2 rounded transition hover:bg-white/20 scroll-smooth">الخدمات</a>
            </li>
            <li>
              <a href="#contact" className="block px-4 py-2 rounded transition hover:bg-white/20">اتصل بنا</a>
            </li>
            <li>
              <a href="#about" className="block px-4 py-2 rounded transition hover:bg-white/20">من نحن</a>
            </li>
            <li>
              <a href="#tools" className="block px-4 py-2 rounded transition hover:bg-white/20">أدوات متطورة</a>
            </li>
            <li>
              <a href="#resources" className="block px-4 py-2 rounded transition hover:bg-white/20">مصادر مجانية</a>
            </li>
          </ul>
        </div>
        {/* Burger menu last (mobile and desktop) */}
        <button
          className="md:hidden text-white ml-4 order-3 md:order-3"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="فتح القائمة"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        </button>
      </nav>
      {/* Mobile nav menu with animation and delayed unmount */}
      {showMenu && (
        <>
          {/* Overlay closes pointer-events immediately on close */}
          {menuOpen && (
            <div
              className="md:hidden fixed inset-0 z-50 bg-black/30 opacity-100 transition-opacity duration-300 pointer-events-auto"
              onClick={() => setMenuOpen(false)}
              aria-label="إغلاق القائمة عند النقر بالخارج"
            />
          )}
          {/* Menu animates out visually, but overlay is gone */}
          <div
            className={`md:hidden fixed top-15 right-0 left-0 z-50 bg-[#11425C] px-4 pt-6 pb-6 shadow-lg transition-all duration-300
              ${menuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-8 opacity-0 pointer-events-none'}`}
            style={{ transitionProperty: 'opacity, transform' }}
          >
            <ul className="flex flex-col gap-2 text-white text-lg">
              <li>
                <a href="#methodology" className="block w-full px-4 py-2 rounded transition hover:bg-white/20" onClick={() => setMenuOpen(false)}>الخدمات</a>
              </li>
              <li>
                <a href="#contact" className="block w-full px-4 py-2 rounded transition hover:bg-white/20" onClick={() => setMenuOpen(false)}>اتصل بنا</a>
              </li>
              <li>
                <a href="#about" className="block w-full px-4 py-2 rounded transition hover:bg-white/20" onClick={() => setMenuOpen(false)}>من نحن</a>
              </li>
              <li>
                <a href="#tools" className="block w-full px-4 py-2 rounded transition hover:bg-white/20" onClick={() => setMenuOpen(false)}>أدوات متطورة</a>
              </li>
              <li>
                <a href="#resources" className="block w-full px-4 py-2 rounded transition hover:bg-white/20" onClick={() => setMenuOpen(false)}>مصادر مجانية</a>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
