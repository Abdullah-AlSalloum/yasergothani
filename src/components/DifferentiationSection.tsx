import React from "react";
import { ChartBarIcon, CalculatorIcon, WrenchScrewdriverIcon, Cog6ToothIcon, HandRaisedIcon, DocumentTextIcon } from '@heroicons/react/24/solid';

const usCards = [
  { icon: <ChartBarIcon className="h-10 w-10 text-yellow-500" />, text: "استراتيجية + تنفيذ" },
  { icon: <CalculatorIcon className="h-10 w-10 text-blue-600" />, text: "أرقام" },
  { icon: <WrenchScrewdriverIcon className="h-10 w-10 text-green-600" />, text: "حلول" },
];

const marketCards = [
  { icon: <Cog6ToothIcon className="h-10 w-10 text-orange-500" />, text: "تنفيذ فقط" },
  { icon: <HandRaisedIcon className="h-10 w-10 text-gray-500" />, text: "وعود" },
  { icon: <DocumentTextIcon className="h-10 w-10 text-gray-700" />, text: "خدمات" },
];

const DifferentiationSection = () => {
  return (
    <section id="differentiation" className="py-16 px-4 md:px-12 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center" style={{ fontFamily: 'TheYearOfTheCamel, Tajawal, Arial, Helvetica, sans-serif'}}>
          لماذا نحن؟
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">نحن</h3>
            <div className="flex flex-col gap-6">
              {usCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 rounded-xl shadow p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                  {card.icon}
                  <span className="text-xl font-semibold mt-2 text-green-900">{card.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">السوق</h3>
            <div className="flex flex-col gap-6">
              {marketCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white/40 rounded-xl shadow p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                  {card.icon}
                  <span className="text-xl font-semibold mt-2 text-orange-900">{card.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      <div className="flex justify-center mt-10">
        <a
          href="#book"
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
    </section>
  );
};

export default DifferentiationSection;
