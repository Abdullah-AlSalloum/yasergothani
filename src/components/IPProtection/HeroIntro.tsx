import React from "react";
import { motion } from "framer-motion";

const Section1: React.FC = () => (
 <section className="w-full min-h-[50vh] flex items-start justify-center pt-24 relative overflow-hidden" style={{ background: 'none' }}>
         <img src="/images/lack-on-quran.jpeg" alt="background" className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none select-none z-0" />
         <div className="w-full flex flex-col items-start justify-start text-right max-w-5xl mx-auto px-8 relative z-10">
           <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#f1f5fb] z-10 ">
             هل تتعرض كتبك للقرصنة وأنت لا تعلم ؟ 
           </h1>
           <p className="text-2xl text-[#f1f5fb] mb-8">
             نرصد، نوثق، ونتابع انتهاكات حقوق النشر لكتبك على مدار العام. 
           </p>
           <a href="https://forms.gle/84BFkNhgWd47duzi9" target="_blank" rel="noopener noreferrer">
             <motion.button  className="bg-[#f1f5fb] text-[#1a604f] px-8 py-4 rounded-lg font-bold text-xl hover:bg-[#1a604f] hover:text-[#f1f5fb] w-fit transition-all duration-200 "
               whileHover={{ scale: 1.07 }}
               whileTap={{ scale: 0.97 }}
             >
               ابدأ حماية كتابك الآن
             </motion.button>
           </a>
         </div>
       </section>
);

export default Section1;
