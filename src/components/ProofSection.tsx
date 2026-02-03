import React from "react";
import { StarIcon, ChartBarIcon, UsersIcon, RocketLaunchIcon } from '@heroicons/react/24/solid';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const stats = [
  { icon: <StarIcon className="h-8 w-8 text-pink-500" />, value: "10/8.5", label: "تقييم العملاء" },
  { icon: <ChartBarIcon className="h-8 w-8 text-red-500" />, value: "300%", label: "مؤشر نمو المبيعات" },
  { icon: <RocketLaunchIcon className="h-8 w-8 text-green-500" />, value: "200+", label: "حملة ناجحة" },
  { icon: <WorkspacePremiumIcon className="!h-8 !w-8 text-blue-500" />, value: "10+", label: "سنوات خبرة" },
];

const testimonials = [
  {
    text: "\"لقد تحولت نتائجنا بشكل جذري بعد العمل معهم، زادت المبيعات بنسبة 150% في الربع الأول.\"",
    name: "أحمد العتيبي",
    role: "المدير التنفيذي، شركة رواد"
  },
  {
    text: "\"الاحترافية في التعامل والدقة في التنفيذ في ما يميزهم، أنصح بشدة بخدماتهم.\"",
    name: "سارة محمد",
    role: "مؤسسة متجر أزياء"
  },
  {
    text: "\"الاستراتيجية المحتوى التي وضعوها لنا ساعدتنا في تصدر نتائج البحث وجذب عملاء محتملين بجودة عالية.\"",
    name: "خالد الفهد",
    role: "مدير تسويق عقاري"
  }
];

const ProofSection = () => (
  <section id="proof" className="py-16 px-4 md:px-12 bg-[var(--background)] text-[var(--foreground)]">
    <div className="max-w-5xl mx-auto">
      <div className="mb-8 text-center">
        <div className="w-16 h-3 mx-auto mb-4 rounded-full bg-[var(--secondary-green)]"></div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2" style={{ fontFamily: 'TheYearOfTheCamel, Tajawal, Arial, Helvetica, sans-serif' }}>
          أرقام تتحدث عن نفسها
        </h2>
        <p className="text-lg text-[#f1f5fb]">ننظر للنتائج التي حققناها لعملائنا بثقة وشفافية، الأرقام ترسم هويتنا.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-pink-200 via-blue-100 to-green-100 rounded-xl shadow flex flex-col items-center py-8 px-4 transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            {stat.icon}
            <div className="text-3xl font-bold mt-4 mb-2" style={{ fontFamily: 'Tajawal, Arial, Helvetica, sans-serif', color: '#fcd410' }}>{stat.value}</div>
            <div className="text-md text-gray-700 font-semibold">{stat.label}</div>
          </div>
        ))}
      </div>
      {/* <div className="bg-[var(--secondary-blue)] rounded-2xl p-8 md:p-12">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'TheYearOfTheCamel, Tajawal, Arial, Helvetica, sans-serif' }}>
          ماذا يقول عملاؤنا؟
        </h3>
        <p className="text-white text-center mb-8">قصص نجاح حقيقية لأشخاص وثقوا بنا</p>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white/10 rounded-xl shadow p-6 flex flex-col items-center text-white">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg font-medium mb-4 text-center">{t.text}</p>
              <div className="font-bold">{t.name}</div>
              <div className="text-sm text-gray-200">{t.role}</div>
            </div>
          ))}
        </div>
      </div> */}
       <div className="flex justify-center mt-10">
        <a
          href="#solutions"
          className="group relative inline-flex items-center justify-center gap-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-primary font-extrabold py-3 px-6 rounded-xl text-center shadow-xl hover:from-yellow-500 hover:to-yellow-400 hover:scale-[1.03] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          style={{ boxShadow: '0 4px 24px 0 rgba(252, 212, 16, 0.18)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
          </svg>
          ابدأ من هنا
        </a>
      </div>
    </div>
  </section>
);

export default ProofSection;
