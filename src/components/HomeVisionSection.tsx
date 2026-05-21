"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

export default function HomeVisionSection() {
  return (
    <section
      className="w-full bg-[#f0f6fa] overflow-hidden"
      dir="rtl"
    >
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-8 flex flex-col items-center text-center">
        {/* Opening quote mark */}
        <motion.span
          className="text-8xl font-black text-yellow-400 leading-none select-none z-10"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ fontFamily: "Georgia, serif", display: "inline-block" }}
        >
          «
        </motion.span>

        {/* Blockquote card */}
        <motion.div
          className="relative bg-white rounded-3xl shadow-lg px-10 py-10 md:px-16 md:py-12 cursor-default"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          whileHover={{ scale: 1.02, boxShadow: "0 16px 48px 0 rgba(17,60,86,0.12)", transition: { duration: 0.25 } }}
        >
          {/* Left yellow bar */}
          <div className="absolute right-0 top-8 bottom-8 w-1 bg-yellow-400 rounded-full" />

          <motion.blockquote
            className="text-2xl md:text-3xl font-bold text-[#113c56] leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
          >
            تمكين المشاريع المعرفية والهادفة، ودور النشر، والشخصيات العلمية، من اتخاذ خطوات تسويقية صحيحة في عالمٍ رقميّ يتغير بسرعة هائلة.
          </motion.blockquote>

          {/* Author line */}
          <motion.div
            className="mt-8 flex items-center justify-center gap-3"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.45}
          >
            <div className="h-px w-12 bg-yellow-400 rounded-full" />
            <span className="text-[#113c56] font-bold text-sm tracking-wide">ياسر الغوثاني</span>
            <div className="h-px w-12 bg-yellow-400 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Bottom decorative dots */}
        <motion.div
          className="flex gap-2 mt-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.55}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 rounded-full bg-yellow-400"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
