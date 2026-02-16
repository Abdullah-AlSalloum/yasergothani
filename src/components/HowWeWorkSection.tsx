import React, { useState, useEffect } from "react";

const steps = [
  { label: "التشخيص والتحليل", desc: "نحلل حساباتك، جمهورك، سوقك، وأداءك الحالي بدقة لنفهم أين أنت فعلًا." },
  { label: "بناء الاستراتيجية", desc: "نضع خطة واضحة بناء على أهدافك تشمل المحتوى، الإعلانات، التحويل، وحتى المبيعات." },
  { label: "التنفيذ الاحترافي", desc: "فريق متخصص يتولى التنفيذ الكامل وفق المعايير والاستراتيجية المعتمدة." },
  { label: "القياس والتقارير", desc: "نقيس الأداء بالأرقام، ونقدم تقارير تفصيلية تساعدك على اتخاذ قرارات صحيحة." },
  { label: "التحسين والنمو", desc: "نطوّر الأداء باستمرار لتحقيق نتائج مستدامة لا مؤقتة." },
];

const reassurance = [
  "لا عقود عشوائية",
  "لا التزام قبل وضوح الصورة"
];

const HowWeWorkSection = () => {
  const [activePings, setActivePings] = useState<number[]>([]);

  useEffect(() => {
    let idx = 0;
    setActivePings([0]);
    const interval = setInterval(() => {
      idx = (idx + 1) % steps.length;
      setActivePings((prev) => [...prev, idx]);
      setTimeout(() => {
        setActivePings((prev) => prev.filter((i) => i !== idx));
      }, 700);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
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
                <div className="space-y-6">
                  {steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <span className="relative flex h-12 w-12">
                        {activePings.includes(idx) && (
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${idx === 0 ? 'bg-blue-500' : idx === 1 ? 'bg-green-500' : idx === 2 ? 'bg-pink-500' : idx === 3 ? 'bg-yellow-500' : 'bg-red-500'}`}></span>
                        )}
                        <span className={`relative inline-flex rounded-full h-12 w-12 items-center justify-center font-bold text-lg text-white ${idx === 0 ? 'bg-blue-500' : idx === 1 ? 'bg-green-500' : idx === 2 ? 'bg-pink-500' : idx === 3 ? 'bg-yellow-500' : 'bg-red-500'}`}>{idx + 1}</span>
                      </span>
                      <div>
                        <div className="font-bold text-xl mb-1">{step.label}</div>
                        <div className="text-blue-100 text-md mt-2">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
            <div className="mt-8 w-full flex justify-center">
              <a href="#solutions" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow block text-center">
                ابدأ من هنا
              </a>
            </div>
            <div className="mt-4 w-full flex justify-center">
              <div className="bg-white/10 rounded-xl p-6 text-white text-lg font-semibold shadow w-full max-w-xl">
                <ul className="list-disc list-inside">
                  {reassurance.map((item, idx) => (
                    <li key={idx} className="mb-2">{item}</li>
                  ))}
                </ul>
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
        </div>
      </section>
    );
};

export default HowWeWorkSection;
