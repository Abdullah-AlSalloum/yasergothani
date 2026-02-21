import React from 'react';
import { motion } from 'framer-motion';


const Section12: React.FC = () => (
  <section className="bg-[#f7fafc] rounded-2xl shadow p-8 max-w-4xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#1a604f]">
          هل أنت مستعد لحماية حقوقك الفكرية ؟
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          لا تنتظر حتى تتعرض حقوقك للانتهاك. نحن هنا لنساعدك في كل خطوة من طريقك
          لتكون كُتبك بأمان من القراصنة الإلكترونية
        </p>
        <motion.button className="bg-[#1a604f] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#437066] transition-all duration-200 shadow"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
        >
          احصل على تقييم مجاني الآن
        </motion.button>
      </section>
);

export default Section12;
