import React from "react";
import { motion } from "framer-motion";

const Section3: React.FC = () => (
  <section className="w-full flex justify-center items-center py-8 md:py-2">
         <div className="w-full max-w-xl mx-auto flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white/20">
           <h2 className="text-2xl md:text-3xl font-extrabold text-[#f1f5fb] mb-6 text-center">هل تفضل تعلم آلية الرصد بنفسك؟</h2>
           <a href="/downloads/monitoring-guide.pdf" download target="_blank" rel="noopener noreferrer">
             <motion.button
               className="bg-[#f1f5fb] text-[#1a604f] px-8 py-4 rounded-lg font-bold text-xl hover:bg-[#1a604f] hover:text-[#f1f5fb] transition-all duration-200 shadow-md"
               whileHover={{ scale: 1.07 }}
               whileTap={{ scale: 0.97 }}
             >
               حمّل دليل الرصد المجاني
             </motion.button>
           </a>
         </div>
       </section>
);

export default Section3;
