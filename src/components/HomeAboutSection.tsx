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

const points = [
  {
    accent: "#f59e0b",
    num: "01",
    label: "البداية",
    text: (
      <>
        اسمي <strong className="text-[#113c56]">ياسر الغوثاني</strong>، وأعمل في التسويق الرقمي{" "}
        <strong>منذ أكثر من 10 سنوات</strong> مع مشاريع تخصصية ذات طبيعة معرفية وهادفة.
      </>
    ),
  },
  {
    accent: "#22c55e",
    num: "02",
    label: "التحوّل",
    text: (
      <>
        تحول عملي إلى <strong className="text-[#113c56]">شغف حقيقي</strong>، عندما رأيت كيف يمكن
        لاستراتيجية صحيحة أن تُنقذ مشروعًا تخصصيًا، وتحوّل حضوره الرقمي إلى{" "}
        <strong>نمو مستدام</strong> ونتائج واضحة، ونجاحات كبيرة.
      </>
    ),
  },
  {
    accent: "#3b82f6",
    num: "03",
    label: "القناعة",
    text: (
      <>
        ما تعلّمته أن <strong className="text-[#113c56]">التسويق الفعّال</strong> لا يبدأ بالحملات
        الإعلانية، بل بالفهم الدقيق للمشروع أولًا.
      </>
    ),
  },
];

export default function HomeAboutSection() {
  return (
    <section
      className="w-full px-6 py-8 md:py-8 bg-gradient-to-br from-[#f8fafc] via-white to-[#f0f4f9] relative overflow-hidden"
      dir="rtl"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* العنوان */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold text-[#113c56] mb-4"
            variants={fadeUp}
            custom={0}
          >
            هنا يبدأ الفرق
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-l from-yellow-400 to-yellow-300 mx-auto rounded-full origin-right"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
          />
        </motion.div>

        {/* محطات المسار - 3 أعمدة */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {points.map((p, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center group"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={0.15 * (i + 1)}
            >
              {/* شريط علوي ملون */}
              <div
                className="w-full h-1 rounded-full mb-6 transition-all duration-300 group-hover:h-1.5"
                style={{ background: p.accent }}
              />
              {/* التسمية */}
              <span
                className="text-xs font-bold tracking-widest uppercase mb-3"
                style={{ color: p.accent }}
              >
                {p.label}
              </span>
              {/* دائرة الرقم */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-5 text-white font-extrabold text-xl shadow-lg"
                style={{ background: p.accent }}
              >
                {p.num}
              </div>
              {/* النص */}
              <p className="text-[#1a2f3d] text-base md:text-lg leading-8">{p.text}</p>
            </motion.div>
          ))}
        </div>

        {/* الاقتباس الختامي - banner داكن */}
        <motion.div
          className="relative bg-[#0d2f45] rounded-2xl px-8 py-10 md:px-14 md:py-12 text-center overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={0.6}
        >
          


          {/* النص الرئيسي */}
          <motion.p
            className="relative z-10 text-white text-lg md:text-xl leading-9 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            التسويق الفعّال ليس مجرد إعلانات وميزانيات، بل هو{" "}
            <motion.span
              className="text-yellow-400 font-bold inline-block relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              شراكة استراتيجية
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400/50 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                viewport={{ once: true }}
                style={{ transformOrigin: "left" }}
              />
            </motion.span>
            {" "}تفهم عمقك وتنقل مشروعك إلى مستويات جديدة من النمو والنجاح.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
