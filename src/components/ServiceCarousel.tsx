
import React, { useState } from 'react';

const slides = [
  {
    title: 'إعداد الخطط لوسائل التواصل الاجتماعي',
    description: 'شرح منهجي للخطط الاستراتيجية والتكتيكية مع أمثلة عملية.'
  },
  {
    title: 'كتابة المحتوى',
    description: 'عرض لأنواع المحتوى المُقدم وأهميته في بناء العلامة التجارية.'
  },
  {
    title: 'تصميم ومونتاج المحتوى',
    description: 'إبراز المهارات الفنية مع نماذج أعمال بصرية جذابة.'
  },
  {
    title: 'إدارة حسابات وسائل التواصل',
    description: 'توضيح لآليات الإدارة اليومية وتحليل الأداء المستمر.'
  },
  {
    title: 'إدارة الحملات الإعلانية',
    description: 'شرح لاستراتيجيات الإعلان المدفوع وأدوات الاستهداف.'
  },
  {
    title: 'إدارة المتاجر الإلكترونية',
    description: 'تقديم حلول متكاملة لتشغيل وتحسين المتاجر الإلكترونية.'
  },
  {
    title: 'حماية الملكية الفكرية لكتب دور النشر',
    description: 'تفصيل الإجراءات القانونية والتقنية المتبعة.'
  },
  {
    title: 'إعداد تقارير حالة جودة التسويق',
    description: 'توضيح نماذج التقارير ومؤشرات الأداء المستخدمة.'
  },
  {
    title: 'بناء المواقع الإلكترونية بشكل احترافي ومميز',
    description: 'مع روابط للوصول إلى بعض النماذج.'
  },
];


function ServiceCarousel() {
  const [current, setCurrent] = useState(0);
  const goTo = (idx: number) => setCurrent((idx + slides.length) % slides.length);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="overflow-hidden rounded-xl w-full" style={{ minHeight: 320, position: 'relative' }}>
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-8 transition-opacity duration-500 ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
            style={{ background: '#4c6d83', minHeight: 320 }}
          >
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 text-center">{slide.title}</h2>
            <p className="text-white text-lg md:text-xl text-center mb-2">{slide.description}</p>
            <button
              className="mt-4 bg-[#ab9e60] hover:bg-[#917c4a] text-white font-bold py-2 px-6 rounded shadow transition"
              type="button"
            >
              اطلب الخدمة
            </button>
          </div>
        ))}
      </div>
      {/* Navigation */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl z-20"
        onClick={() => goTo(current - 1)}
        aria-label="السابق"
      >
        &#8249;
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl z-20"
        onClick={() => goTo(current + 1)}
        aria-label="التالي"
      >
        &#8250;
      </button>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-[#1a604f]' : 'bg-gray-300'}`}
            onClick={() => goTo(idx)}
            aria-label={`انتقل إلى الشريحة ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ServiceCarousel;