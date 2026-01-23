"use client";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import HandymanIcon from '@mui/icons-material/Handyman';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import YardIcon from '@mui/icons-material/Yard';

const steps = [
  {
    title: "التشخيص والتحليل",
    items: [
      "نحلل حساباتك، جمهورك، سوقك، وأداءك الحالي بدقة لنفهم أين أنت فعلًا."
    ],
    icon: <SearchIcon />,
  },
  {
    title: "بناء الاستراتيجية",
    items: [
      "نضع خطة واضحة بناء على أهدافك تشمل المحتوى، الإعلانات، التحويل، وحتى المبيعات."
    ],
    icon: <HandymanIcon />,
  },
  {
    title: "التنفيذ الاحترافي",
    items: [
      "فريق متخصص يتولى التنفيذ الكامل وفق المعايير والاستراتيجية المعتمدة."
    ],
    icon: <RocketLaunchIcon />,
  },
  {
    title: "القياس والتقارير",
    items: [
      "نقيس الأداء بالأرقام، ونقدم تقارير تفصيلية تساعدك على اتخاذ قرارات صحيحة."
    ],
    icon: <InsertChartIcon />,
  },
  {
    title: "التحسين والنمو",
    items: [
      "نطوّر الأداء باستمرار لتحقيق نتائج مستدامة لا مؤقتة."
    ],
    icon: <YardIcon />,
  },
];

export default function MethodologySection() {
  return (
    <section className="w-full py-12 px-4" style={{ background: 'var(--background)' }}>
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-2" style={{ fontFamily: "TheYearOfTheCamel, Tajawal, Arial" }}>
          منهجيتنا
        </h2>
        <div className="text-base sm:text-lg md:text-xl font-semibold text-primary mb-6" style={{ fontFamily: 'Tajawal, Arial', color: 'var(--foreground)' }}>
          نحن لا نقدّم خدمات منفصلة، بل نقود عملية تسويق كاملة ومترابطة
        </div>
        <div className="flex flex-col md:flex-row justify-between items-stretch w-full gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="box">
              <span></span>
              <div className="content">
                <div className="text-4xl mb-2" style={{ color: '#fff'}}>{step.icon}</div>
                <div className="font-bold text-lg mb-1" style={{ color: '#fff' }}>{step.title}</div>
                <ul className="text-base space-y-1" style={{ color: '#b6d6f6' }}>
                  {step.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 max-w-3xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="bg-white/70 dark:bg-[#113c56]/80 shadow-lg rounded-2xl p-6 border border-primary-light transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" style={{ backdropFilter: 'blur(8px)' }}>
            <div className="font-bold text-primary text-lg mb-2">التشخيص والتحليل</div>
            <div className="text-secondary-blue text-base sm:text-m">نحلل حساباتك، جمهورك، سوقك، وأداءك الحالي بدقة لنفهم أين أنت فعلًا.</div>
          </div>
          <div className="bg-white/70 dark:bg-[#113c56]/80 shadow-lg rounded-2xl p-6 border border-primary-light transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" style={{ backdropFilter: 'blur(8px)' }}>
            <div className="font-bold text-primary text-lg mb-2">بناء الاستراتيجية</div>
            <div className="text-secondary-blue text-base sm:text-m">نضع خطة واضحة بناء على أهدافك تشمل المحتوى، الإعلانات، التحويل، وحتى المبيعات.</div>
          </div>
          <div className="bg-white/70 dark:bg-[#113c56]/80 shadow-lg rounded-2xl p-6 border border-primary-light transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" style={{ backdropFilter: 'blur(8px)' }}>
            <div className="font-bold text-primary text-lg mb-2">التنفيذ الاحترافي</div>
            <div className="text-secondary-blue text-base sm:text-m">فريق متخصص يتولى التنفيذ الكامل وفق المعايير والاستراتيجية المعتمدة.</div>
          </div>
          <div className="bg-white/70 dark:bg-[#113c56]/80 shadow-lg rounded-2xl p-6 border border-primary-light transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" style={{ backdropFilter: 'blur(8px)' }}>
            <div className="font-bold text-primary text-lg mb-2">القياس والتقارير</div>
            <div className="text-secondary-blue text-base sm:text-m">نقيس الأداء بالأرقام، ونقدم تقارير تفصيلية تساعدك على اتخاذ قرارات صحيحة.</div>
          </div>
          <div className="bg-white/70 dark:bg-[#113c56]/80 shadow-lg rounded-2xl p-6 border border-primary-light transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer sm:col-span-2" style={{ backdropFilter: 'blur(8px)' }}>
            <div className="font-bold text-primary text-lg mb-2">التحسين والنمو</div>
            <div className="text-secondary-blue text-base sm:text-m">نطوّر الأداء باستمرار لتحقيق نتائج مستدامة لا مؤقتة.</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .box {
          position: relative;
          width: 220px;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.5s;
          z-index: 1;
        }
        .box::before {
          content: ' ';
          position: absolute;
          top: 0;
          left: 50px;
          width: 50%;
          height: 100%;
          background: linear-gradient(#1a604f);
          border-radius: 8px;
          transform: skewX(15deg);
          transition: 0.5s;
        }
        .box::after {
          content: '';
          position: absolute;
          top: 0;
          left: 50px;
          width: 50%;
          height: 100%;
          background: linear-gradient(#1a604f);
          border-radius: 8px;
          transform: skewX(15deg);
          transition: 0.5s;
          filter: blur(30px);
        }
        .box:hover:before,
        .box:hover:after {
          transform: skewX(0deg) scaleX(1.3);
        }
        .box span {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 5;
          pointer-events: none;
        }
        .box span::before {
          content: '';
          position: absolute;
          top: -40px;
          left: 40px;
          width: 50px;
          height: 50px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          opacity: 1;
          transition: 0.1s;
          animation: animate 2s ease-in-out infinite;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }
        .box span::after {
          content: '';
          position: absolute;
          bottom: -40px;
          right: 40px;
          width: 50px;
          height: 50px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          opacity: 1;
          transition: 0.5s;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          animation-delay: -1s;
        }
        .box .content {
          position: relative;
          width: 190px;
          height: 254px;
          padding: 20px 40px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          z-index: 1;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .box .content h2 {
          font-size: 20px;
          color: #fff;
          margin-bottom: 10px;
        }
        @media (max-width: 768px) {
          .box {
            width: 100%;
            min-width: 0;
          }
          .box .content {
            width: 100%;
            min-width: 0;
            padding: 20px 10px;
          }
        }
        @keyframes animate {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
