import React from "react";
import Snowfall from 'react-snowfall';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';

const points = [
  { label: "حجم المشكلة", desc: "تزايد انتهاكات الحقوق الفكرية في السوق" },
  { label: "ماذا نفعل؟", desc: "نراقب ونحمي محتواك ونبلغ عن أي انتهاك" },
  { label: "نتائج الحذف والحماية", desc: "حذف المحتوى المنسوخ وحماية أصولك الرقمية" },
];

const IPProtectionSection = () => (
  <section className="py-16 px-4 md:px-12 bg-[var(--background)] text-[#113c56]">
    <div className="w-[90vw] mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200 relative overflow-hidden">
        <Snowfall color="#113c56" speed={[0.2, 0.5]} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheckIcon className="h-8 w-8 text-green-600" />
            <h2 className="text-2xl md:text-3xl font-extrabold" style={{ fontFamily: 'TheYearOfTheCamel, Tajawal, Arial, Helvetica, sans-serif' }}>
              حماية الملكية الفكرية
            </h2>
          </div>
          <p className="mb-6 text-lg text-gray-700 font-semibold">حقوقك الفكرية ليست خيارًا… بل أصلًا يجب حمايته.</p>
          <ul className="space-y-4">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1 text-green-500">
                  <ShieldCheckIcon className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-bold text-[var(--secondary-blue)]">{point.label}</div>
                  <div className="text-gray-600">{point.desc}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center text-green-700 font-bold text-xl">
            تمييز البراند عن أي وكالة أخرى.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default IPProtectionSection;
