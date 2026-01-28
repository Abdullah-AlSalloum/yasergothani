import React from "react";
import { CheckCircleIcon, LightBulbIcon, PencilSquareIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

const features = [
  { icon: <CheckCircleIcon className="h-7 w-7 text-white mx-auto mb-2" />, title: "تخطيط شامل مجاني", desc: "تحليل الوضع الحالي لك" },
  { icon: <LightBulbIcon className="h-7 w-7 text-white mx-auto mb-2" />, title: "توصيات عملية", desc: "أفكار يمكنك تنفيذها!" },
  { icon: <PencilSquareIcon className="h-7 w-7 text-white mx-auto mb-2" />, title: "خطة واضحة", desc: "مرحلة تخرج بخطة تنفيذ" },
];

const CTASection = () => (
  <section id="calltoaction" className="py-16 px-4 md:px-12 bg-[#113c56] text-white relative overflow-hidden animate-fade-in">
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-4">
        <span className="inline-block bg-[#fcd410] text-white text-sm font-bold rounded-full px-4 py-1 mb-2 animate-bounce">عرض خاص</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 animate-fade-in-up" style={{ fontFamily: 'TheYearOfTheCamel, Tajawal, Arial, Helvetica, sans-serif' }}>
          ابدأ رحلتك التسويقية معنا اليوم
        </h2>
        <p className="text-lg mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>احصل على استشارة أو تحليل نتيجة مجانية لمدة 30 دقيقة مع خبرائنا، لنحلل وضعك الحالي ونقترح عليك حلول وخطوات عملية يمكنك تطبيقها فورًا.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {features.map((f, idx) => (
          <div key={idx} className="bg-white/10 rounded-xl p-6 shadow flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>
            {f.icon}
            <div className="font-bold text-lg mb-1">{f.title}</div>
            <div className="text-white/80 text-sm">{f.desc}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <InformationCircleIcon className="h-6 w-6" />
          احجز استشارة مجانية الآن
        </button>
        <button className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <InformationCircleIcon className="h-6 w-6" />
          عرض مزيد من التفاصيل
        </button>
      </div>
      <div className="text-white/80 text-lg mt-2 animate-fade-in-up" style={{ animationDelay: '1s' }}>* متوفر لعدد محدود من العملاء. لا توجد رسوم أو التزامات، وسيتم تقييم ملاءمتك مجانًا.</div>
    </div>
    <style>{`
      @keyframes fade-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes fade-in-up {
        0% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 1s ease-in;
      }
      .animate-fade-in-up {
        animation: fade-in-up 0.8s cubic-bezier(.39,.575,.565,1) both;
      }
    `}</style>
  </section>
);

export default CTASection;
