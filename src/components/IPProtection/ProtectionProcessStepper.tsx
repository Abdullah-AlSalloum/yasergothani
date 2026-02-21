import React from 'react';
import { motion } from 'framer-motion';

const Section8: React.FC = () => (
  <section className="bg-[#f7fafc] rounded-2xl shadow p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-[#1a604f] text-center">كيف نساعدك في حماية الحقوق الفكرية لكتابك</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:items-start w-full md:w-2/3">
            {/* Stepper timeline */}
            <div className="relative border-r-4 border-[#3b6d6d]/30 pr-8 md:pr-12 flex flex-col gap-12">
              {/* Step 1 */}
              <div className="flex items-start gap-4 relative">
                <span className="bg-[#3b6d6d] text-white rounded-lg w-10 h-10 flex items-center justify-center text-xl font-bold absolute -right-14 md:-right-16 top-0 shadow-md">1</span>
                <div className="ml-2">
                  <div className="flex items-center gap-2 mb-1 font-bold text-[#1a604f] text-lg">دراسة الحالة</div>
                  <div className="text-gray-700 text-lg">نحدد حجم القرصنة التي تتعرض لها في الإنترنت.</div>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex items-start gap-4 relative">
                <span className="bg-[#3b6d6d] text-white rounded-lg w-10 h-10 flex items-center justify-center text-xl font-bold absolute -right-14 md:-right-16 top-0 shadow-md">2</span>
                <div className="ml-2">
                  <div className="flex items-center gap-2 mb-1 font-bold text-[#1a604f] text-lg">تصنيف الحالة</div>
                  <div className="text-gray-700 text-lg">
                    <span className="font-bold text-red-600">حالة خطرة:</span> كتاب مقرصن بشكل كبير ويتطلب تدخل سريع واتخاذ إجراءات شاملة على كافة المنصات.<br />
                    <span className="font-bold text-orange-500">حالة متوسطة:</span> كتاب مقرصن ومنتشر بشكل متوسط يتطلب اتخاذ إجراءات على بعض المنصات.<br />
                    <span className="font-bold text-green-600">حالة مخففة:</span> كتاب غير مقرصنة أو ليس منتشر بشكل كبير في الإنترنت، ينصح باتخاذ إجراءات احترازية لكي لا يؤثر على المبيعات.
                  </div>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex items-start gap-4 relative">
                <span className="bg-[#3b6d6d] text-white rounded-lg w-10 h-10 flex items-center justify-center text-xl font-bold absolute -right-14 md:-right-16 top-0 shadow-md">3</span>
                <div className="ml-2">
                  <div className="flex items-center gap-2 mb-1 font-bold text-[#1a604f] text-lg">التعقب والحماية</div>
                  <div className="text-gray-700 text-lg">يتم في هذه المرحلة إدخال معلومات الكتاب في برمجية خاصة لرصد وتتبع المنصات التي تقوم بنشر النسخة المقرصنة. نقوم بمراقبة الإنترنت بشكل مستمر للكشف عن أي نسخ غير قانونية لكتبك.</div>
                </div>
              </div>
              {/* Step 4 */}
              <div className="flex items-start gap-4 relative">
                <span className="bg-[#3b6d6d] text-white rounded-lg w-10 h-10 flex items-center justify-center text-xl font-bold absolute -right-14 md:-right-16 top-0 shadow-md">4</span>
                <div className="ml-2">
                  <div className="flex items-center gap-2 mb-1 font-bold text-[#1a604f] text-lg">حذف الكتب المقرصنة</div>
                  <div className="text-gray-700 text-lg">نتخذ الإجراءات التقنية اللازمة لحذف النسخ المقرصنة من كتابك من الإنترنت. نساعدك في تجهيز الأدلة والوثائق اللازمة من أجل الإجراءات القانونية الرسمية.</div>
                </div>
              </div>
              {/* Step 5 */}
              <div className="flex items-start gap-4 relative">
                <span className="bg-[#3b6d6d] text-white rounded-lg w-10 h-10 flex items-center justify-center text-xl font-bold absolute -right-14 md:-right-16 top-0 shadow-md">5</span>
                <div className="ml-2">
                  <div className="flex items-center gap-2 mb-1 font-bold text-[#1a604f] text-lg">المتابعة والدعم</div>
                  <div className="text-gray-700 text-lg">نقدم لك الدعم الفني طوال الوقت مع تزويدك بتقارير دورية.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className="flex justify-center mt-10">
          <motion.button className="bg-[#1a604f] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#437066] shadow-lg transition-all duration-200"
            whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
          >
            ابدأ حماية حقوقك الفكرية
          </motion.button>
        </div>
        </div>
      </section>
);

export default Section8;
