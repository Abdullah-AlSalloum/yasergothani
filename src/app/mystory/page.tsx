"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const OPEN_CONSULTATION_FORM_EVENT = "open-consultation-form";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut", delay },
  }),
};

const MyStory: React.FC = () => (
  <main className="w-full bg-[#f8fafc] min-h-screen text-right" dir="rtl">

    {/* ── Hero ── */}
    <section className="w-full bg-[#113c56] text-white px-6 py-20 md:py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <motion.p
          className="text-sm font-semibold tracking-widest uppercase text-[#7fb8d4] mb-4"
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
        >
          قصتي ورؤيتي
        </motion.p>
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold leading-tight mb-6"
          variants={fadeUp} initial="hidden" animate="visible" custom={0.12}
        >
          حين تكون الفكرة قوية…<br className="hidden md:block" /> لكن المبيعات ضعيفة
        </motion.h1>
        <motion.div
          className="w-16 h-1 bg-yellow-400 mb-8 rounded-full"
          variants={fadeIn} initial="hidden" animate="visible" custom={0.28}
        />
        <motion.p className="text-lg md:text-xl text-[#c8dde8] leading-relaxed mb-4" variants={fadeUp} initial="hidden" animate="visible" custom={0.34}>
          كثير من المشاريع تمتلك فكرة قوية أو ميزة تنافسية حقيقية، ومع ذلك تواجه تحديات في المبيعات والنمو.
        </motion.p>
        <motion.p className="text-lg md:text-xl text-[#c8dde8] leading-relaxed mb-4" variants={fadeUp} initial="hidden" animate="visible" custom={0.44}>
          غالبًا لا تكون المشكلة في المنتج نفسه، بل في تسويقٍ منفصل عن واقع المشروع، لا يفهم أهدافه ولا عملياته، ويتعامل معه بعقلية باقات جاهزة تنتهي مهمتها عند النشر.
        </motion.p>
        <motion.p className="text-lg md:text-xl text-[#c8dde8] leading-relaxed" variants={fadeUp} initial="hidden" animate="visible" custom={0.54}>
          هنا يتحول التسويق من أداة نمو إلى عبء لا يحقق الأثر المتوقع.
        </motion.p>
      </div>
    </section>

    {/* ── Section 01 — About ── */}
    <section className="w-full px-6 py-16 md:py-20 border-b border-[#e2eaf0] overflow-hidden">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-start">
        <motion.span
          className="text-7xl md:text-8xl font-black text-[#e2eaf0] select-none leading-none md:min-w-[100px] text-center"
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
        >
          01
        </motion.span>
        <motion.div
          className="flex-1"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#113c56] mb-5">هنا يبدأ الفرق</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            اسمي ياسر الغوثاني، وأعمل في التسويق الرقمي منذ أكثر من 10 سنوات مع مشاريع تخصصية ذات طبيعة معرفية وهادفة.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            تحول عملي إلى شغف حقيقي، عندما رأيت كيف يمكن لاستراتيجية صحيحة أن تُنقذ مشروعًا تخصصيًا، وتحوّل حضوره الرقمي إلى نمو مستدام ونتائج واضحة، ونجاحات كبيرة.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            ما تعلّمته أن التسويق الفعّال لا يبدأ بالحملات الإعلانية، بل بالفهم الدقيق للمشروع أولًا.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ── Section 02 — Team & Process ── */}
    <section className="w-full px-6 py-16 md:py-20 bg-white border-b border-[#e2eaf0] overflow-hidden">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-start">
        <motion.span
          className="text-7xl md:text-8xl font-black text-[#e2eaf0] select-none leading-none md:min-w-[100px] text-center"
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
        >
          02
        </motion.span>
        <div className="flex-1">
          <motion.h2
            className="text-2xl md:text-3xl font-extrabold text-[#113c56] mb-5"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1}
          >
            مع فريق متميز ومتخصص في المجال
          </motion.h2>
          <div className="flex flex-col gap-3 mb-6">
            {[
              "نبدأ بتحليل تفصيلي للمشروع ودراسة دقيقة للسوق",
              "ثم نبني الاستراتيجية المناسبة",
              "ونضع آلية تنفيذ ومتابعة واضحة",
              "مدعومة بتقارير تساعد على التحسين واتخاذ قرارات أكثر دقة ووضوحًا",
            ].map((step, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15 + i * 0.1}
              >
                <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                <p className="text-gray-600 text-lg leading-relaxed">{step}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="text-gray-700 text-lg leading-relaxed font-medium border-r-4 border-[#113c56] pr-4"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.55}
          >
            أنا لا أبيع باقات ثابتة، ولا أقدّم خدمات منفصلة، بل أعمل كشريك يفهم المشروع من الداخل، ويجعل التسويق في خدمته… لا العكس.
          </motion.p>
        </div>
      </div>
    </section>

    {/* ── Vision pull-quote ── */}
    <section className="w-full px-6 py-16 md:py-24 bg-[#f0f6fa] overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          className="text-lg font-bold tracking-widest uppercase text-[#7fb8d4] mb-6"
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
        >
          رؤيتي
        </motion.p>
        <motion.blockquote
          className="text-2xl md:text-3xl font-bold text-[#113c56] leading-relaxed"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1}
        >
          &ldquo;تمكين المشاريع المعرفية والهادفة، ودور النشر، والشخصيات العلمية، من اتخاذ خطوات تسويقية صحيحة في عالمٍ رقميّ يتغير بسرعة هائلة.&rdquo;
        </motion.blockquote>
        <motion.div
          className="w-12 h-1 bg-yellow-400 mx-auto mt-8 rounded-full"
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3}
        />
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="w-full px-6 py-16 md:py-20 bg-[#113c56] text-white text-center overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-extrabold mb-4"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
        >
          الخطوة التالية
        </motion.h2>
        <motion.p
          className="text-[#c8dde8] text-lg leading-relaxed mb-4"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.12}
        >
          إذا شعرت أن هذا الكلام يعبّر عن واقع مشروعك، فأنت في المكان الصحيح.
        </motion.p>
        <motion.p
          className="text-[#c8dde8] text-lg leading-relaxed mb-10"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.22}
        >
          الخطوة التالية هي اجتماع تعارف وتحليل أولي، نناقش فيه وضع مشروعك الحالي، ونحدّد بوضوح أين يمكن للتسويق أن يصنع الفرق فعلًا.
        </motion.p>
        <motion.button
          onClick={() => window.dispatchEvent(new Event(OPEN_CONSULTATION_FORM_EVENT))}
          className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-[#113c56] font-extrabold py-4 px-10 rounded-xl shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-300 cursor-pointer text-lg"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.32}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          ابدأ من هنا
        </motion.button>
      </div>
    </section>

  </main>
);

export default MyStory;
