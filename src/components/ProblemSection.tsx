"use client";
import React, { useState, useEffect } from "react";


export default function ProblemSection() {
  const questions = [
    {
      text: "تنشر محتوى باستمرار دون تحسّن في المبيعات",
      color: "var(--secondary-blue)",
    },
    {
      text: "تمتلك منتجًا جيدًا لكن لا يصل للجمهور المناسب",
      color: "var(--secondary-blue)",
    },
    {
      text: "تصرف ميزانيات إعلانية ولا تحصل على نتائج واضحة",
      color: "var(--secondary-blue)",
    },
    {
      text: "تعمل دون نظام واضح أو مؤشرات أداء حقيقية",
      color: "var(--secondary-blue)",
    },
    {
      text: "تتعرض منتجاتك للقرصنة ولا تملك وسيلة للحد من ذلك",
      color: "var(--secondary-blue)",
    },
  ];

  // Animation: fade-in questions one by one
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    if (visible < questions.length) {
      const timeout = setTimeout(() => setVisible(visible + 1), 200);
      return () => clearTimeout(timeout);
    }
  }, [visible, questions.length]);

  return (
    <section className="w-full bg-primary-light py-12 px-0">
      <div className="w-full flex flex-col items-center text-center gap-8">
        {/* العنوان */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-2" style={{ fontFamily: "TheYearOfTheCamel, Tajawal, Arial" }}>
         هل تعاني من أحد هذه التحديات؟
        </h2>
        {/* الأسئلة */}
        <div className="cards flex flex-col md:flex-row gap-4 justify-center items-center w-full flex-wrap md:flex-nowrap overflow-visible px-4 sm:px-8 lg:px-16">
          {questions.map((q, i) => (
            <div
              key={i}
              className={`card flex flex-col items-center justify-center text-center h-[100px] w-full max-w-[95vw] sm:max-w-[400px] md:h-[140px] md:w-[320px] lg:h-[180px] lg:w-[500px] rounded-[10px] text-white cursor-pointer transition-all duration-400 font-bold text-lg ${visible > i ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
              style={{ background: q.color, transitionDelay: `${i * 100}ms` }}
            >
              <p className="second-text text-m">{q.text}</p>
            </div>
          ))}
        </div>
        <style jsx>{`
          .cards:hover > .card:not(:hover) {
            filter: blur(2px);
            transform: scale(0.9, 0.9);
          }
          .card:hover {
            transform: scale(1.1, 1.1);
            z-index: 10;
          }
        `}</style>
        {/* الخلاصة */}
        <div className="mt-6 text-xl sm:text-2xl font-bold text-primary-accent">
         المشكلة ليست في التسويق… بل في غياب المنهجية  الصحيحة
        </div>
      </div>
    </section>
  );
}
