
import React from "react";
import { motion } from "framer-motion";
import { TrendingDown, Public } from '@mui/icons-material';
import GavelIcon from '@mui/icons-material/Gavel';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const risks = [
  {
    icon: <TrendingDown style={{ color: '#ca7c29', fontSize: 32 }} />, 
    text: "انخفاض المبيعات بسبب القرصنة."
  },
  {
    icon: <Public style={{ color: '#FFD600', fontSize: 32 }} />, 
    text: "روابط تحميل كتبك غير قانونية."
  },
  {
    icon: <GavelIcon style={{ color: '#00E676', fontSize: 32 }} />, 
    text: "ضياع حقوق المؤلفين والناشرين."
  },
  {
    icon: <DeleteForeverIcon style={{ color: '#ca7c29', fontSize: 32 }} />, 
    text: "نسخ مصورة تباع بسعر زهيد."
  },
];

const RisksList: React.FC = () => (
  <section className="relative flex flex-col items-center justify-center py-1 overflow-hidden">
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="w-full h-full  animate-gradientMove" />
    </motion.div>
    <div className="relative z-10 w-full max-w-6xl px-4 md:px-6">
      <motion.h2
        className="text-2xl md:text-4xl font-extrabold text-[#f1f5fb] mb-10 text-center leading-snug"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
         "في عصر تزايُد انتهاكات الحقوق الفكرية على الإنترنت أصبحت حماية الكتب أمرًا ضروريًا"
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 w-full">
        {risks.map((risk, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6 }}
            className="group relative bg-white/10 border border-white/20 rounded-2xl p-5 md:p-6 shadow-lg transition-all duration-200 hover:bg-white/15 hover:border-white/35"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
          >
            <div className="absolute inset-y-5 left-0 w-1 rounded-r-full bg-white/30 group-hover:bg-white/60 transition-colors" />
            <div className="flex items-center gap-4 pr-2">
              <span className="w-12 h-12 rounded-full bg-[#0f3b33]/60 border border-white/25 flex items-center justify-center shrink-0">
                {risk.icon}
              </span>
              <p className="text-[#f1f5fb] text-lg md:text-xl font-bold leading-relaxed text-right w-full">
                {risk.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RisksList;
