"use client";
import { useState, useEffect } from "react";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from "next/link";

const HERO_TITLES = [
  "نحوّل تواجدك الرقمي إلى آلة مبيعات",
  "نحوّل تواجدك الرقمي إلى محرك إيرادات",
  "نحوّل تواجدك الرقمي إلى مصدر نمو مستدام",
];

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((i) => (i + 1) % HERO_TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary to-secondary-blue px-2 sm:px-2 py-8 sm:py-10">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10 px-2 sm:px-0">
          {/* Hero Content */}
          <div className="flex-1 flex flex-col items-center md:items-start gap-4 sm:gap-6 text-white max-w-xl w-full md:pr-8">
            <span
              className="inline-flex items-center gap-2 bg-white/20 text-secondary-blue px-4 py-1 rounded-full mb-2 font-bold shadow-sm backdrop-blur-lg animate-hero-bounce"
            >
              {/* Star Icon (Heroicons outline) */}
              <AutoAwesomeIcon className="w-5 h-5 text-yellow-400 animate-spin-sparkle" />
              مهندس الإيرادات الرقمية
            </span>
          <div className="relative min-h-[3.5em] w-full md:mb-15">
            {HERO_TITLES.map((title, idx) => (
              <h1
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-center md:text-right ${idx === titleIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                style={{ fontFamily: "TheYearOfTheCamel, Tajawal, Arial" }}
                aria-hidden={idx !== titleIndex}
              >
                {title}
              </h1>
            ))}
          </div>
          <p className="text-base sm:text-lg font-medium text-white/90 text-center md:text-right">
            حلول تسويق رقمي متكاملة تبدأ بالتشخيص، تمر بالتنفيذ الاحترافي، وتنتهي بأرقام واضحة تساعدك على النمو بثقة.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
            <Link
              href="#book"
              className="flex-1 group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-primary font-extrabold py-3 rounded-xl text-center shadow-xl hover:from-yellow-500 hover:to-yellow-400 hover:scale-[1.03] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              style={{ boxShadow: '0 4px 24px 0 rgba(252, 212, 16, 0.18)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
              </svg>
              احصل على جلسة استراتيجية مجانية
            </Link>
            <Link
              href="#results"
              className="flex-1 border border-white/60 text-white font-bold py-3 rounded-lg text-center hover:bg-white/10 transition"
            >
              اطّلع على نتائجنا
            </Link>
          </div>
          <div className="flex flex-row gap-4 sm:gap-12 mt-4 sm:mt-6 w-full justify-center md:justify-start">
            <div className="flex flex-col items-center min-w-[120px] sm:min-w-[140px]">
              <span className="text-xl sm:text-2xl font-bold">2.5x</span>
              <span className="text-s text-white/80 mt-1">
                متوسط نمو الإيرادات
              </span>
            </div>
            <div className="flex flex-col items-center min-w-[120px] sm:min-w-[140px]">
              <span className="text-xl sm:text-2xl font-bold">95%</span>
              <span className="text-s text-white/80 mt-1">معدل نجاح</span>
            </div>
            <div className="flex flex-col items-center min-w-[120px] sm:min-w-[140px]">
              <span className="text-xl sm:text-2xl font-bold">+300</span>
              <span className="text-s text-white/80 mt-1">عميل ناجح</span>
            </div>
          </div>
        </div>
        {/* Illustration or Video */}
        <div className="flex-1 flex justify-center w-full mb-6 md:mb-0">
          <div
            className="rounded-2xl bg-white/10 shadow-xl w-full max-w-[420px] sm:max-w-[520px] md:max-w-[650px] min-h-[320px] sm:min-h-[380px] md:min-h-[420px] p-0 flex flex-col items-center"
            style={{ boxShadow: "0 6px 24px 0 rgba(44, 62, 80, 0.18)" }}
          >
            {/* Upper card section */}
            <div className="w-[96%] bg-white/10 rounded-xl mt-6 mb-4 flex flex-col items-center">
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
            {/* Stats cards */}
            <div className="flex w-[96%] gap-4 sm:gap-8 mb-8 md:mt-30 sm:mt-0 flex-col sm:flex-row">
              {/* Card 1 */}
              <div className="flex-1 bg-white/20  ite/20 border border-white/30 rounded-lg py-6 px-4 sm:py-7 sm:px-6 flex flex-col items-start justify-between relative min-h-[90px] sm:min-h-[110px] text-right backdrop-blur-md mb-4 sm:mb-0">
                <span className="absolute top-3 right-4 text-green-400">
                  {/* Dollar Icon (Heroicons outline) */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0c-2.485 0-4.5-1.567-4.5-3.5S9.515 11 12 11s4.5 1.567 4.5 3.5S14.485 18 12 18z" />
                  </svg>
                </span>
                <span className="text-2xl font-bold text-white pt-4">3.2x</span>
                <span className="text-sm text-white/90 mt-1">
                  عائد الاستثمار
                </span>
              </div>
              {/* Card 2 */}
              <div className="flex-1 bg-white/20 border border-white/30 rounded-lg py-6 px-4 sm:py-7 sm:px-6 flex flex-col items-start justify-between relative min-h-[90px] sm:min-h-[110px] text-right backdrop-blur-md">
                <span className="absolute top-3 right-4 text-green-400">
                  {/* Arrow Trending Up (Heroicons outline) */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 6" />
                  </svg>
                </span>
                <span className="text-2xl font-bold text-white pt-4">
                  150%+
                </span>
                <span className="text-sm text-white/90 mt-1">
                  نمو التحويلات
                </span>
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
    </>
  );
}
