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

const steps = [
  { num: "01", text: "نبدأ بتحليل تفصيلي للمشروع ودراسة دقيقة للسوق." },
  { num: "02", text: "ثم نبني الاستراتيجية المناسبة." },
  { num: "03", text: "ونضع آلية تنفيذ ومتابعة واضحة." },
  { num: "04", text: "مدعومة بتقارير تساعد على التحسين واتخاذ قرارات أكثر دقة ووضوحًا." },
];

export default function HomeTeamSection() {
  return (
    <section
      className="w-full bg-gradient-to-br from-[#0d2f45] via-[#113c56] to-[#1a4f6e] overflow-hidden"
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto px-6 py-8 md:py-8">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-white mb-12 leading-tight"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
        >
          مع فريق{" "}
          <span className="relative inline-block text-yellow-400">
            متميز
            <span className="absolute right-0 -bottom-1 h-[4px] w-full bg-white/20 rounded-full" />
          </span>
          {" "}ومتخصص في المجال
        </motion.h2>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="group flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 cursor-default"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15 + i * 0.1}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(250,204,21,0.4)",
                x: -4,
                transition: { duration: 0.2 },
              }}
            >
              {/* Step number */}
              <motion.span
                className="text-3xl font-black text-yellow-400 leading-none select-none min-w-[48px]"
              >
                {s.num}
              </motion.span>
              {/* Divider */}
              <div className="w-px self-stretch bg-white/20 mx-1 group-hover:bg-yellow-400/60 transition-colors duration-200" />
              {/* Text */}
              <p className="text-white text-lg leading-relaxed group-hover:text-yellow-50 transition-colors duration-200">
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlight quote */}
        <motion.div
          className="relative rounded-2xl overflow-hidden cursor-default"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.55}
          whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
        >
          {/* Glowing border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/40 via-yellow-300/10 to-transparent p-px">
            <div className="w-full h-full rounded-2xl bg-[#0d2f45]" />
          </div>

          <div className="relative z-10 px-8 py-7 flex items-start gap-4">
            {/* Yellow left bar */}
            <div className="w-1 shrink-0 self-stretch bg-yellow-400 rounded-full" />
            <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
              أنا لا أبيع باقات ثابتة، ولا أقدم خدمات عشوائية، بل أقدم بين يديك{" "}
              <span className="text-yellow-400 font-extrabold underline decoration-yellow-400/40 decoration-2 underline-offset-4">
                نظام النمو الرقمي المستدام
              </span>{" "}
              الذي طورته خلال السنوات الماضية ليجعل التسويق في خدمة مشروعك… لا العكس.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
