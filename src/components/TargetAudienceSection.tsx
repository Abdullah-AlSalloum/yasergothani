"use client";
import React from "react";

const categories = [
  "الشركات والمؤسسات",
  "الناشرين والمؤلفين",
  "الشخصيات العلمية",
  "المتاجر الإلكترونية",
  "المشاريع الرقمية",
  "صناع المحتوى الهادف",
];

export default function TargetAudienceSection() {
  return (
    <section id="audience" className="w-full py-8 px-4" style={{ background: '#f1f5fb' }}>
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-2" style={{ fontFamily: 'TheYearOfTheCamel, Tajawal, Arial' }}>
          لمن نقدم هذه الحلول ؟
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mb-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="relative bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg border border-primary-light transition-transform duration-300 hover:scale-105 hover:shadow-2xl group flex items-center justify-center text-center h-20 sm:h-20 md:h-20 lg:h-20"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-green-400/60 to-green-600/80 rounded-full blur-xl opacity-60 group-hover:blur-2xl group-hover:opacity-90 transition-all duration-300 z-0" />
              <span className="relative z-10 w-full text-lg md:text-xl font-bold text-primary flex items-center justify-center" style={{ fontFamily: 'Tajawal, Arial' }}>{cat}</span>
            </div>
          ))}
        </div>
        <div className=" bg-red-500/90 text-white text-lg md:text-xl font-bold rounded-xl px-6 py-4 shadow-lg border-2 border-red-400 animate-pulse" style={{ fontFamily: 'Tajawal, Arial' }}>
         إن كنت تبحث عن نشر محتوى فقط، فنحن لسنا الخيار المناسب.
        </div>
      </div>
    </section>
  );
}
