import React from "react";
import { motion } from "framer-motion";
import { TrendingDown, Public} from '@mui/icons-material';
import GavelIcon from '@mui/icons-material/Gavel';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Section2: React.FC = () => (
   <section className="relative flex justify-center items-center py-8 md:py-15 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="w-full h-full bg-[#437066] animate-gradientMove" />
        </motion.div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto w-full">
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <motion.h2
              className="text-2xl md:text-3xl font-extrabold text-[#f1f5fb] mb-4"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
             "في عصر تزايُد انتهاكات الحقوق الفكرية على الإنترنت"
            </motion.h2>
            <motion.div
              className="mt-6 pr-0 md:pr-6 w-full flex flex-col gap-4"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg p-6 flex flex-col gap-4">
                <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-3 text-[#f1f5fb] text-xl">
                  <TrendingDown style={{ color: '#F44444', fontSize: 32 }} />
                  <span>انخفاض المبيعات بسبب القرصنة.</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-3 text-[#f1f5fb] text-xl">
                  <Public style={{ color: '#FFD600', fontSize: 32 }} />
                  <span>روابط تحميل كتبك غير قانونية.</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-3 text-[#f1f5fb] text-xl">
                  <GavelIcon style={{ color: '#00E676', fontSize: 32 }} />
                  <span>ضياع حقوق المؤلفين والناشرين.</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-3 text-[#f1f5fb] text-xl">
                  <DeleteForeverIcon style={{ color: '#F44444', fontSize: 32 }} />
                  <span>نسخ مصورة تباع بسعر زهيد.</span>
                </motion.div>
              </div>
            </motion.div>
            <motion.p
              className="text-2xl text-[#f1f5fb] font-semibold pt-12"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              "أصبحت حماية الكتب أمرًا ضروريًا"
            </motion.p>
          </div>
        </div>
      </section>
);

export default Section2;
