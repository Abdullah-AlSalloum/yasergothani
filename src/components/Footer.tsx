import React from "react";
import { EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/solid';
import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => (
  <footer className="bg-gradient-to-tr from-[#113c56] to-[#4c6d83] text-white pt-12 pb-4 px-4 md:px-0 sm:items-center">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 border-b border-white/10 pb-8 text-center md:text-right">
    {/* Logo & About */}
      <div className="flex flex-col items-center md:items-start">
        <img src="/logo.svg" alt="yaser01 logo" className="h-12 mb-2" />
        <p className="text-sm mb-4 text-center md:text-right">نحوّل تواجدك الرقمي إلى آلية مبيعات فعّالة من خلال استراتيجيات تسويقية مبتكرة ومهيئة للنجاح.</p>
        <div className="flex gap-3 mt-2">
          <Link href="#" aria-label="Instagram" className="hover:text-yellow-400"><i className="fab fa-instagram text-xl"></i></Link>
          <Link href="#" aria-label="LinkedIn" className="hover:text-yellow-400"><i className="fab fa-linkedin text-xl"></i></Link>
          <Link href="#" aria-label="Twitter" className="hover:text-yellow-400"><i className="fab fa-twitter text-xl"></i></Link>
          <Link href="#" aria-label="Facebook" className="hover:text-yellow-400"><i className="fab fa-facebook text-xl"></i></Link>
        </div>
        <div className="flex justify-center md:justify-start mt-6">
          <a
            href="#solutions"
            className="group relative inline-flex items-center justify-center gap-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-primary font-extrabold py-3 px-6 rounded-xl text-center shadow-xl hover:from-yellow-500 hover:to-yellow-400 hover:scale-[1.03] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            style={{ boxShadow: '0 4px 24px 0 rgba(252, 212, 16, 0.18)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
            </svg>
            ابدأ من هنا
          </a>
        </div>
      </div>
      {/* Quick Links */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
        <ul className="space-y-2 text-sm">
          <li><Link href="#methodology" className="hover:underline">الخدمات</Link></li>
          <li><Link href="#calltoaction" className="hover:underline">اتصل بنا</Link></li>
          <li><Link href="#about" className="hover:underline">من نحن</Link></li>
          <li><Link href="#tools" className="hover:underline">أدوات متطورة</Link></li>
          <li><Link href="#resources" className="hover:underline">مصادر مجانية</Link></li>
        </ul>
      </div>
      
      {/* Services */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="font-bold text-lg mb-4">خدماتنا</h3>
        <ul className="space-y-2 text-sm">
          <li><Link href="#" className="hover:underline">إدارة الحملات</Link></li>
          <li><Link href="#" className="hover:underline">تطوير المحتوى</Link></li>
          <li><Link href="#" className="hover:underline">الاستشارات الاستراتيجية</Link></li>
          <li><Link href="#" className="hover:underline">جميع الخدمات</Link></li>
        </ul>
      </div>
      {/* Contact */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
        <div className="flex flex-col items-center gap-3 mt-2">
          <a
            href="https://wa.me/963958956397"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-green-500 text-white font-extrabold py-2 px-20 rounded-xl text-center shadow-xl hover:from-green-500 hover:to-green-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
            style={{ boxShadow: '0 4px 24px 0 rgba(52, 211, 153, 0.18)' }}
          >
            <i className="fab fa-whatsapp text-2xl"></i>
            واتساب
          </a>
          <div className="flex gap-8 justify-center">
            <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-200">
              <FacebookIcon fontSize="large" />
            </a>
            <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-200">
              <InstagramIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-4 text-xs text-white/70 gap-2 text-center">
      <div className="w-full md:w-auto">جميع الحقوق محفوظة &copy; yaser01 2026</div>
      <div className="flex gap-4 w-full md:w-auto justify-center md:justify-end">
        <Link href="#" className="hover:underline">سياسة الخصوصية</Link>
        <Link href="#" className="hover:underline">شروط الخدمة</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
