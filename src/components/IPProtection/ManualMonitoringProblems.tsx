import React from "react";
import { motion } from "framer-motion";
import {EmojiObjects, WorkspacePremium,TrendingUp } from '@mui/icons-material';
import GavelIcon from '@mui/icons-material/Gavel';


const Section4: React.FC = () => (

    <section className="w-full flex justify-center items-center py-8 md:py-14">
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
          <motion.h2
            className="text-2xl md:text-3xl font-extrabold text-[#f1f5fb] mb-10 text-center drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            لماذا الرصد اليدوي لا يكفي؟
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
            {/* Step 1 */}
            <motion.div whileHover={{ scale: 1.06 }} className="flex flex-col items-center group">
              <div className="rounded-full bg-[#FFD600]/20 border-2 border-[#FFD600] w-20 h-20 flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform">
                <EmojiObjects style={{ color: '#FFD600', fontSize: 38 }} />
              </div>
              <span className="text-[#f1f5fb] text-lg md:text-xl text-center font-semibold">البحث التقليدي محدود ومرهق.</span>
            </motion.div>
            {/* Step 2 */}
            <motion.div whileHover={{ scale: 1.06 }} className="flex flex-col items-center group">
              <div className="rounded-full bg-[#00E676]/20 border-2 border-[#00E676] w-20 h-20 flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform">
                <TrendingUp style={{ color: '#00E676', fontSize: 38 }} />
              </div>
              <span className="text-[#f1f5fb] text-lg md:text-xl text-center font-semibold">القراصنة يعيدون رفع الملفات.</span>
            </motion.div>
            {/* Step 3 */}
            <motion.div whileHover={{ scale: 1.06 }} className="flex flex-col items-center group">
              <div className="rounded-full bg-[#29B6F6]/20 border-2 border-[#29B6F6] w-20 h-20 flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform">
                <WorkspacePremium style={{ color: '#29B6F6', fontSize: 38 }} />
              </div>
              <span className="text-[#f1f5fb] text-lg md:text-xl text-center font-semibold">المتابعة تحتاج نظام دقيق.</span>
            </motion.div>
            {/* Step 4 */}
            <motion.div whileHover={{ scale: 1.06 }} className="flex flex-col items-center group">
              <div className="rounded-full bg-[#F44444]/20 border-2 border-[#F44444] w-20 h-20 flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform">
                <GavelIcon style={{ color: '#F44444', fontSize: 38 }} />
              </div>
              <span className="text-[#f1f5fb] text-lg md:text-xl text-center font-semibold">يصعب التوثيق القانوني.</span>
            </motion.div>
          </div>
        </div>
      </section>
);

export default Section4;