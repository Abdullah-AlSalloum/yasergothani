import React from 'react';
import {motion} from 'framer-motion';
import { VerifiedUser, Warning, TrendingUp } from '@mui/icons-material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';


const CaseStudy: React.FC = () => (
  <section className="w-full flex flex-col items-center justify-center my-2 px-2">
        <div className="w-full mx-auto flex flex-col gap-10 bg-[#f1f5fb] p-8 shadow-lg">
          <h2 className="text-4xl font-bold text-[#1a604f] text-center mb-2">دراسة حالة</h2>
          <h3 className="text-2xl font-semibold text-[#1a604f] text-center mb-10">كيف تمكّنّا من حماية كتاب أحد عملائنا من القرصنة بعد نشره في منصات غير قانونية؟</h3>
          <div className="w-full max-w-2xl mx-auto text-right relative">
            {/* Animated vertical line linking the points */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '90%' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="hidden md:block absolute -right-10 top-8 bg-gradient-to-b from-[#1a604f] via-[#eab308] to-[#22c55e] w-1 rounded-full z-10"
              style={{ minHeight: '120px' }}
            />
            <div className="mb-8 relative">
              {/* Overlap shadow for linking steps */}
              <div className="absolute left-0 right-0 -bottom-4 h-6 flex justify-center pointer-events-none" aria-hidden="true">
                <div className="w-2/3 h-4 rounded-full bg-[#1a604f]/10 blur-md mx-auto" />
              </div>
              <motion.h2
                className="text-2xl font-bold text-[#437066] mb-2 flex items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.span
                  animate={{
                    scale: [1, 1.15, 1],
                    boxShadow: [
                      '0 0 0 0 rgba(26,96,79,0.3)',
                      '0 0 0 8px rgba(26,96,79,0)',
                      '0 0 0 0 rgba(26,96,79,0.3)'
                    ]
                  }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
                  className="inline-flex"
                >
                  <VerifiedUser style={{ fontSize: 28, color: '#1a604f' }} />
                </motion.span>
                <span className="ml-2">دراسة الحالة</span>
              </motion.h2>
              <motion.p
                className="text-lg text-[#1a604f]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-[#1a604f]" />{' '}
                بعد دراسة حالة الكتاب تبين أن هناك عدد كبير جدًا من المنصات التي تقوم بنشر وتداول النسخة المقرصنة من الكتاب
                .
              </motion.p>
            </div>
            <div className="mb-8 relative">
              {/* Overlap shadow for linking steps */}
              <div className="absolute left-0 right-0 -bottom-4 h-6 flex justify-center pointer-events-none" aria-hidden="true">
                <div className="w-2/3 h-4 rounded-full bg-[#eab308]/10 blur-md mx-auto" />
              </div>
              <motion.h2
                className="text-2xl font-bold text-[#1a604f] mb-2 flex items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.span
                  animate={{
                    scale: [1, 1.15, 1],
                    boxShadow: [
                      '0 0 0 0 rgba(234,179,8,0.3)',
                      '0 0 0 8px rgba(234,179,8,0)',
                      '0 0 0 0 rgba(234,179,8,0.3)'
                    ]
                  }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
                  className="inline-flex"
                >
                  <Warning style={{ fontSize: 28, color: '#eab308', marginLeft: 8 }} />
                </motion.span>
                <span className="ml-2">تصنيف الحالة</span>
              </motion.h2>
              <motion.p
                className="text-lg text-[#1a604f]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-[#1a604f]" /> {' '}تم تصنيف الكتاب على أنه في حالة خطرة ، حيث تم رصد أكثر من 600 موضع على الإنترنت يقوم بنشر الكتاب بصيغة PDF مما يؤثر سلبًا على مبيعات الكتاب وينتهك حقوق المؤلف والناشر.
              </motion.p>
            </div>
            <div className="mb-8 relative">
              {/* Overlap shadow for linking steps */}
              <div className="absolute left-0 right-0 -bottom-4 h-6 flex justify-center pointer-events-none" aria-hidden="true">
                <div className="w-2/3 h-4 rounded-full bg-[#1a604f]/10 blur-md mx-auto" />
              </div>
              <motion.h2
                className="text-2xl font-bold text-[#1a604f] mb-2 flex items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.span
                  animate={{
                    scale: [1, 1.15, 1],
                    boxShadow: [
                      '0 0 0 0 rgba(26,96,79,0.3)',
                      '0 0 0 8px rgba(26,96,79,0)',
                      '0 0 0 0 rgba(26,96,79,0.3)'
                    ]
                  }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: 0.6 }}
                  className="inline-flex"
                >
                  <VisibilityIcon style={{ fontSize: 28, color: '#1a604f', marginLeft: 8 }} />
                </motion.span>
                <span className="ml-2">التعقب والحماية</span>
              </motion.h2>
              <motion.p
                className="text-lg text-[#1a604f]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-[#1a604f]" /> {' '}بشكل مباشر تمت إضافة الكتاب إلى البرمجية الخاصة بالرصد والتعقب على الإنترنت ومنصات التواصل.
              </motion.p>
              <motion.p
                className="text-lg text-[#1a604f]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-[#1a604f]" /> {' '}وبدأنا باتخاذ الإجراءات الازمة لحماية الكتاب.
              </motion.p>

            </div>
            <div className="mb-8 relative">
              {/* Overlap shadow for linking steps */}
              <div className="absolute left-0 right-0 -bottom-4 h-6 flex justify-center pointer-events-none" aria-hidden="true">
                <div className="w-2/3 h-4 rounded-full bg-[#e53935]/10 blur-md mx-auto" />
              </div>
              <motion.h2
                className="text-2xl font-bold text-[#1a604f] mb-2 flex items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.span
                  animate={{
                    scale: [1, 1.15, 1],
                    boxShadow: [
                      '0 0 0 0 rgba(229,57,53,0.3)',
                      '0 0 0 8px rgba(229,57,53,0)',
                      '0 0 0 0 rgba(229,57,53,0.3)'
                    ]
                  }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: 0.9 }}
                  className="inline-flex"
                >
                  <DeleteForeverIcon style={{ fontSize: 28, color: '#e53935', marginLeft: 8 }} />
                </motion.span>
                <span className="ml-2">حذف الكتب المقرصنة</span>
              </motion.h2>
              <motion.p
                className="text-lg text-[#1a604f]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-[#1a604f]" /> {' '}خلال فترة 6 أشهر تم حذف الكتاب من 85% من المواقع والصفحات التي كانت نشره PDF مقرصن.
              </motion.p>
            </div>
            <div className="mb-8">
              <motion.h2
                className="text-2xl font-bold text-[#1a604f] mb-2 flex items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.span
                  animate={{
                    scale: [1, 1.15, 1],
                    boxShadow: [
                      '0 0 0 0 rgba(34,197,94,0.3)',
                      '0 0 0 8px rgba(34,197,94,0)',
                      '0 0 0 0 rgba(34,197,94,0.3)'
                    ]
                  }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: 1.2 }}
                  className="inline-flex"
                >
                  <TrendingUp style={{ fontSize: 28, color: '#22c55e', marginLeft: 8 }} />
                </motion.span>
                <span className="ml-2">المتابعة والدعم</span>
              </motion.h2>
              <motion.p
                className="text-lg text-[#1a604f]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-[#1a604f]" /> {' '}خلال الفترة قمنا بتقديم التقارير للمسؤول بشكل دوري وقدمنا له الدعم الفني اللازم.
              </motion.p>
            </div>
          </div>
          <div className="bg-[#1a604f] rounded-lg shadow p-4 flex items-center gap-3 mb-6 text-white font-bold text-xl justify-center w-full max-w-2xl mx-auto">
            بعد حذف النسخ المقرصنة من الكتاب تحسنت مبيعات بشكل ملحوظ.
          </div>
          <motion.button className="bg-[#F44444] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition-all duration-200 shadow w-full max-w-xs mx-auto"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            ليكن كتابك في أمان ايضاً
          </motion.button>
        </div>
      </section>
);

export default CaseStudy;
