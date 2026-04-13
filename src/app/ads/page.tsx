"use client";
import React, { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";

const OPEN_CONSULTATION_FORM_EVENT = "open-consultation-form";
const openConsultation = () =>
  window.dispatchEvent(new Event(OPEN_CONSULTATION_FORM_EVENT));

const platforms = [
  { name: "فيسبوك", color: "#1877F2" },
  { name: "إنستغرام", color: "#E1306C" },
  { name: "تيك توك", color: "#010101" },
  { name: "جوجل", color: "#4285F4" },
];

const targetAudience = [
  "تريد زيادة عدد العملاء بشكل واضح وسريع.",
  "ترغب بتوسيع سوقك داخل البلد أو إلى دول أخرى.",
  "لديك منتج أو خدمة لكنك تواجه صعوبة في إطلاق الإعلانات.",
  "لا تملك وقت أو خبرة لإدارة الحملات بشكل صحيح.",
];

const problems = [
  "صرف ميزانية بدون نتائج واضحة.",
  "استهداف غير دقيق.",
  "إعلانات تعمل بدون خطة.",
  "عدم فهم الأرقام.",
];

const whatYouGet = [
  "فهم الأهداف والتخطيط للإعلانات.",
  "تشغيل الحملات على المنصات العالمية.",
  "استهداف العملاء المناسبين.",
  "تحسين الأداء بشكل مستمر.",
  "تحويل الإعلانات إلى نتائج قابلة للقياس.",
];

const howWeWork = [
  "نفهم مشروعك وسوقك وجمهورك المستهدف.",
  "نحدد أهدافك (المبيعات – الأسواق – المنتجات).",
  "نحدد أفضل طريقة للوصول للعملاء.",
  "نحلل صفحاتك والمحتوى المنشور.",
  "نطلق الحملات الإعلانية.",
  "نراقب الأداء ونحسن النتائج.",
];

const results = [
  "زيادة في عدد العملاء.",
  "وضوح في أداء الإعلانات.",
  "تقليل الهدر في الميزانية.",
  "تحسين مستمر في النتائج.",
];

const stats = [
  { value: "+200", label: "حملة ناجحة" },
  { value: "آلاف", label: "الطلبات الناجحة" },
  { value: "8.5/10", label: "رضا العملاء" },
  { value: "14", label: "دولة حول العالم" },
  { value: "+10", label: "سنوات خبرة" },
];

const expandGoals = [
  "الوصول لعملاء خارج البلد.",
  "بيع منتجاتك في أسواق جديدة.",
  "بناء حضور رقمي قوي.",
];

const workIncludes = [
  "إعداد وإدارة الحملات.",
  "كتابة الإعلانات.",
  "اختبار وتحسين الأداء.",
  "متابعة مستمرة.",
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: EASE },
  }),
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.09, ease: EASE },
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: EASE },
  }),
};

const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} animate={inView ? "visible" : "hidden"} initial="hidden" className={className}>
      {children}
    </motion.div>
  );
};

const CheckItem: React.FC<{ text: string; i: number; light?: boolean }> = ({ text, i, light }) => (
  <motion.li variants={fadeLeft} custom={i} className="flex items-start gap-3 text-base md:text-lg leading-relaxed" style={{ color: light ? "rgba(255,255,255,0.9)" : "#374151" }}>
    <motion.span whileHover={{ scale: 1.25, rotate: 12 }} className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: light ? "#facc15" : "#113c56" }}>
      <svg viewBox="0 0 20 20" fill={light ? "#113c56" : "white"} className="w-3 h-3">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
      </svg>
    </motion.span>
    {text}
  </motion.li>
);

const Card: React.FC<{ children: React.ReactNode; className?: string; i?: number }> = ({ children, className = "", i = 0 }) => (
  <motion.div variants={fadeUp} custom={i} whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(0,0,0,0.10)" }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className={`bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 ${className}`}>
    {children}
  </motion.div>
);

