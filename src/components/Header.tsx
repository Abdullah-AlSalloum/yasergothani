"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [hash, setHash] = useState("");
  const pathname = usePathname();
  const isIpProtectionRoute = pathname?.startsWith("/Copyright-wthiiq");
  const headerBgClass = isIpProtectionRoute ? "bg-[#1a604f]" : "bg-[#11425C]";
  const isServicesActive = pathname === "/" && hash === "#solutions";

  const linkBaseClass = "block px-4 py-2 rounded transition border-b-2 border-transparent";
  const activeClass = "text-white font-bold border-b-[#fcd410]";
  const inactiveClass = "text-white hover:bg-white/20";

  const getLinkClass = (isActive: boolean) =>
    `${linkBaseClass} ${isActive ? activeClass : inactiveClass}`;

  useEffect(() => {
    if (menuOpen) {
      setShowMenu(true);
    } else if (showMenu) {
      // Wait for animation to finish before unmounting
      const timeout = setTimeout(() => setShowMenu(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [menuOpen]);

  useEffect(() => {
    const syncHash = () => {
      if (typeof window !== "undefined") {
        setHash(window.location.hash || "");
      }
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  return (
    <header className={`${headerBgClass} py-4 sticky top-0 z-50`}>
      <nav className="container mx-auto flex items-center justify-between max-w-6xl px-4 [direction:ltr]">
        {/* Burger menu: left on mobile only */}
        <button
          className="block min-[924px]:hidden text-white ml-0 mr-4"
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
        {/* Nav links: left on desktop */}
        <div className="hidden min-[924px]:flex min-[924px]:order-1 flex-1 justify-start">
          <ul className="flex flex-row gap-2 text-white text-lg">
           
            {/* <li>
              <Link
                href="/resources"
                className={getLinkClass(pathname === "/resources")}
              >
                مصادر مجانية
              </Link>
            </li> */}
            <li>
              <Link
                href="/Copyright-wthiiq"
                className={getLinkClass(Boolean(pathname?.startsWith("/Copyright-wthiiq")))}
              >
                حماية الملكية الفكرية
              </Link>
            </li>
             <li>
              <Link
                href="/"
                className={getLinkClass(pathname === "/" || pathname === "/ads")}
              >
                إدارة الحملات الإعلانية 
              </Link>
            </li>
          </ul>
        </div>
        {/* Logo: right on desktop and mobile */}
        <div className="flex-shrink-0 pl-8 min-[924px]:order-2 min-[924px]:mr-26">
          <Link href="/">
            <img src="/logo-light.png" alt="logo" className="h-11 w-auto" />
          </Link>
        </div>
      </nav>
      {/* Mobile nav menu with animation and delayed unmount */}
      <AnimatePresence>
        {showMenu && (
          <>
            {/* Overlay closes pointer-events immediately on close */}
            {menuOpen && (
              <motion.div
                key="overlay"
                className="block min-[924px]:hidden fixed inset-0 z-50 bg-black/30 pointer-events-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setMenuOpen(false)}
                aria-label="إغلاق القائمة عند النقر بالخارج"
              />
            )}
            {/* Animated mobile/tablet menu */}
            <motion.div
              key="menu"
              className={`block min-[924px]:hidden fixed top-18 right-0 left-0 z-50 ${headerBgClass} px-4 pt-6 pb-6 shadow-lg`}
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
                    className={`block w-full px-4 py-2 rounded transition ${pathname === "/" || pathname === "/ads" ? activeClass : inactiveClass}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    إدارة الحملات الإعلانية 
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Copyright-wthiiq"
                    className={`block w-full px-4 py-2 rounded transition ${pathname?.startsWith("/Copyright-wthiiq") ? activeClass : inactiveClass}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    حماية الملكية الفكرية
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/resources"
                    className={`block w-full px-4 py-2 rounded transition ${pathname === "/resources" ? activeClass : inactiveClass}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    مصادر مجانية
                  </Link>
                </li> */}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
