
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
  <section className="relative flex flex-col items-center justify-center overflow-hidden">
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="w-full h-full  animate-gradientMove" />
    </motion.div>
    <div className="relative z-10 flex flex-col items-center w-full max-w-2xl">
      <motion.h2
        className="text-2xl md:text-3xl font-extrabold text-[#f1f5fb] mb-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        "في عصر تزايُد انتهاكات الحقوق الفكرية على الإنترنت"
      </motion.h2>
        <div className="flex flex-col items-center gap-6 w-full">
        {risks.map((risk, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-xl px-6 py-4 shadow-lg w-full max-w-md justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3}}
          >
            {risk.icon}
            <span className="text-[#f1f5fb] text-lg font-semibold">{risk.text}</span>
          </motion.div>
        ))}
      </div>
      <motion.p
        className="text-2xl text-[#f1f5fb] font-semibold pt-12 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.2 }}
      >
        "أصبحت حماية الكتب أمرًا ضروريًا"
      </motion.p>
    </div>
  </section>
);

export default RisksList;
