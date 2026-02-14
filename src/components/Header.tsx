"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

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
        <div className="text-white text-2xl font-bold whitespace-nowrap order-1 md:order-3 md:ml-auto">
          اسم الموقع
        </div>
        {/* Nav links: right on desktop, left on mobile */}
        <div className="flex-1 flex justify-end md:justify-start order-2 md:order-1">
          <ul className="hidden md:flex flex-row-reverse gap-2 text-white text-lg">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 rounded transition hover:bg-white/20 scroll-smooth"
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                href="#solutions"
                className="block px-4 py-2 rounded transition hover:bg-white/20 scroll-smooth"
              >
                الخدمات
              </Link>
            </li>
             <li>
              <Link
                href="/ip-protection"
                className="block px-4 py-2 rounded transition hover:bg-white/20"   
              >
                حماية الملكية الفكرية
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="block px-4 py-2 rounded transition hover:bg-white/20"
              >
                مصادر مجانية
              </Link>
            </li>
             <li>
              <Link
                href="#tools"
                className="block px-4 py-2 rounded transition hover:bg-white/20"
              >
                أدوات متطورة
              </Link>
            </li>
            <li>
              <Link
                href="#calltoaction"
                className="block px-4 py-2 rounded transition hover:bg-white/20"
              >
                اتصل بنا
              </Link>
            </li>
            <li>
              <Link
                href="/mystory"
                className="block px-4 py-2 rounded transition hover:bg-white/20"
              >
                قصتي
              </Link>
            </li>
           
           
          </ul>
        </div>
        {/* Burger menu last (mobile and desktop) */}
        <button
          className="md:hidden text-white ml-4 order-3 md:order-3"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="فتح القائمة"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
            />
          </svg>
        </button>
      </nav>
      {/* Mobile nav menu with animation and delayed unmount */}
      <AnimatePresence>
        {showMenu && (
          <>
            {/* Overlay closes pointer-events immediately on close */}
            {menuOpen && (
              <motion.div
                key="overlay"
                className="md:hidden fixed inset-0 z-50 bg-black/30 pointer-events-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setMenuOpen(false)}
                aria-label="إغلاق القائمة عند النقر بالخارج"
              />
            )}
            {/* Animated mobile menu */}
            <motion.div
              key="menu"
              className="md:hidden fixed top-15 right-0 left-0 z-50 bg-[#11425C] px-4 pt-6 pb-6 shadow-lg"
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 32,
                duration: 0.35,
              }}
              style={{ transitionProperty: "opacity, transform" }}
            >
              <ul className="flex flex-col gap-2 text-white text-lg">
                <li>
                  <Link
                    href="/"
                    className="block w-full px-4 py-2 rounded transition hover:bg-white/20"
                    onClick={() => setMenuOpen(false)}
                  >
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    href="#methodology"
                    className="block w-full px-4 py-2 rounded transition hover:bg-white/20"
                    onClick={() => setMenuOpen(false)}
                  >
                    الخدمات
                  </Link>
                </li>
                 <li>
                  <Link
                    href="/ip-protection"
                    className="block w-full px-4 py-2 rounded transition hover:bg-white/20"
                    onClick={() => setMenuOpen(false)}
                  >
                    حماية الملكية الفكرية
                  </Link>
                </li>
                <li>
                  <Link
                    href="#resources"
                    className="block w-full px-4 py-2 rounded transition hover:bg-white/20"
                    onClick={() => setMenuOpen(false)}
                  >
                    مصادر مجانية
                  </Link>
                </li>
                <li>
                  <Link
                    href="#tools"
                    className="block w-full px-4 py-2 rounded transition hover:bg-white/20"
                    onClick={() => setMenuOpen(false)}
                  >
                    أدوات متطورة
                  </Link>
                </li>
                <li>
                  <Link
                    href="#calltoaction"
                    className="block w-full px-4 py-2 rounded transition hover:bg-white/20"
                    onClick={() => setMenuOpen(false)}
                  >
                    اتصل بنا
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mystory"
                    className="block w-full px-4 py-2 rounded transition hover:bg-white/20"
                    onClick={() => setMenuOpen(false)}
                  >
                    قصتي
                  </Link>
                </li>
                
                
                
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
