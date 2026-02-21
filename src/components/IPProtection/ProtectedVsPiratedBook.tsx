import React from 'react';
import { motion } from 'framer-motion';

const Section6: React.FC = () => (
  <section className="py-8 max-w-7xl mx-auto flex flex-col gap-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-center">
          <div>
            <img src="/images/lack-inside-book.jpeg" alt="الكتاب المحمي" className="mx-auto mb-4 w-120 h-70 object-cover rounded-lg shadow" />
            <h3 className="text-3xl font-bold mb-4" style={{ color: '#f1f5fb' }}>الكتاب المحمي</h3>
            <p className="text-green-700 text-xl">يشهد زيادة في المبيعات وحماية ضد السرقات.</p>
          </div>
          <div>
            <img src="/images/lack-on-paper.jpeg" alt="الكتاب المقرصن" className="mx-auto mb-4 w-120 h-70 object-cover rounded-lg shadow" />
            <h3 className="text-3xl font-bold mb-4" style={{ color: '#f1f5fb' }}>الكتاب المقرصن</h3>
            <p className="text-red-700 text-xl">يعاني من تراجع في المبيعات ويتعرض لانتهاكات قانونية مستمرة.</p>
          </div>
        </div>
        
        <div className="w-full flex flex-col items-center md:items-center gap-4">
          <a href="https://forms.gle/ja1vKBEK7ZLFrKFU6" target="_blank" rel="noopener noreferrer">
          <motion.button className="bg-green-700 text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-green-800 transition w-fit"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}>
            احصل على دراسة حالة مجانية
          </motion.button>
          </a>
          <motion.button className="bg-red-600 text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-red-700 transition w-fit transition-all duration-200"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}>
            إزالة النسخ غير القانونية الآن
          </motion.button>
        </div>
      </section>
);

export default Section6;
