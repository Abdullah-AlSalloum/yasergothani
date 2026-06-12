import React from 'react';
import { motion } from 'framer-motion';
import { Campaign, Storefront, CheckCircle, Warning, TrendingUp } from '@mui/icons-material';


const Section11: React.FC = () => (
  <section className="relative bg-gradient-to-br from-[#e0e7ef] via-[#f7fafc] to-[#e0e7ef] rounded-2xl shadow p-0 max-w-5xl mx-auto overflow-hidden my-1">
        <div className="absolute right-0 top-0 h-full w-2 bg-[#fbbf24] rounded-tl-2xl rounded-bl-2xl" />
        <div className="relative z-10 py-12 px-6 md:px-16 flex flex-col gap-10">
          <motion.h2
            className="text-2xl md:text-3xl font-extrabold mb-10 text-[#1a604f] text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            إجراءات إضافية يمكنك اتخاذها
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <motion.div
              className="bg-[#f1f5fb] rounded-xl shadow-md p-6 flex flex-row items-center gap-6 border border-[#fbbf24]/40 hover:scale-[1.03] transition-transform duration-300"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="text-[#fbbf24] bg-[#fff7e6] rounded-full p-4 shadow-md">
                <Campaign style={{ fontSize: 40 }} />
              </span>
              <div className="flex flex-col items-start text-right">
                <div className="font-bold text-[#1a604f] text-lg mb-1">حملة توعوية عن الملكية الفكرية</div>
                <div className="text-gray-700 text-base">نقوم بنشر بعض المقالات والمشاركات تعرف المجتمع بالملكية الفكرية وأهميتها لتكون مرحلة بناء وعي.</div>
              </div>
            </motion.div>
            <motion.div
              className="bg-[#f1f5fb] rounded-xl shadow-md p-6 flex flex-row items-center gap-6 border border-[#fbbf24]/40 hover:scale-[1.03] transition-transform duration-300"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-[#10b981] bg-[#e0f7ef] rounded-full p-4 shadow-md">
                <Storefront style={{ fontSize: 40 }} />
              </span>
              <div className="flex flex-col items-start text-right">
                <div className="font-bold text-[#1a604f] text-lg mb-1">توفير الكتاب في منصات ورقية وإلكترونية</div>
                <div className="text-gray-700 text-base">التعاقد مع متاجر إلكترونية أو منصات رقمية لتوفير الكتاب للقراء لتمكنهم من الحصول عليه بسهولة.</div>
              </div>
            </motion.div>
            <motion.div
              className="bg-[#f1f5fb] rounded-xl shadow-md p-6 flex flex-row items-center gap-6 border border-[#fbbf24]/40 hover:scale-[1.03] transition-transform duration-300"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="text-[#2563eb] bg-[#e0e7ff] rounded-full p-4 shadow-md">
                <CheckCircle style={{ fontSize: 40 }} />
              </span>
              <div className="flex flex-col items-start text-right">
                <div className="font-bold text-[#1a604f] text-lg mb-1">الإعلان عن النسخة الأصلية</div>
                <div className="text-gray-700 text-base">نخبر الجمهور أن الكتاب متوفر في المتاجر التي تعاقدنا معها.</div>
              </div>
            </motion.div>
            <motion.div
              className="bg-[#f1f5fb] rounded-xl shadow-md p-6 flex flex-row items-center gap-6 border border-[#fbbf24]/40 hover:scale-[1.03] transition-transform duration-300"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="text-[#f43f5e] bg-[#ffe4e6] rounded-full p-4 shadow-md">
                <Warning style={{ fontSize: 40 }} />
              </span>
              <div className="flex flex-col items-start text-right">
                <div className="font-bold text-[#1a604f] text-lg mb-1">الإعلان عن النسخة المقرصنة</div>
                <div className="text-gray-700 text-base">نخبر الجمهور عن النسخة المقرصنة ونحذرهم من اقتناءها ونقدم لهم عرض خاص لمن يرغب بالحصول على النسخة الأصلية.</div>
              </div>
            </motion.div>
            <motion.div
              className="bg-[#f1f5fb] rounded-xl shadow-md p-6 flex flex-row items-center gap-6 border border-[#fbbf24]/40 hover:scale-[1.03] transition-transform duration-300 md:col-span-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <span className="text-[#eab308] bg-[#fef9c3] rounded-full p-4 shadow-md">
                <TrendingUp style={{ fontSize: 40 }} />
              </span>
              <div className="flex flex-col items-start text-right">
                <div className="font-bold text-[#1a604f] text-lg mb-1">نوسع مبيعات الكتاب</div>
                <div className="text-gray-700 text-base">نقوم بتصميم حملة تسويقية متكاملة على منصات التواصل الاجتماعية وفي المتجر الإلكتروني لنزيد من مبيعات الكتاب ونحقق الفائدة المالية.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
);

export default Section11;