const SectionTitle: React.FC<{ children: React.ReactNode; light?: boolean }> = ({ children, light }) => (
  <motion.h2 variants={fadeUp} className={`text-2xl md:text-3xl font-extrabold mb-6 ${light ? "text-yellow-400" : "text-[#113c56]"}`}>
    {children}
  </motion.h2>
);

const AdsPage: React.FC = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0]" dir="rtl">

      {/* Hero */}
      <section ref={heroRef} className="relative w-full bg-[#113c56] text-white py-24 px-4 overflow-hidden min-h-[70vh] flex items-center">
        <motion.div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(66,86,184,0.35) 0%, transparent 70%)" }} animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-[-15%] right-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(250,204,21,0.12) 0%, transparent 70%)" }} animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 20, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-4xl mx-auto relative z-10 text-right flex flex-col gap-6 w-full">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-yellow-400 font-bold text-sm uppercase tracking-widest">
            خدمة الإعلانات الرقمية
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }} className="text-3xl md:text-5xl font-extrabold leading-tight">
            حوّل إعلاناتك إلى مصدر عملاء حقيقي…
            <br />
            <span className="text-yellow-400">وليس مجرد صرف ميزانية</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.25 }} className="text-lg md:text-xl text-white/85 max-w-2xl">
            نُخطط ونُدير حملاتك الإعلانية بشكل احترافي على
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="flex flex-wrap gap-3">
            {platforms.map((p, i) => (
              <motion.span key={p.name} initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 300 }} whileHover={{ scale: 1.12, y: -3 }} style={{ background: p.color + "55", transition: "transform 0.08s ease, box-shadow 0.08s ease" }} className="border border-white/30 text-white font-bold px-4 py-1.5 rounded-full text-sm cursor-default">
                {p.name}
              </motion.span>
            ))}
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-white/80 text-base">
            لتحقق أهدافك ولترفع مبيعاتك.
          </motion.p>

          <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }} onClick={openConsultation} className="mt-2 w-fit bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#113c56] font-extrabold py-3 px-10 rounded-xl text-lg shadow-xl">
            ابدأ الآن
          </motion.button>
        </motion.div>
      </section>

      <div className="max-w-4xl mx-auto px-4 flex flex-col gap-10 py-14">

        {/* 2. لمن هذه الخدمة */}
        <Section>
          <motion.div
            variants={fadeUp}
            className="relative"
          >
            <div className="relative z-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
              <div>
                <SectionTitle>لمن هذه الخدمة؟</SectionTitle>
                <motion.p variants={fadeUp} className="mb-6 text-base text-[#4b5d6d] md:text-lg">
                  هذه الخدمة مناسبة لك إذا:
                </motion.p>

                <ul className="flex flex-col gap-3">
                  {targetAudience.map((item, i) => (
                    <motion.li
                      key={i}
                      variants={fadeLeft}
                      custom={i}
                      whileHover={{ x: -4 }}
                      className="flex items-start gap-3 rounded-2xl border border-[#113c56]/10 bg-white/90 px-4 py-3 text-base text-[#1f3343] md:text-lg"
                    >
                      <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#113c56] text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                variants={scaleIn}
                className="flex h-full min-h-56 flex-col items-center justify-center rounded-3xl border border-[#113c56]/15 bg-[#113c56] p-6 text-center text-white"
              >
                <h3 className="max-w-md text-2xl font-extrabold leading-snug">إذا هذه النقاط تشبه وضعك الحالي فأنت بالمكان الصحيح</h3>
                <p className="mt-4 max-w-sm text-sm text-white/80">نبدأ بخطة دقيقة ثم نحول الميزانية إلى نتائج واضحة وقابلة للقياس.</p>
              </motion.div>
            </div>
          </motion.div>
        </Section>

        {/* 3. أكبر مشكلة */}
        <Section>
          <motion.div variants={fadeUp} whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 200 }} className="bg-[#113c56] rounded-2xl p-6 md:p-8">
            <SectionTitle light>أكبر مشكلة</SectionTitle>
            <motion.p variants={fadeUp} className="text-white/80 mb-5">معظم المشاريع تواجه نفس المشاكل:</motion.p>
            <ul className="flex flex-col gap-3 mb-6">
              {problems.map((item, i) => (
                <motion.li key={i} variants={fadeLeft} custom={i} className="flex items-start gap-3 text-white/90 text-base md:text-lg">
                  <motion.span animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }} className="mt-2 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
            <motion.div variants={fadeUp} className="border-t border-white/20 pt-5">
              <p className="text-white/90 font-semibold text-base md:text-lg">وفي سوريا تحديدًا:</p>
              <p className="text-white/75 mt-1">لا يمكنك إطلاق الإعلانات بشكل مباشر على معظم المنصات.</p>
            </motion.div>
          </motion.div>
        </Section>

        {/* 4. ما الذي ستحصل عليه */}
        <Section>
          <motion.div variants={fadeUp} className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-stretch">
            <motion.div
              variants={scaleIn}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#113c56] to-[#1b5a7d] p-6 text-white md:p-8"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-yellow-300/20 blur-2xl" />
              <h3 className="relative z-10 text-2xl font-extrabold leading-snug">ما الذي ستحصل عليه؟</h3>
              <p className="relative z-10 mt-4 text-white/85">نحن نتولى إدارة حملاتك بالكامل:</p>
              <p className="relative z-10 mt-8 border-t border-white/20 pt-5 text-sm font-bold text-yellow-300 md:text-base">
                حتى لو كنت داخل سوريا… نقوم بتشغيل الحملات لك بشكل احترافي
              </p>
            </motion.div>

            <motion.ul variants={fadeUp} className="flex flex-col gap-3">
              {whatYouGet.map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeLeft}
                  custom={i}
                  whileHover={{ x: -5 }}
                  className="flex items-center gap-3 rounded-2xl border border-[#113c56]/15 bg-white px-4 py-4 shadow-sm"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#113c56] text-sm font-extrabold text-white">
                    {i + 1}
                  </span>
                  <span className="text-base font-semibold text-[#143548] md:text-lg">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </Section>

        {/* 5. كيف نعمل */}
        <Section>
          <motion.div
            variants={fadeUp}
            className="relative w-full overflow-hidden bg-gradient-to-b from-[#f5f9fc] to-[#e2e8f0] py-10"
          >
            <div className="mx-auto max-w-4xl px-4">
                <div className="flex flex-col items-center text-center mb-8">
                  <SectionTitle>كيف نعمل؟</SectionTitle>
                  <motion.p variants={fadeUp} className="text-[#113c56] font-semibold">بأسلوب بسيط وواضح:</motion.p>
                </div>
                <ol className="relative flex flex-col gap-7 md:gap-8 w-full">
                <span className="hidden md:block absolute right-4 top-8 bottom-8 w-1 bg-gradient-to-b from-[#113c56] to-transparent rounded-full" />
                {howWeWork.map((step, i) => (
                  <motion.li
                    key={i}
                    variants={fadeLeft}
                    custom={i}
                    className="flex items-start gap-4 md:gap-6"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#113c56] text-white font-bold text-lg shrink-0 relative z-10 border-4 border-white shadow-md">
                      {i + 1}
                    </span>
                    <span className="text-[#143548] text-base md:text-lg leading-relaxed pt-1 font-medium">
                      {step}
                    </span>
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.div>
        </Section>
      </div>

        {/* 6. النتائج */}
        <Section>
          <motion.div
            variants={fadeUp}
            className="relative w-full overflow-hidden bg-gradient-to-b from-[#f5f9fc] to-[#ecf3f8] py-10"
          >
            <div className="mx-auto max-w-6xl px-4">
              <div className="pointer-events-none absolute left-8 top-24 hidden h-[2px] w-[80%] bg-gradient-to-r from-[#113c56]/10 via-[#113c56]/35 to-[#113c56]/10 md:block" />

              <motion.div
                variants={scaleIn}
                className="mb-7 inline-flex items-center gap-3 rounded-2xl bg-[#113c56] px-5 py-3 text-white"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-sm font-extrabold text-[#113c56]">
                  +
                </span>
                <h3 className="text-xl font-extrabold md:text-2xl">النتائج التي ستحصل عليها</h3>
              </motion.div>

              <ul className="grid gap-3 md:grid-cols-2">
                {results.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    custom={i}
                    whileHover={{ y: -4 }}
                    className={`flex items-center gap-3 rounded-2xl border border-[#113c56]/15 bg-white px-4 py-4 shadow-sm ${i % 2 === 1 ? "md:translate-y-5" : ""}`}
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#113c56] text-sm font-extrabold text-white">
                      {i + 1}
                    </span>
                    <span className="text-base font-bold text-[#12384f] md:text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </Section>

      <div className="max-w-4xl mx-auto px-4 flex flex-col gap-10 pb-14">

        {/* 7. إحصائيات */}
        <Section>
          <motion.div variants={scaleIn} className="bg-[#113c56] rounded-2xl p-6 md:p-10">
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-white text-center mb-8">نتائج حققناها سابقًا</motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {stats.map((s, i) => (
                <motion.div key={i} variants={scaleIn} custom={i} whileHover={{ scale: 1.1, y: -5 }} className="flex flex-col items-center gap-1 text-center cursor-default">
                  <motion.span className="text-3xl md:text-4xl font-extrabold text-yellow-400"
                    initial={{ opacity: 0, scale: 0.4 }}
                    variants={{ visible: { opacity: 1, scale: 1, transition: { delay: 0.2 + i * 0.1, type: "spring", stiffness: 200 } }, hidden: { opacity: 0, scale: 0.4 } }}>
                    {s.value}
                  </motion.span>
                  <span className="text-white/75 text-sm">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Section>

        {/* 8. توسّع */}
        <Section>
          <Card>
            <SectionTitle>توسّع خارج حدودك</SectionTitle>
            <motion.p variants={fadeUp} className="text-gray-500 mb-4">إذا كنت تريد:</motion.p>
            <ul className="flex flex-col gap-3 mb-5">
              {expandGoals.map((item, i) => <CheckItem key={i} text={item} i={i} />)}
            </ul>
            <motion.p variants={fadeUp} custom={4} className="text-[#113c56] font-bold text-base border-t border-gray-100 pt-4">
              الإعلانات هي أسرع طريق… بشرط أن تُدار بشكل صحيح
            </motion.p>
          </Card>
        </Section>

        {/* 9. ماذا يشمل العمل */}
        <Section>
          <Card>
            <SectionTitle>ماذا يشمل العمل؟</SectionTitle>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {workIncludes.map((item, i) => (
                <motion.li key={i} variants={scaleIn} custom={i} whileHover={{ scale: 1.04 }} className="flex items-center gap-3 bg-[#f0f4f8] rounded-xl px-4 py-3 text-[#113c56] font-semibold text-base">
                  <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 3, delay: i * 0.6, repeat: Infinity }} className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </Card>
        </Section>

        {/* 10. Final CTA */}
        <Section>
          <motion.div variants={scaleIn} whileHover={{ scale: 1.01 }} className="relative bg-gradient-to-r from-[#113c56] to-[#4256b8] rounded-2xl p-8 md:p-12 text-center flex flex-col items-center gap-5 overflow-hidden">
            <motion.div className="absolute inset-0 pointer-events-none" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 3, repeat: Infinity }} style={{ background: "radial-gradient(ellipse at 50% 80%, rgba(250,204,21,0.18) 0%, transparent 70%)" }} />
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-white relative z-10">
              إذا كنت تريد نتائج فعلية من الإعلانات… وليس مجرد تجربة
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-white/80 text-base md:text-lg max-w-xl relative z-10">
              احجز الآن وابدأ بتنفيذ حملاتك بشكل احترافي
            </motion.p>
            <motion.button variants={fadeUp} custom={2} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} onClick={openConsultation} className="relative z-10 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#113c56] font-extrabold py-3 px-12 rounded-xl text-lg shadow-xl">
              ابدأ الآن
            </motion.button>
          </motion.div>
        </Section>

      </div>
    </main>
  );
};

export default AdsPage;
