"use client";
import React from "react";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import Snowfall from 'react-snowfall';
import DownloadIcon from '@mui/icons-material/Download';
import BarChartIcon from '@mui/icons-material/BarChart';
import CampaignIcon from '@mui/icons-material/Campaign';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import GroupIcon from '@mui/icons-material/Group';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const resources = [
  {
    title: "دليل الخدمات",
    subtitle: "لفهم أنواع الخدمات التسويقية، متى تحتاج كل خدمة، وكيف تختارها بوعي.",
    file: "services-guide.pdf"
  },
  {
    title: "خطة تسويق بصفحة واحدة",
    subtitle: "نموذج عملي لتحديد الهدف، الجمهور، القنوات، والنتائج المتوقعة.",
    file: "one-page-marketing-plan.pdf"
  },
  {
    title: "خطة محتوى فيروسي",
    subtitle: "إطار واضح لبناء محتوى قابل للانتشار دون الاعتماد على الحظ.",
    file: "viral-content-plan.pdf"
  },
  {
    title: "أهم 50 Hook للمحتوى",
    subtitle: "مداخل جاهزة لجذب الانتباه في أول 3 ثوانٍ.",
    file: "50-content-hooks.pdf"
  },
  {
    title: "دليل أهمية الـ CTA واستخداماته",
    subtitle: "متى تطلب الإجراء؟ وكيف؟ ولماذا يفشل أغلب المحتوى في التحويل؟",
    file: "cta-guide.pdf"
  },
  {
    title: "دليل فهم إحصائيات Google",
    subtitle: "لفهم الأرقام دون تعقيد واتخاذ قرارات صحيحة.",
    file: "google-analytics-guide.pdf"
  },
  {
    title: "شخصية العميل حسب النشاط التجاري",
    subtitle: "نماذج تساعدك على فهم جمهورك بدل التخمين.",
    file: "customer-persona.pdf"
  },
  {
    title: "كيف تخاطب منفذي الخدمات",
    subtitle: "( المصمم – المونتير – المصور – المعلق الصوتي ) لتضمن نتائج أفضل بأقل جهد ووقت.",
    file: "service-providers-guide.pdf"
  },
  {
    title: "أدوات الذكاء الصناعي الأساسية",
    subtitle: "أدوات لا يستغني عنها أي صاحب مشروع اليوم.",
    file: "ai-tools.pdf"
  },
];

const resourceIcons = [
  BarChartIcon, // دليل الخدمات
  ChecklistIcon, // خطة تسويق بصفحة واحدة
  CampaignIcon, // خطة محتوى فيروسي
  ContentPasteSearchIcon, // أهم 50 Hook للمحتوى
  PsychologyAltIcon, // دليل أهمية CTA
  BarChartIcon, // دليل فهم إحصائيات Google
  GroupIcon, // شخصية العميل حسب النشاط التجاري
  DesignServicesIcon, // كيف تخاطب منفذي الخدمات
  SmartToyIcon, // أدوات الذكاء الصناعي الأساسية
];

const ResourcesPage: React.FC = () => (
  
  <section className="w-full py-16 px-4 bg-[#f8fafc] min-h-screen">
    <Snowfall color="#82C3D9" speed={[0.2, 0.5]} />
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#113c56] mb-2">مصادر مجانية</h2>
      <p className="text-gray-600 text-lg mb-8">دليلك الشامل لأهم الأدوات والنماذج العملية لتسويق أكثر احترافية ونتائج أوضح.</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {resources.map((res, idx) => {
          const Icon = resourceIcons[idx] || InsertDriveFileOutlinedIcon;
          return (
            <div key={idx} className="bg-[#113c56] border border-[#113c56] rounded-2xl shadow-md px-4 py-8 flex flex-col items-center text-center relative transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ">
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#e6eef5] border border-[#113c56] rounded-full p-3 shadow" style={{ color: '#113c56' }}>
                <Icon fontSize="large" style={{ color: '#113c56' }} />
              </span>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">{res.title}</h3>
              <p className="text-blue-100 mb-6 text-base">{res.subtitle}</p>
              <a
                href={res.file}
                download
                className="border font-bold py-2 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 bg-white text-[#113c56] hover:bg-[#e6eef5] hover:text-[#113c56]"
                style={{ borderColor: '#113c56' }}
              >
                <DownloadIcon fontSize="small" style={{ color: '#113c56' }} />
                تحميل الآن
              </a>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ResourcesPage;
