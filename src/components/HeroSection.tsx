"use client";
import { useState, useEffect } from "react";
import EngineeringIcon from '@mui/icons-material/Engineering';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from "next/link";

const HERO_TITLES = [
  "نحوّل تواجدك الرقمي إلى مصدر نمو مستدام",
  "نراقب القراصنة ونحمي حقوق النشر",
  "ندير حملاتك الإعلانية بعقلية بناء النتائج المستدامة",
  "نبني مواقع إلكترونية تخدم أهدافك التجارية",
  "نصنع محتوى ذكي لحساباتك على وسائل التواصل",
  "نُخصّص نظام CRM متكامل يضع المبيعات تحت السيطرة",
  "ندير متجرك الإلكتروني لتحقيق نتائج متنامية",
];
const HERO_SUBTITLES = [
  "حلول تسويق رقمي متكاملة تبدأ بالتشخيص، تمر بالتنفيذ الاحترافي، وتنتهي بأرقام واضحة تساعدك على النمو بثقة.",
  "نرصد انتهاكات المحتوى، نتابع مصادر القرصنة، ونعمل على حماية حقوقك بأعلى مستوى ممكن عبر المراقبة والتوثيق والإجراءات المتاحة.",
  "نخطّط ونُدير الحملات الإعلانية على مختلف وسائل التواصل بناءً على أهدافك، مع متابعة الأداء وتحسينه بشكل مستمر.",
  "نُصمّم ونبني مواقع وصفحات هبوط تركز على الوضوح، سهولة الاستخدام، زيادة المبيعات، ودعم أهدافك التجارية.",
  "محتوى يخاطب جمهورك بالضبط ويحقق معدلات التفاعل والتحويل أفضل باستخدام استراتيجيات دقيقة تضمن وصول رسالتك التسويقية.",
  "نُصمّم نظام إدارة علاقات العملاء بشكل يتناسب مع عملك، لتنظيم البيانات، تحسين المتابعة، ودعم قرارات المبيعات.",
  "نُقدّم إدارة عملية للمتجر عبر ضبط العمليات اليومية وتحسين تجربة الشراء لدعم نمو تدريجي للمبيعات."
]

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [typedWords, setTypedWords] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setTypedWords(0);
    setCharCount(0);
    const words = HERO_TITLES[titleIndex].split(' ');
    let wordIdx = 0;
    let charIdx = 0;
    let finished = false;
    const typeInterval = setInterval(() => {
      if (wordIdx < words.length) {
        if (charIdx < words[wordIdx].length) {
          setCharCount(charIdx + 1);
          charIdx++;
        } else {
          setTypedWords(wordIdx + 1);
          charIdx = 0;
          wordIdx++;
          setCharCount(0);
        }
      } else if (!finished) {
        finished = true;
        setTimeout(() => {
          setTitleIndex((i) => (i + 1) % HERO_TITLES.length);
        }, 2000); // wait 2 seconds before next title
        clearInterval(typeInterval);
      }
    }, 80); // word typing speed
    return () => clearInterval(typeInterval);
  }, [titleIndex]);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary to-secondary-blue px-2 sm:px-2 py-8 sm:py-10">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10 px-2 sm:px-0">
        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-4 sm:gap-6 text-white max-w-xl w-full md:pr-8">
          
          <div className="relative min-h-[3.5em] w-full md:mb-15">
            {HERO_TITLES.map((title, idx) => {
              if (idx !== titleIndex) return null;
              const words = title.split(' ');
              const visible = words.slice(0, typedWords).join(' ');
              const currentWord = words[typedWords] || '';
              return (
                <h1
                  key={idx}
                  className="absolute inset-0 transition-opacity duration-800 ease-in-out text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-center md:text-right opacity-100 z-10"
                  style={{ fontFamily: "TheYearOfTheCamel, Tajawal, Arial" }}
                >
                  {visible}
                  {typedWords > 0 && ' '}
                  {currentWord.slice(0, charCount)}
                  <span className="animate-pulse">|</span>
                </h1>
              );
            })}
          </div>
          <div className="relative min-h-[3.5em] w-full">
            {HERO_SUBTITLES.map((subtitle, idx) => (
              <p
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out text-base sm:text-lg font-medium text-white/90 text-center md:text-right ${idx === titleIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                aria-hidden={idx !== titleIndex}
              >
                {subtitle}
              </p>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
            <Link
              href="#solutions"
              className="flex-1 group relative inline-flex items-center justify-center gap-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-primary font-extrabold py-3 rounded-xl text-center shadow-xl hover:from-yellow-500 hover:to-yellow-400 hover:scale-[1.03] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              style={{ boxShadow: '0 4px 24px 0 rgba(252, 212, 16, 0.18)' }}
            >
              ابدأ من هنا
            </Link>
          </div>
        </div>
        {/* Illustration or Video */}
        
        <div className="flex-1 flex justify-center w-full mb-6 md:mb-0">
          <div className="w-full flex flex-col items-center">
            <span
              className="inline-flex items-center gap-2 bg-white/20 text-secondary-blue px-4 py-1 rounded-full mb-4 font-bold shadow-sm backdrop-blur-lg animate-hero-bounce"
            >
              <EngineeringIcon className="w-5 h-5 text-yellow-400 animate-spin-sparkle" />
              مهندس الإيرادات الرقمية
            </span>
            <div
              className="rounded-2xl bg-white/10 shadow-xl w-full max-w-[420px] sm:max-w-[520px] md:max-w-[650px] min-h-[320px] sm:min-h-[420px] md:min-h-[420px] p-0 flex flex-col items-center sticky top-8 z-20 custom-hero-card"
              style={{ boxShadow: "0 6px 24px 0 rgba(44, 62, 80, 0.18)", minHeight: '420px', display: titleIndex === 0 ? undefined : 'none' }}
            >
              {/* Upper card section */}
              <div className="w-[96%] bg-white/10 rounded-xl mt-4 mb-4 flex flex-col items-center">
                {/* Browser bar with circles */}
                <div className="w-full h-4 flex items-center gap-2 pt-5 pb-5 pr-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-[#f44336]" />
                  <span className="inline-block w-3 h-3 rounded-full bg-[#ffeb3b]" />
                  <span className="inline-block w-3 h-3 rounded-full bg-[#4caf50]" />
                </div>
                {/* Content lines */}
                <div className="w-full flex flex-col gap-2 p-2 sm:p-4 pb-6">
                  <div className="h-3 bg-white/20 rounded" />
                  <div className="h-3 bg-white/20 rounded w-2/3 self-start" />
                  <div className="h-3 bg-white/10 rounded w-1/2 self-start" />
                </div>
              </div>
              {/* All hero images, only one visible at a time, with rotation transformation */}
              <div className="relative w-full flex flex-col items-center min-h-[340px] top-20">
                {([
                  'growth.png',
                  'copyright-protection.png',
                  'campaigns.png',
                  'web-design.png',
                  'content-production.png',
                  'crm.png',
                  'ecommerce.png',
                ]).map((icon, idx) => {
                  const isActive = titleIndex === idx;
                  return (
                    <img
                      key={icon}
                      src={`/icons/${icon}`}
                      alt="Hero Icon"
                      className={`w-[420px] h-[420px] object-contain mb-4 drop-shadow-xl absolute left-1/2 -translate-x-1/2 -top-15 custom-hero-rotate-img flying-hero-img transition-all duration-700 ease-in-out ${isActive ? 'opacity-100 scale-100 z-10 rotate-0' : 'opacity-0 scale-90 z-0 rotate-180 pointer-events-none'}`}
                    />
                  );
                })}
              </div>
            </div>
            {/* Show other images without the card */}
            {titleIndex !== 0 && (
              <div className="relative w-full flying-hero-img flex flex-col items-center min-h-[140px]">
                <img
                  key={[
                    'growth.png',
                    'copyright-protection.png',
                    'campaigns.png',
                    'web-design.png',
                    'content-production.png',
                    'crm.png',
                    'ecommerce.png',
                  ][titleIndex]}
                  src={`/icons/${[
                    'growth.png',
                    'copyright-protection.png',
                    'campaigns.png',
                    'web-design.png',
                    'content-production.png',
                    'crm.png',
                    'ecommerce.png',
                  ][titleIndex]}`}
                  alt="Hero Icon"
                  className={`w-[420px] h-[420px] object-contain mb-4 drop-shadow-xl transition-all duration-700 ease-in-out custom-hero-rotate-img opacity-100 scale-100 z-10`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2">
        <span className="text-white/70 text-xl sm:text-2xl animate-[arrow-bounce_1.2s_ease-in-out_infinite] block">
            <KeyboardArrowDownIcon fontSize="inherit" />
        </span>
      </div>
      <style jsx>{`
        @media (min-width: 1773px) {
          .custom-hero-card {
            max-width: 900px !important;
            min-height: 600px !important;
          }
        }
        .custom-hero-rotate-img {
          transition-property: opacity, transform;
          width: 100% !important;
          max-width: 720px !important;
          height: 100% !important;
          max-height: 720px !important;
        }
        .flying-hero-img {
          animation: flying-hero-bounce 2.8s ease-in-out infinite;
        }
        @keyframes flying-hero-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-32px); }
        }
        @keyframes hero-bounce {
          0%, 100% { transform: translateY(0); }
          20% { transform: translateY(-6px) scale(1.04); }
          40% { transform: translateY(0); }
        }
        .animate-hero-bounce {
          animation: hero-bounce 2.2s infinite;
        }
        @keyframes spin-sparkle {
          0% { transform: rotate(-10deg) scale(1); }
          10% { transform: rotate(0deg) scale(1.15); }
          20% { transform: rotate(10deg) scale(1.1); }
          30% { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(-10deg) scale(1); }
        }
        .animate-spin-sparkle {
          animation: spin-sparkle 2.2s infinite;
        }
        @keyframes arrow-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(18px); }
        }
      `}</style>
    </section>
  );
}
