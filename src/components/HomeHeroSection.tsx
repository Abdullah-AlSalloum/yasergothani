"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Snowfall from "react-snowfall";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut", delay },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.35, ease: "easeOut", delay },
  }),
};

export default function HomeHeroSection() {
  return (
    <section
      className="w-full min-h-[520px] flex items-start justify-center bg-gradient-to-br from-[#0d2f45] via-[#113c56] to-[#1a4f6e] text-white overflow-hidden relative"
      dir="rtl"
    >
      {/* Background decorative circles */}
      <div className="absolute top-[-80px] left-[-80px] w-[320px] h-[320px] rounded-full bg-yellow-400/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[260px] h-[260px] rounded-full bg-[#7fb8d4]/10 blur-3xl pointer-events-none" />
      <Snowfall color="#82C3D9" speed={[0.05, 0.2]} snowflakeCount={200} />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-15 pb-16 md:pt-20 md:pb-24 flex flex-col items-start text-right">
        {/* Badge */}
        <motion.div
          className="mb-4 self-center md:self-auto px-6 py-1 rounded-full bg-[#113c56] border-2 border-yellow-400 text-yellow-400 font-bold text-base md:text-lg shadow-lg"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          نظام النمو الرقمي المستدام
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-white text-right"
          style={{ fontFamily: "TheYearOfTheCamel, Tajawal, Arial, Helvetica, sans-serif" }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
        >
          حين تكون الفكرة قوية...
          <br className="block" />
          <span className="text-yellow-400">لكن المبيعات ضعيفة.</span>
        </motion.h1>

        {/* Highlight bar */}
        <motion.div
          className="w-24 h-1 bg-yellow-400 mb-6 rounded-full"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.22}
        />

        {/* Subtext paragraph */}
        <motion.p
          className="text-lg md:text-xl text-[#e3eaf2] leading-8 mb-8 max-w-2xl text-right"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.28}
        >
          كثير من المشاريع تمتلك فكرة قوية أو ميزة تنافسية حقيقية، ومع ذلك تواجه تحديات في المبيعات والنمو.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#problem"
          className="inline-flex w-full md:w-auto justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-[#113c56] font-extrabold py-2 px-10 rounded-xl shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-lg cursor-pointer"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.44}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          ابدأ الآن
        </motion.a>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-yellow-300 text-xs"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span>اسحب للأسفل</span>
        <KeyboardArrowDownIcon className="animate-bounce" fontSize="small" />
      </motion.div>
    </section>
  );
}
