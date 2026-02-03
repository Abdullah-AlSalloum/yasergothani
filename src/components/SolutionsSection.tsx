"use client";
import Link from "next/link";
import React from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import CampaignIcon from '@mui/icons-material/Campaign';
import WebIcon from '@mui/icons-material/Web';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import StorefrontIcon from '@mui/icons-material/Storefront';

const services = [
	{
		title: "نظام النمو الرقمي المستدام",
		info: "تحويل التواجد الرقمي إلى منظومة نمو واضحة يمكن متابعتها وقياسها واتخاذ قرارات دقيقة بناءً على نتائجها.",
		features: ["تشخيص دقيق","استراتيجية واضحة", "تنفيذ منظم", "قياس بالأرقام","تحسين مستمر"],
		icon: <TrendingUpIcon fontSize="large" style={{ color: 'white' }} />,
		link: "#",
	},
	{
		title: "حماية الحقوق النشر ومكافحة القرصنة",
		info: "تقليل خسائر القرصنة والحفاظ على قيمة المحتوى عبر مراقبة مستمرة وتدخّل منظّم يحدّ من انتهاكات حقوق النشر.",
		features: ["رصد الانتهاكات", "تتبّع المصادر", "توثيق الحالات","تقليل الإنتشار","متابعة مستمرة"],
		icon: <SecurityIcon fontSize="large" style={{ color: 'white' }} />,
		link: "#",
	},
	{
		title: "إدارة الحملات الإعلانية",
		info: "تحسين كفاءة الإنفاق الإعلاني وبناء نتائج قابلة للاستمرار من خلال إدارة دقيقة وتحسين متواصل للأداء.",
		features: ["تحديد الأهداف", "إعداد الحملات", "إطلاق الاإعلانات","تحليل الأداد", "تحسين مستمر"],
		icon: <CampaignIcon fontSize="large" style={{ color: 'white' }} />,
		link: "#",
	},
	{
		title: "بناء المواقع وصفحات الهبوط",
		info: "إنشاء مواقع وصفحات هبوط واضحة وسهلة الاستخدام ترفع معدلات التحويل وتخدم أهداف المبيعات.",
		features:["تحديد الأهداف","تخطيط الهيكل","تصميم الواجهة","البناء التقني","تحسين التحول"],
		icon: <WebIcon fontSize="large" style={{ color: 'white' }} />,
		link: "#",
	},
	{
		title:"إنتاج المحتوى لوسائل التواصل",
		info:"صناعة محتوى جذاب وذكي يخاطب الجمهور المستهدف بدقة ويُحسّن التفاعل على حساباتك في وسائل التواصل.",
		features:["تحليل الجمهور","تخطيط المحتوى","إنتاج منظم","نشر مدروس","تطوير مستمر"],
		icon: <ChatBubbleIcon fontSize="large" style={{ color: 'white' }} />,
		link:"#",
	},
	{
		title: "تخصيص نظام CRM",
		info: "تنظيم بيانات العملاء وتحسين المتابعة ودعم قرار فريق المبيعات عبر نظام متكامل ومخصص يناسب نشاطك التجاري.",
		features:["فهم دورة البيع","تحديد البيانات","إعداد النظام","ربط القنوات","تحسين المتابعة"],
		icon: <SettingsApplicationsIcon fontSize="large" style={{ color: 'white' }} />,
		link:"#",
	},
	{
		title: "إدارة المتاجر الإلكترونية",
		info: "رفع كفاءة المتجر وتحسين تجربة الشراء بما يدعم نموًا تدريجيًا ومستقرًا للمبيعات.",
		features:["مراجعة الأداء","تنظيم العمليات","تحسين التجربة","متابعة المؤثرات","تطوير تدريجي"],
		icon: <StorefrontIcon fontSize="large" style={{ color: 'white' }} />,
		link:"#",
	},
];
const whatsappNumber = "963958956397"; // رقم الواتساب بدون +
const firstServiceTitle = services[0]?.title || "";
const whatsappMessage = `السلام عليكم ورحمة الله وبركاته، أنا مهتم بـ (${firstServiceTitle})، كيف سنبدأ ؟`;
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="w-full py-16 px-4" style={{ background: '#113c56' }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-2" style={{ fontFamily: 'TheYearOfTheCamel, Tajawal, Arial' }}>
          حلول متكاملة لنمو أعمالك
        </h2>
        <div
          className="flex gap-6 overflow-x-auto pb-4 w-full custom-scrollbar"
          style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'thin', scrollbarColor: '#facc15 #113c56' }}
        >
          {services.map((srv, i) => {
            const whatsappMessage = `السلام عليكم ورحمة الله وبركاته، أنا مهتم بـ (${srv.title})، كيف سنبدأ ؟`;
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            return (
              <div
                key={i}
                className="flex-shrink-0 w-[320px] sm:w-[320px] bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col items-end text-right relative"
                style={{ minHeight: 440, paddingTop: 56, paddingBottom: 64, width: '90vw', maxWidth: 320 }}
              >
                <div className="absolute right-6 top-6 z-10">
                  <div
                    className="flex items-center justify-center w-14 h-14 mb-4"
                    style={{ background: i % 2 === 0 ? '#22c55e' : '#2563eb', borderRadius: '20px' }}
                  >
                    {srv.icon}
                  </div>
                </div>
                <div className="w-full flex flex-col items-end mt-10">
                  <div
                    className="font-bold text-xl text-gray-900 mb-2 w-full text-right"
                    style={{ fontFamily: 'Tajawal, Arial' }}
                  >
                    {srv.title}
                  </div>
                  <div className="text-gray-500 text-base mb-4 min-h-[48px] w-full text-right">{srv.info}</div>
                  <ul className="flex flex-col gap-2 items-end w-full mb-4">
                    {srv.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-700 text-right w-full justify-end"
                      >
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600">
                          <svg
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="3"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group absolute left-1/2 -translate-x-1/2 bottom-4 w-[90%] inline-flex items-center justify-center gap-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-primary font-extrabold py-3 rounded-xl text-center shadow-xl hover:from-yellow-500 hover:to-yellow-400 hover:scale-[1.03] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    style={{ boxShadow: '0 4px 24px 0 rgba(252, 212, 16, 0.18)' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
                    </svg>
                    ابدأ من هنا
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <style jsx>{`
  .custom-scrollbar::-webkit-scrollbar {
    height: 4px;
    background: #113c56;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #facc15;
    border-radius: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #113c56;
  }
`}</style>
      </div>
      
    </section>
  );
}

export default SolutionsSection;
