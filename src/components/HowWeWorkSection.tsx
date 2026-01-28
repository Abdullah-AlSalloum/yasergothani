import React from "react";

const steps = [
  { label: "جلسة تشخيص", desc: "فهم مشكلتك وتحديد أولوياتك" },
  { label: "استراتيجية مخصصة", desc: "وضع خطة تناسب احتياجك" },
  { label: "تنفيذ", desc: "بدء العمل وتحقيق النتائج" },
  { label: "تقارير", desc: "متابعة الأداء وقياس النتائج" },
  { label: "تحسين مستمر", desc: "تطوير وتحسين دائم لتحقيق أفضل عائد" },
];

const reassurance = [
  "لا عقود عشوائية",
  "لا التزام قبل وضوح الصورة"
];

const HowWeWorkSection = () => (
  <section id="howwework" className="py-16 px-4 md:px-12 bg-[#113c56] text-white">
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none z-0 animate-pulse-sparkle">
          <div className="w-full h-full rounded-2xl border-4 border-blue-400 opacity-60"></div>
        </div>
        <div className="bg-white/10 rounded-2xl shadow-xl p-8 md:p-12 relative z-10">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: 'TheYearOfTheCamel, Tajawal, Arial, Helvetica, sans-serif' }}>
                منهجية مثبتة تحقق نتائج حقيقية
              </h2>
              <p className="mb-8 text-lg text-blue-100">نحن نؤمن بالشراكة ونرافقك في كل خطوة من تحليل الوضع لتجهيز الحل المناسب، إلى تنفيذ الحملات وقياس النتائج بدقة وشفافية.</p>
              <div className="space-y-4">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className={`rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg ${idx === 0 ? 'bg-blue-500' : idx === 1 ? 'bg-green-500' : idx === 2 ? 'bg-pink-500' : idx === 3 ? 'bg-yellow-500' : 'bg-red-500'} text-white`}>
                      {idx + 1}
                    </div>
                    <div>
                      <div className="font-bold text-xl">{step.label}</div>
                      <div className="text-blue-100 text-md">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow">
                  احجز استشارة أو منهجية مجانية
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col gap-4">
              <div className="bg-white/10 rounded-xl p-6 text-white text-lg font-semibold shadow">
                <span className="block mb-2 text-blue-200 font-bold">طمأنة</span>
                <ul className="list-disc list-inside">
                  {reassurance.map((item, idx) => (
                    <li key={idx} className="mb-2">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pulse-sparkle {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.1; }
        }
        .animate-pulse-sparkle {
          animation: pulse-sparkle 1.5s infinite;
        }
      `}</style>
    </div>
  </section>
);

export default HowWeWorkSection;
