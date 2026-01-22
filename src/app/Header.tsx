import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-8 bg-primary-light">
      {/* Logo or Site Name */}
      <div className="flex items-center gap-2">
        {/* Replace with your logo if available */}
        <Image src="/logo.svg" alt="الشعار" width={40} height={40} />
        <span className="font-bold text-2xl text-primary">اسم الموقع</span>
      </div>
      {/* Navigation */}
      <nav>
        <ul className="flex gap-6 text-lg font-bold text-primary">
          <li><a href="#services" className="hover:text-accent transition">الخدمات</a></li>
          <li><a href="#contact" className="hover:text-accent transition">اتصل بنا</a></li>
          <li><a href="#about" className="hover:text-accent transition">من نحن</a></li>
          <li><a href="#tools" className="hover:text-accent transition">أدوات متطورة</a></li>
          <li><a href="#resources" className="hover:text-accent transition">مصادر مجانية</a></li>
        </ul>
      </nav>
    </header>
  );
}
