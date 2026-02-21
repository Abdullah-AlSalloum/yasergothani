import React from "react";
import { motion } from "framer-motion";
import { VerifiedUser, TrendingDown } from '@mui/icons-material';

const Section4: React.FC = () => (
    <section className="bg-gradient-to-br from-[#f7fafc] via-[#e3f0fa] to-[#f7fafc] rounded-2xl shadow p-8 max-w-4xl mx-auto mt-2 mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-[#1a604f] text-center">فوائد الحماية القانونية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#f1f5fb] rounded-xl shadow-md p-6 flex flex-col items-center gap-3 border border-[#e0e7ef]">
            <VerifiedUser style={{ fontSize: 48, color: '#1a604f' }} />
            <div className="text-2xl font-bold text-[#1a604f]">80%</div>
            <div className="text-gray-700 text-center text-lg">من الأعمال المسجلة قانونيًا يتمتع أصحابها بحماية أكبر ضد الانتهاكات.</div>
          </div>
          <div className="bg-[#f1f5fb] rounded-xl shadow-md p-6 flex flex-col items-center gap-3 border border-[#e0e7ef]">
            <TrendingDown style={{ fontSize: 48, color: '#e53935' }} />
            <div className="text-2xl font-bold text-[#1a604f]">90%</div>
            <div className="text-gray-700 text-center text-lg">من المؤلفين الذين سجلوا حقوقهم القانونية شهدوا انخفاضًا ملحوظًا في القرصنة بعد 6 أشهر من التسجيل.</div>
          </div>
        </div>
        <div className="flex justify-center">
          <motion.button className="bg-[#1a604f] text-white px-10 py-4 rounded-lg font-bold text-xl shadow-lg hover:bg-[#437066] transition-all duration-200 transition-all duration-200 border-2 border-[#1a604f] hover:border-[#1a604f]"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            ابدأ بتأمين كتابك اليوم
          </motion.button>
        </div>
      </section>
);

export default Section4;