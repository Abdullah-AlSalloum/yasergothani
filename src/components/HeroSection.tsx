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
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-4 md:gap-6 px-2 sm:px-0">
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
        
        <div className="flex-1 flex justify-center w-full mb-1 md:mb-0">
          <div className="w-full flex flex-col items-center">
            <span
              className="inline-flex items-center gap-2 bg-white/20 text-secondary-blue px-4 py-1 rounded-full mb-4 font-bold shadow-sm backdrop-blur-lg animate-hero-bounce"
            >
              <EngineeringIcon className="w-5 h-5 text-yellow-400 animate-spin-sparkle" />
              مهندس الإيرادات الرقمية
            </span>
            <div className="relative w-full flex flex-col items-center min-h-[240px] sm:min-h-[340px]">
              <div className="w-full h-[260px] sm:h-[420px] relative flying-hero-img">
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
                      className={`w-[300px] h-[300px] sm:w-[550px] sm:h-[550px] object-contain drop-shadow-xl absolute left-1/2 -translate-x-1/2 top-0 transition-all duration-700 ease-in-out ${isActive ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-90 z-0 pointer-events-none'}`}
                      style={{ transform: isActive ? 'rotateY(0deg)' : 'rotateY(90deg)' }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2">
        <span className="text-white/70 text-xl sm:text-2xl animate-[arrow-bounce_1.2s_ease-in-out_infinite] block">
            <KeyboardArrowDownIcon fontSize="inherit" />
        </span>
      </div>
      <style jsx>{`
        .flying-hero-img {
          animation: flying-hero-bounce 3.5s ease-in-out infinite;
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
