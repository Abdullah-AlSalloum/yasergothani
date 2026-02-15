import React from "react";
import { LooksOne, LooksTwo, Looks3 as LooksThree,Looks4 as LooksFour,Looks5 as LooksFive, Assignment, Category, TrackChanges, Delete, SupportAgent } from '@mui/icons-material';
import { VerifiedUser, TrendingDown, EmojiObjects, WorkspacePremium, Campaign, Storefront, CheckCircle, Warning, TrendingUp } from '@mui/icons-material';
import { Public, AttachMoney } from '@mui/icons-material';
import { motion } from "framer-motion";
import Forward30Icon from "@mui/icons-material/Forward30";

const IPProtectionRedesign: React.FC = () => {
  return (
    <main className="w-full flex flex-col gap-16">
      {/* Section 1 */}
      <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200 max-w-4xl mx-auto mt-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 w-full flex justify-center">
            <img
              src="/images/lack-inside-book.jpeg"
              alt="حماية الملكية الفكرية لكتب المؤلفين والناشرين"
              className="rounded-xl shadow-md max-h-72 object-cover w-full md:w-auto"
              style={{ maxWidth: "320px" }}
            />
          </div>
          <div className="md:w-1/2 w-full text-center md:text-right">
            <h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-[#11425C]">
              حماية الملكية الفكرية لكتب المؤلفين والناشرين
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              خدمات متكاملة لحماية كتبك من القرصنة
            </p>
            <button className="bg-[#11425C] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#17618a] transition">
              ابدأ حماية كتابك الآن
            </button>
          </div>
        </div>
      </section>
      {/* Section 2*/}
      <section className="relative flex justify-center items-center py-16 md:py-20 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-[#17618a]/20 via-[#11425C]/30 to-[#17618a]/10 animate-gradientMove rounded-2xl" />
        </motion.div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto w-full">
          <motion.img
            src="/images/lack-on-paper.jpeg"
            alt="كتاب محمي"
            className="w-40 h-40 md:w-56 md:h-56 rounded-xl shadow-lg object-cover mb-6 md:mb-0"
            initial={{ scale: 0.8, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
            style={{ boxShadow: "0 8px 32px rgba(17,66,92,0.15)" }}
          />
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <motion.h2
              className="text-2xl md:text-3xl font-extrabold text-[#f1f5fb] mb-4"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              في عصر تزايُد انتهاكات الحقوق الفكرية على الإنترنت
            </motion.h2>
            <motion.p
              className="text-xl text-[#f1f5fb] font-semibold"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              أصبحت حماية الكتب أمرًا ضروريًا
            </motion.p>
          </div>
        </div>
      </section>
      {/* Section 3*/}
      <section className="bg-[#f7fafc] rounded-2xl shadow p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-[#11425C] text-center">
          إحصائيات مهمة عن قرصنة الكتب
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center gap-3">
            <span className="text-[#17618a]">
              <Forward30Icon style={{ fontSize: 48 }}/>
            </span>
            <div className="text-gray-700 text-center text-lg">
              ما يقارب 30% من الكتب الرقمية يتم قرصنتها في أول 6 أشهر من
              إطلاقها.
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center gap-3">
            <span className="text-[#17618a]">
              <Public style={{ fontSize: 48 }} />
            </span>
            <div className="text-gray-700 text-center text-lg">
              في الوطن العربي بشكل خاص تُعَدّ قرصنة الكتب مشكلة متفاقمة تهدد
              الكتاب بالانقراض.
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center gap-3">
            <span className="text-[#17618a]">
              <AttachMoney style={{ fontSize: 48 }} />
            </span>
            <div className="text-gray-700 text-center text-lg">
              تقدر خسائر الناشرين والمؤلفين بسبب القرصنة بحوالي 7.6 مليار دولار
              سنويًا على مستوى العالم.
            </div>
          </div>
        </div>
      </section>
      {/* Section 4 */}
      <section className=" rounded-2xl shadow p-8 max-w-3xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#f1f5fb]">
          فوائد الحماية القانونية
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-3 border border-[#e0e7ef]">
            <div className="text-2xl font-bold text-[#11425C]">80%</div>
            <div className="text-gray-700 text-center text-lg">من الأعمال المسجلة قانونيًا يتمتع أصحابها بحماية أكبر ضد الانتهاكات.</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-3 border border-[#e0e7ef]">
            <div className="text-2xl font-bold text-[#11425C]">90%</div>
            <div className="text-gray-700 text-center text-lg">من المؤلفين الذين سجلوا حقوقهم القانونية شهدوا انخفاضًا ملحوظًا في القرصنة بعد 6 أشهر من التسجيل.</div>
          </div>
        </div>
          <button className="bg-[#f1f5fb] text-[#11425C] px-8 py-3 rounded-lg font-bold text-lg border-2 border-[#11425C] hover:bg-[#e3f0fa] hover:text-[#17618a] hover:border-[#17618a] transition">
            ابدأ بتأمين كتابك اليوم
          </button>
      </section>
      {/* Section 5 */}
      <section className="bg-[#f7fafc] rounded-2xl shadow p-8 max-w-4xl mx-auto text-center flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="flex-1">
          <h3 className="font-bold text-[#11425C] mb-2">الكتاب المحمي</h3>
          <p className="text-green-700">
            يشهد زيادة في المبيعات وحماية ضد السرقات.
          </p>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-[#11425C] mb-2">الكتاب المقرصن</h3>
          <p className="text-red-700">
            يعاني من تراجع في المبيعات ويتعرض لانتهاكات قانونية مستمرة.
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-4 md:mt-0">
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition">
            إزالة النسخ غير القانونية الآن
          </button>
          <button className="bg-[#11425C] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#17618a] transition">
            احصل على دراسة حالة مجانية
          </button>
        </div>
      </section>
      {/* Section 6 */}
      <section className="bg-white rounded-2xl shadow p-8 max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#11425C]">
          خدماتنا المتكاملة
        </h2>
        <ul className="list-disc pr-6 text-gray-700 text-lg mb-6 space-y-2">
          <li>
            <span className="font-bold text-[#11425C]">الرصد والتعقب:</span>{" "}
            نقوم بمراقبة الإنترنت بشكل مستمر للكشف عن أي نسخ غير قانونية لكتبك.
          </li>
          <li>
            <span className="font-bold text-[#11425C]">التسجيل القانوني:</span>{" "}
            نساعدك بتسجيل أعمالك الأدبية بشكل قانوني في قانون الملكية الفكرية
            لضمان حقوقك.
          </li>
          <li>
            <span className="font-bold text-[#11425C]">
              حذف الكتب المقرصنة:
            </span>{" "}
            نقوم باتخاذ إجراءات تساعد في إزالة أي المحتوى مقرصن من الإنترنت بشكل
            قانوني.
          </li>
        </ul>
        <button className="bg-[#11425C] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#17618a] transition">
          لن نقلق من قرصنة كتابك بعد اليوم
        </button>
      </section>
      {/* Section 7 - Vertical Stepper/Timeline */}
      <section className="bg-[#f7fafc] rounded-2xl shadow p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-[#11425C] text-center">كيف نساعدك في حماية الحقوق الفكرية لكتابك</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:items-start w-full md:w-2/3">
            {/* Stepper timeline */}
            <div className="relative border-r-4 border-[#3b6d6d]/30 pr-8 md:pr-12 flex flex-col gap-12">
              {/* Step 1 */}
              <div className="flex items-start gap-4 relative">
                <span className="bg-[#3b6d6d] text-white rounded-lg w-10 h-10 flex items-center justify-center text-xl font-bold absolute -right-14 md:-right-16 top-0 shadow-md"><LooksOne /></span>
                <div className="ml-2">
                  <div className="flex items-center gap-2 mb-1 font-bold text-[#11425C]"><Assignment style={{ color: '#17618a' }} /> دراسة الحالة</div>
                  <div className="text-gray-700 text-lg">نحدد حجم القرصنة التي تتعرض لها في الإنترنت.</div>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex items-start gap-4 relative">
                <span className="bg-[#3b6d6d] text-white rounded-lg w-10 h-10 flex items-center justify-center text-xl font-bold absolute -right-14 md:-right-16 top-0 shadow-md"><LooksTwo /></span>
                <div className="ml-2">
                  <div className="flex items-center gap-2 mb-1 font-bold text-[#11425C]"><Category style={{ color: '#17618a' }} /> تصنيف الحالة</div>
                  <div className="text-gray-700 text-lg">
                    <span className="font-bold text-red-600">حالة خطرة:</span> كتاب مقرصن بشكل كبير ويتطلب تدخل سريع واتخاذ إجراءات شاملة على كافة المنصات.<br />
                    <span className="font-bold text-orange-500">حالة متوسطة:</span> كتاب مقرصن ومنتشر بشكل متوسط يتطلب اتخاذ إجراءات على بعض المنصات.<br />
                    <span className="font-bold text-green-600">حالة مخففة:</span> كتاب غير مقرصنة أو ليس منتشر بشكل كبير في الإنترنت، ينصح باتخاذ إجراءات احترازية لكي لا يؤثر على المبيعات.
                  </div>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex items-start gap-4 relative">
                <span className="bg-[#3b6d6d] text-white rounded-lg w-10 h-10 flex items-center justify-center text-xl font-bold absolute -right-14 md:-right-16 top-0 shadow-md"><LooksThree /></span>
                <div className="ml-2">
                  <div className="flex items-center gap-2 mb-1 font-bold text-[#11425C]"><TrackChanges style={{ color: '#17618a' }} /> التعقب والحماية</div>
                  <div className="text-gray-700 text-lg">يتم في هذه المرحلة إدخال معلومات الكتاب في برمجية خاصة لرصد وتتبع المنصات التي تقوم بنشر النسخة المقرصنة. نقوم بمراقبة الإنترنت بشكل مستمر للكشف عن أي نسخ غير قانونية لكتبك.</div>
                </div>
              </div>
              {/* Step 4 */}
              <div className="flex items-start gap-4 relative">
                <span className="bg-[#3b6d6d] text-white rounded-lg w-10 h-10 flex items-center justify-center text-xl font-bold absolute -right-14 md:-right-16 top-0 shadow-md"><LooksFour /></span>
                <div className="ml-2">
                  <div className="flex items-center gap-2 mb-1 font-bold text-[#11425C]"><Delete style={{ color: '#17618a' }} /> حذف الكتب المقرصنة</div>
                  <div className="text-gray-700 text-lg">نتخذ الإجراءات التقنية اللازمة لحذف النسخ المقرصنة من كتابك من الإنترنت. نساعدك في تجهيز الأدلة والوثائق اللازمة من أجل الإجراءات القانونية الرسمية.</div>
                </div>
              </div>
              {/* Step 5 */}
              <div className="flex items-start gap-4 relative">
                <span className="bg-[#3b6d6d] text-white rounded-lg w-10 h-10 flex items-center justify-center text-xl font-bold absolute -right-14 md:-right-16 top-0 shadow-md"><LooksFive /></span>
                <div className="ml-2">
                  <div className="flex items-center gap-2 mb-1 font-bold text-[#11425C]"><SupportAgent style={{ color: '#17618a' }} /> المتابعة والدعم</div>
                  <div className="text-gray-700 text-lg">نقدم لك الدعم الفني طوال الوقت مع تزويدك بتقارير دورية.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className="flex justify-center mt-10">
          <button className="bg-[#11425C] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#17618a] transition shadow-lg">
            ابدأ حماية حقوقك الفكرية
          </button>
        </div>
        </div>
      </section>
      {/* Section 8 */}
      <section className="bg-white rounded-2xl shadow p-8 max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#11425C]">
          دراسة حالة
        </h2>
        <h3 className="text-lg font-semibold text-[#17618a] mb-4">
          كيف تمكّنّا من حماية كتاب أحد عملائنا من القرصنة بعد نشره في منصات غير
          قانونية؟
        </h3>
        <ul className="list-disc pr-6 text-gray-700 text-lg mb-6 space-y-2">
          <li>
            بعد دراسة حالة الكتاب تبين أن هناك عدد كبير جدًا من المنصات التي
            تقوم بنشر وتداول النسخة المقرصنة من الكتاب.
          </li>
          <li>
            تم تصنيف الكتاب على أنه في حالة خطرة ، حيث تم رصد أكثر من 600 موضع
            على الإنترنت يقوم بنشر الكتاب بصيغة PDF مما يؤثر سلبًا على مبيعات
            الكتاب وينتهك حقوق المؤلف والناشر.
          </li>
          <li>
            بشكل مباشر تمت إضافة الكتاب إلى البرمجية الخاصة بالرصد والتعقب على
            الإنترنت ومنصات التواصل. وبدأنا باتخاذ الإجراءات الازمة لحماية
            الكتاب.
          </li>
          <li>
            خلال فترة 6 أشهر تم حذف الكتاب من 85% من المواقع والصفحات التي كانت
            نشره PDF مقرصن.
          </li>
          <li>
            خلال الفترة قمنا بتقديم التقارير للمسؤول بشكل دوري وقدمنا له الدعم
            الفني اللازم.
          </li>
          <li className="font-bold text-green-700">
            الخلاصة: بعد حذف النسخ المقرصنة من الكتاب تحسنت مبيعات بشكل ملحوظ.
          </li>
        </ul>
        <button className="bg-[#11425C] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#17618a] transition">
          ليكن كتابك في أمان ايضاً
        </button>
      </section>
      {/* Section 9 - Visually distinct, horizontal cards, accent bar */}
      <section className="relative bg-gradient-to-br from-[#f7fafc] via-[#e3f0fa] to-[#f7fafc] rounded-2xl shadow p-0 max-w-5xl mx-auto overflow-hidden my-12">
        <div className="absolute left-0 top-0 h-full w-2 bg-[#17618a] rounded-tr-2xl rounded-br-2xl" />
        <div className="relative z-10 py-12 px-6 md:px-16 flex flex-col gap-10">
          <motion.h2
            className="text-2xl md:text-3xl font-extrabold mb-2 text-[#11425C] text-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            لماذا تختارنا؟
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            <motion.div
              className="flex-1 bg-white rounded-xl shadow-md p-8 flex flex-row items-center gap-6 border border-[#e0e7ef] hover:scale-[1.03] transition-transform duration-300"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-[#fbbf24] bg-[#fff7e6] rounded-full p-4 shadow-md">
                <EmojiObjects style={{ fontSize: 48 }} />
              </span>
              <div className="flex flex-col items-start text-right">
                <div className="font-bold text-[#11425C] text-lg mb-1">تكنولوجيا متقدمة</div>
                <div className="text-gray-700 text-base">نستخدم أدوات وتقنيات حديثة لرصد وتتبع الكتب المقرصنة بشكل فعّال.</div>
              </div>
            </motion.div>
            <motion.div
              className="flex-1 bg-white rounded-xl shadow-md p-8 flex flex-row items-center gap-6 border border-[#e0e7ef] hover:scale-[1.03] transition-transform duration-300"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="text-[#8b5cf6] bg-[#ede9fe] rounded-full p-4 shadow-md">
                <WorkspacePremium style={{ fontSize: 48 }} />
              </span>
              <div className="flex flex-col items-start text-right">
                <div className="font-bold text-[#11425C] text-lg mb-1">خبرة واسعة</div>
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
              className="bg-[#17618a] text-white px-10 py-4 rounded-lg font-bold text-xl shadow-lg hover:bg-[#11425C] transition-all duration-200 border-2 border-[#17618a] hover:border-[#11425C]"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              ابدأ حماية حقوقك الفكرية
            </motion.button>
          </motion.div>
        </div>
      </section>
      {/* Section 10 - More interesting, icon cards, animated */}
      <section className="relative bg-gradient-to-br from-[#e0e7ef] via-[#f7fafc] to-[#e0e7ef] rounded-2xl shadow p-0 max-w-5xl mx-auto overflow-hidden my-12">
        <div className="absolute right-0 top-0 h-full w-2 bg-[#fbbf24] rounded-tl-2xl rounded-bl-2xl" />
        <div className="relative z-10 py-12 px-6 md:px-16 flex flex-col gap-10">
          <motion.h2
            className="text-2xl md:text-3xl font-extrabold mb-10 text-[#11425C] text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            إجراءات إضافية يمكنك اتخاذها
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <motion.div
              className="bg-white rounded-xl shadow-md p-6 flex flex-row items-center gap-6 border border-[#fbbf24]/40 hover:scale-[1.03] transition-transform duration-300"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="text-[#fbbf24] bg-[#fff7e6] rounded-full p-4 shadow-md">
                <Campaign style={{ fontSize: 40 }} />
              </span>
              <div className="flex flex-col items-start text-right">
                <div className="font-bold text-[#11425C] text-lg mb-1">حملة توعوية عن الملكية الفكرية</div>
                <div className="text-gray-700 text-base">نقوم بنشر بعض المقالات والمشاركات تعرف المجتمع بالملكية الفكرية وأهميتها لتكون مرحلة بناء وعي.</div>
              </div>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-md p-6 flex flex-row items-center gap-6 border border-[#fbbf24]/40 hover:scale-[1.03] transition-transform duration-300"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-[#10b981] bg-[#e0f7ef] rounded-full p-4 shadow-md">
                <Storefront style={{ fontSize: 40 }} />
              </span>
              <div className="flex flex-col items-start text-right">
                <div className="font-bold text-[#11425C] text-lg mb-1">توفير الكتاب في منصات ورقية وإلكترونية</div>
                <div className="text-gray-700 text-base">التعاقد مع متاجر إلكترونية أو منصات رقمية لتوفير الكتاب للقراء لتمكنهم من الحصول عليه بسهولة.</div>
              </div>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-md p-6 flex flex-row items-center gap-6 border border-[#fbbf24]/40 hover:scale-[1.03] transition-transform duration-300"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="text-[#2563eb] bg-[#e0e7ff] rounded-full p-4 shadow-md">
                <CheckCircle style={{ fontSize: 40 }} />
              </span>
              <div className="flex flex-col items-start text-right">
                <div className="font-bold text-[#11425C] text-lg mb-1">الإعلان عن النسخة الأصلية</div>
                <div className="text-gray-700 text-base">نخبر الجمهور أن الكتاب متوفر في المتاجر التي تعاقدنا معها.</div>
              </div>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-md p-6 flex flex-row items-center gap-6 border border-[#fbbf24]/40 hover:scale-[1.03] transition-transform duration-300"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="text-[#f43f5e] bg-[#ffe4e6] rounded-full p-4 shadow-md">
                <Warning style={{ fontSize: 40 }} />
              </span>
              <div className="flex flex-col items-start text-right">
                <div className="font-bold text-[#11425C] text-lg mb-1">الإعلان عن النسخة المقرصنة</div>
                <div className="text-gray-700 text-base">نخبر الجمهور عن النسخة المقرصنة ونحذرهم من اقتناءها ونقدم لهم عرض خاص لمن يرغب بالحصول على النسخة الأصلية.</div>
              </div>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-md p-6 flex flex-row items-center gap-6 border border-[#fbbf24]/40 hover:scale-[1.03] transition-transform duration-300 md:col-span-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <span className="text-[#eab308] bg-[#fef9c3] rounded-full p-4 shadow-md">
                <TrendingUp style={{ fontSize: 40 }} />
              </span>
              <div className="flex flex-col items-start text-right">
                <div className="font-bold text-[#11425C] text-lg mb-1">نوسع مبيعات الكتاب</div>
                <div className="text-gray-700 text-base">نقوم بتصميم حملة تسويقية متكاملة على منصات التواصل الاجتماعية وفي المتجر الإلكتروني لنزيد من مبيعات الكتاب ونحقق الفائدة المالية.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Section 11 */}
      <section className="bg-[#f7fafc] rounded-2xl shadow p-8 max-w-4xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#11425C]">
          هل أنت مستعد لحماية حقوقك الفكرية ؟
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          لا تنتظر حتى تتعرض حقوقك للانتهاك. نحن هنا لنساعدك في كل خطوة من طريقك
          لتكون كُتبك بأمان من القراصنة الإلكترونية
        </p>
        <button className="bg-[#11425C] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#17618a] transition">
          احصل على تقييم مجاني الآن
        </button>
      </section>
      {/* Section 12 */}
      <section className="bg-gradient-to-br from-[#f7fafc] via-[#e3f0fa] to-[#f7fafc] rounded-2xl shadow p-8 max-w-4xl mx-auto my-8">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-[#11425C] text-center">فوائد الحماية القانونية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-3 border border-[#e0e7ef]">
            <VerifiedUser style={{ fontSize: 48, color: '#17618a' }} />
            <div className="text-2xl font-bold text-[#11425C]">80%</div>
            <div className="text-gray-700 text-center text-lg">من الأعمال المسجلة قانونيًا يتمتع أصحابها بحماية أكبر ضد الانتهاكات.</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-3 border border-[#e0e7ef]">
            <TrendingDown style={{ fontSize: 48, color: '#e53935' }} />
            <div className="text-2xl font-bold text-[#11425C]">90%</div>
            <div className="text-gray-700 text-center text-lg">من المؤلفين الذين سجلوا حقوقهم القانونية شهدوا انخفاضًا ملحوظًا في القرصنة بعد 6 أشهر من التسجيل.</div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#11425C] text-white px-10 py-4 rounded-lg font-bold text-xl shadow-lg hover:bg-[#17618a] transition-all duration-200">
            ابدأ بتأمين كتابك اليوم
          </button>
        </div>
      </section>
    </main>
  );
};

export default IPProtectionRedesign;
