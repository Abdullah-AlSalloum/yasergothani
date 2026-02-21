import React from 'react';
import { motion } from 'framer-motion';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GavelIcon from '@mui/icons-material/Gavel';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Section7: React.FC = () => (
   <section className="bg-[#f1f5fb]  shadow p-8 w-full mx-auto">
        <div className="w-full bg-primary rounded-2xl py-6 px-4 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#437066] text-center">خدماتنا المتكاملة</h2>
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div className="flex flex-col items-center text-center">
              <span className="mb-4"><span className="inline-block bg-primary-light/20 rounded-full p-6"><VisibilityIcon className="text-7xl text-[#437066]" style={{ fontSize: 48 }} /></span></span>
              <h3 className="text-xl font-bold text-[#437066] mb-2">الرصد والتعقب</h3>
              <p className="text-[#437066]">نقوم بمراقبة الإنترنت بشكل مستمر للكشف عن أي نسخ غير قانونية لكتبك.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="mb-4"><span className="inline-block bg-primary-light/20 rounded-full p-6"><GavelIcon className="text-7xl text-[#437066]" style={{ fontSize: 48 }} /></span></span>
              <h3 className="text-xl font-bold text-[#437066] mb-2">التسجيل القانوني</h3>
              <p className="text-[#437066]">نساعدك بتسجيل أعمالك الأدبية بشكل قانوني في قانون الملكية الفكرية لضمان حقوقك.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="mb-4"><span className="inline-block bg-primary-light/20 rounded-full p-6"><DeleteForeverIcon className="text-7xl text-[#437066]" style={{ fontSize: 48 }} /></span></span>
              <h3 className="text-xl font-bold text-[#437066] mb-2">حذف الكتب المقرصنة</h3>
              <p className="text-[#437066]">نقوم باتخاذ إجراءات تساعد في إزالة أي المحتوى المقرصن من الإنترنت بشكل قانوني.</p>
            </div>
          </div>
          <motion.button className="bg-[#437066] text-primary px-8 py-3 rounded-lg font-bold text-lg hover:bg-primary-light hover:text-primary transition-all duration-200 shadow mt-4 "
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}>
            لن تقلق من قرصنة كتابك بعد اليوم
          </motion.button>
        </div>
      </section>
);

export default Section7;
