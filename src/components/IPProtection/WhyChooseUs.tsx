import React from 'react';
import { motion } from 'framer-motion';
import { EmojiObjects, WorkspacePremium } from '@mui/icons-material';

const Section10: React.FC = () => (
  <section className="relative bg-gradient-to-br from-[#f7fafc] via-[#e3f0fa] to-[#f7fafc] rounded-2xl shadow p-0 max-w-5xl mx-auto overflow-hidden my-2">
        <div className="absolute left-0 top-0 h-full w-2 bg-[#1a604f] rounded-tr-2xl rounded-br-2xl" />
        <div className="relative z-10 py-12 px-6 md:px-16 flex flex-col gap-10">
          <motion.h2
            className="text-2xl md:text-3xl font-extrabold mb-2 text-[#1a604f] text-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            لماذا تختارنا؟
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            <motion.div
              className="flex-1 bg-[#f1f5fb] rounded-xl shadow-md p-8 flex flex-row items-center gap-6 border border-[#e0e7ef] hover:scale-[1.03] transition-transform duration-300"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-[#fbbf24] bg-[#fff7e6] rounded-full p-4 shadow-md">
                <EmojiObjects style={{ fontSize: 48 }} />
              </span>
              <div className="flex flex-col items-start text-right">
                <div className="font-bold text-[#1a604f] text-lg mb-1">تكنولوجيا متقدمة</div>
                <div className="text-gray-700 text-base">نستخدم أدوات وتقنيات حديثة لرصد وتتبع الكتب المقرصنة بشكل فعّال.</div>
              </div>
            </motion.div>
            <motion.div
              className="flex-1 bg-[#f1f5fb] rounded-xl shadow-md p-8 flex flex-row items-center gap-6 border border-[#e0e7ef] hover:scale-[1.03] transition-transform duration-300"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="text-[#8b5cf6] bg-[#ede9fe] rounded-full p-4 shadow-md">
                <WorkspacePremium style={{ fontSize: 48 }} />
              </span>
              <div className="flex flex-col items-start text-right">
                <div className="font-bold text-[#1a604f] text-lg mb-1">خبرة واسعة</div>
                <div className="text-gray-700 text-base">تخصصنا في حماية حقوق النشر على الإنترنت يضمن لك الراحة القانونية التامة.</div>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="flex justify-end mt-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.button
              className="bg-[#1a604f] text-white px-10 py-4 rounded-lg font-bold text-xl shadow-lg hover:bg-[#1a604f] transition-all duration-200 border-2 border-[#1a604f] hover:border-[#1a604f]"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              ابدأ حماية حقوقك الفكرية
            </motion.button>
          </motion.div>
        </div>
      </section>
);

export default Section10;
