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
    <section id="problem" className="w-full bg-primary-light py-12 px-0">
      <div className="w-full flex flex-col items-center text-center gap-8">
        {/* العنوان */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-2" style={{ fontFamily: "TheYearOfTheCamel, Tajawal, Arial" }}>
         هل تعاني من أحد هذه التحديات؟
        </h2>
        {/* قائمة تحقق بالتحديات */}
        <ul className="checklist flex flex-col gap-4 items-start w-full max-w-xl mx-auto px-4 sm:px-8 lg:px-16">
          {questions.map((q, i) => (
            <li
              key={i}
              className={`checklist-item flex items-center gap-3 bg-gray-50 border border-primary rounded-lg shadow px-4 py-3 w-full font-bold text-lg text-gray-900 transition-all duration-400 ${visible > i ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <input type="checkbox" className="form-checkbox h-5 w-5 accent-[var(--secondary-blue)]" disabled />
              <span>{q.text}</span>
            </li>
          ))}
        </ul>
        <style jsx>{`
          .checklist-item:hover {
            background: #fef3c7;
            border-color: #f59e42;
            color: #b45309;
            box-shadow: 0 4px 16px 0 rgba(252, 212, 16, 0.10);
            cursor: pointer;
            transform: scale(1.03);
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
