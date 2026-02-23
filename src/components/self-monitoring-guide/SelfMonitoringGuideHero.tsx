import React from "react";
import GuideAudienceSection from "@/components/self-monitoring-guide/GuideAudienceSection";

const SelfMonitoringGuideHero: React.FC = () => (
  <main className="min-h-screen w-full bg-[#0f3b33] text-[#f1f5fb] px-6 py-16 relative overflow-hidden">
    <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#1a604f] rounded-full blur-3xl opacity-60" />
    <div className="absolute bottom-0 -right-24 w-96 h-96 bg-[#f7d54b] rounded-full blur-3xl opacity-20" />
    <section className="w-full max-w-5xl mx-auto relative z-10">
      <div className="flex flex-col gap-10">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 w-fit">
          <span className="text-sm md:text-base font-semibold text-[#f1f5fb]/90">دليل مجاني</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-snug md:leading-tight text-right">
          دليل عملي لرصد وتتبع الكتب المقرصنة خطوة بخطوة
        </h1>
        <p className="text-lg md:text-2xl text-[#f1f5fb]/90 text-right max-w-3xl">
          ماذا ستتعلم في هذا الكتاب
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg text-right transition-all duration-200 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl">
            <p className="text-lg md:text-xl font-semibold">أكثر المواقع الإلكترونية التي تقوم بنشر الكتب المقرصنة.</p>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg text-right transition-all duration-200 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl">
            <p className="text-lg md:text-xl font-semibold">أهم الروابط للبلاغ عن الانتهاكات على وسائل التواصل.</p>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg text-right transition-all duration-200 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl">
            <p className="text-lg md:text-xl font-semibold">بعض أدوات التتبع والرصد المتاحة على الإنترنت.</p>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg text-right transition-all duration-200 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl">
            <p className="text-lg md:text-xl font-semibold">طرق غير مباشرة لحماية الكتب من القرصنة والانتهاك.</p>
          </div>
        </div>
        <GuideAudienceSection />
      </div>
    </section>
  </main>
);

export default SelfMonitoringGuideHero;
