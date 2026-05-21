"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

export default function DetailedProblemSection() {
  return (
    <section className="w-full py-8 md:py-8 bg-white relative overflow-hidden" dir="rtl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0d2f45]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* ١ — عبارة المشكلة المركزية */}
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={0}
        >
          <span className="inline-block bg-yellow-400/15 text-yellow-700 font-semibold text-sm rounded-full px-5 py-1.5 mb-5">
            المشكلة الحقيقية
          </span>
          <p className="text-[#113c56] text-xl md:text-2xl font-bold leading-10 max-w-3xl mx-auto">
            غالبًا لا تكون المشكلة في المنتج نفسه، بل في تسويقٍ منفصل عن واقع المشروع —
            لا يفهم أهدافه ولا عملياته، ويتعامل معه بعقلية باقات جاهزة تنتهي مهمتها عند النشر.
          </p>
        </motion.div>

        {/* ٢ — مقارنة: المنفصل vs المستهدف */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* التسويق المنفصل */}
          <motion.div
            className="bg-[#fff5f5] border border-red-200 rounded-2xl p-8 cursor-pointer"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={0.15}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              boxShadow: "0 20px 40px rgba(244, 63, 94, 0.1)",
              transition: "box-shadow 0.3s ease-out"
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-red-500 font-bold text-lg leading-none">✕</span>
              </div>
              <h3 className="text-lg font-bold text-red-700">التسويق المنفصل</h3>
            </div>
            <p className="text-red-900/75 leading-7 text-base">
              يعتمد على أفكار عامة بدون فهم عميق لطبيعة عملك، ويستهدف الجمهور العام بدلاً
              من المثالي.
            </p>
          </motion.div>

          {/* التسويق المستهدف */}
          <motion.div
            className="bg-[#f0fdf4] border border-green-200 rounded-2xl p-8 cursor-pointer"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={0.28}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              boxShadow: "0 20px 40px rgba(34, 197, 94, 0.1)",
              transition: "box-shadow 0.3s ease-out"
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-green-600 font-bold text-lg leading-none">✓</span>
              </div>
              <h3 className="text-lg font-bold text-green-700">التسويق المستهدف</h3>
            </div>
            <p className="text-green-900/75 leading-7 text-base">
              مبني على فهم عميق لأهدافك وعملياتك، ويستهدف عملاءك المثاليين بدقة عالية.
            </p>
          </motion.div>
        </div>

        {/* ٣ — النتيجة المؤلمة */}
        <motion.div
          className="flex items-start gap-5 bg-gradient-to-l from-yellow-50 to-yellow-100/60 border-r-4 border-yellow-500 rounded-xl p-6 md:p-8 cursor-pointer"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={0.42}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            boxShadow: "0 20px 40px rgba(234, 179, 8, 0.15)",
            transition: "box-shadow 0.3s ease-out"
          }}
        >
          <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center shrink-0 text-[#113c56] font-extrabold text-lg shadow">
            ②
          </div>
          <div>
            <h4 className="font-bold text-[#113c56] text-lg mb-1">النتيجة المؤلمة</h4>
            <p className="text-[#1a2f3d] leading-7">
              هنا يتحول التسويق من أداة نمو إلى عبء لا يحقق الأثر المتوقع.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
