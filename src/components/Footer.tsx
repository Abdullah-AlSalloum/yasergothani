import React from "react";
import { EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/solid';
import Link from "next/link";

const Footer = () => (
  <footer className="bg-gradient-to-tr from-[#113c56] to-[#4c6d83] text-white pt-12 pb-4 px-4 md:px-0">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 border-b border-white/10 pb-8">
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
      </div>
      {/* Quick Links */}
      <div>
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
      <div>
        <h3 className="font-bold text-lg mb-4">خدماتنا</h3>
        <ul className="space-y-2 text-sm">
          <li><Link href="#" className="hover:underline">إدارة الحملات</Link></li>
          <li><Link href="#" className="hover:underline">تطوير المحتوى</Link></li>
          <li><Link href="#" className="hover:underline">الاستشارات الاستراتيجية</Link></li>
          <li><Link href="#" className="hover:underline">جميع الخدمات</Link></li>
        </ul>
      </div>
      {/* Contact */}
      <div>
        <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2"><EnvelopeIcon className="h-5 w-5 text-blue-300" /> info@yaser01.com</li>
          <li className="flex items-center gap-2"><PhoneIcon className="h-5 w-5 text-blue-300" /> +966 50 000 0000</li>
          <li className="flex items-center gap-2"><ClockIcon className="h-5 w-5 text-blue-300" /> الأحد - الخميس، 9 صباحاً - 6 مساءً</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-4 text-xs text-white/70 gap-2">
       <div>جميع الحقوق محفوظة &copy; yaser01 2026</div>
      <div className="flex gap-4">
        <Link href="#" className="hover:underline">سياسة الخصوصية</Link>
        <Link href="#" className="hover:underline">شروط الخدمة</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
