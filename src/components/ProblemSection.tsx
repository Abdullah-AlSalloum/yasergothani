"use client";
import React, { useState, useEffect } from "react";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import EmojiTargetsIcon from '@mui/icons-material/TrackChanges';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import LockIcon from '@mui/icons-material/Lock';

export default function ProblemSection() {
  const challenges = [
    {
      text: "تنشر محتوى باستمرار دون تحسّن في المبيعات",
      icon: <TrendingDownIcon fontSize="large" className="text-blue-500" />,
    },
    {
      text: "تمتلك منتجًا جيدًا لكن لا يصل للجمهور المناسب",
      icon: <EmojiTargetsIcon fontSize="large" className="text-green-500" />,
    },
    {
      text: "تصرف ميزانيات إعلانية ولا تحصل على نتائج واضحة",
      icon: <AttachMoneyIcon fontSize="large" className="text-yellow-500" />,
    },
    {
      text: "تعمل دون نظام واضح أو مؤشرات أداء حقيقية",
      icon: <BarChartIcon fontSize="large" className="text-pink-500" />,
    },
    {
      text: "تتعرض منتجاتك للقرصنة ولا تملك وسيلة للحد من ذلك",
      icon: <LockIcon fontSize="large" className="text-red-500" />,
    },
  ];

  // Animation: fade-in cards one by one
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    if (visible < challenges.length) {
      const timeout = setTimeout(() => setVisible(visible + 1), 250);
      return () => clearTimeout(timeout);
    }
  }, [visible, challenges.length]);

  return (
    <section id="problem" className="w-full bg-primary-light py-12 px-0">
      <div className="w-full flex flex-col items-center text-center gap-8">
        {/* العنوان */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-2" style={{ fontFamily: "TheYearOfTheCamel, Tajawal, Arial" }}>
         هل تعاني من أحد هذه التحديات؟
        </h2>
        {/* تحديات المشاريع: بطاقات مع أيقونات */}
        
        {/* Vertical Timeline with Icons */}
        <div className="relative max-w-xl mx-2 mt-2">
          {challenges.map((c, i) => (
            <div key={i} className="flex items-center gap-4 mb-6 bg-white rounded-xl shadow-md px-4 py-4 border border-blue-100 transition-all duration-300 hover:scale-105 max-w-md w-full mx-auto">
              <span className="flex items-center justify-center w-10 h-10 text-2xl">
                {c.icon}
              </span>
              <span className="text-lg font-semibold text-blue-900 text-right">
                {c.text}
              </span>
            </div>
          ))}
        </div>
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
        <div className="mt-1 text-xl sm:text-2xl font-bold text-primary-accent">
         المشكلة ليست في التسويق… بل في غياب المنهجية  الصحيحة
        </div>
      </div>
    </section>
  );
}
