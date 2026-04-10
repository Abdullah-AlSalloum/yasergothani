"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const generalPolicySections = [
  {
    title: "نطاق الاستخدام",
    content: [
      "باستخدامك هذا الموقع أو أي من خدماته، فإنك توافق على هذه السياسات بشكل كامل.",
      "تنطبق هذه السياسات على جميع الخدمات المقدمة عبر الموقع.",
    ],
  },
  {
    title: "الخصوصية وجمع البيانات",
    content: [
      "قد نقوم بجمع بعض البيانات كـ: الاسم – البريد الإلكتروني – رقم الهاتف، ويكون ذلك بموافقة المستخدم.",
      "الهدف من ذلك هو تحسين جودة الخدمات المقدمة.",
    ],
  },
  {
    title: "حماية البيانات",
    content: [
      "نلتزم باتخاذ إجراءات أمنية مناسبة لحماية البيانات.",
      "مع الإشارة إلى أن الأمان الكامل عبر الإنترنت غير مضمون بنسبة 100%.",
    ],
  },
  {
    title: "مشاركة البيانات",
    content: [
      "لا نقوم ببيع أو تأجير البيانات.",
      "قد نشارك البيانات مع شركاء تقنيين لتشغيل الخدمة.",
      "قد يتم الإفصاح عن البيانات عند الطلب القانوني.",
    ],
  },
  {
    title: "ملفات تعريف الارتباط (Cookies)",
    content: [
      "نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل الأداء.",
      "يمكنك التحكم بها من خلال إعدادات المتصفح.",
    ],
  },
  {
    title: "حقوق المستخدم",
    content: [
      "يحق لك طلب نسخة من بياناتك.",
      "يحق لك تعديل بياناتك.",
      "يحق لك طلب حذف بياناتك (ما لم يوجد التزام قانوني).",
    ],
  },
  {
    title: "الروابط الخارجية",
    content: [
      "قد يحتوي الموقع على روابط خارجية ولا نتحمل مسؤولية سياسات الخصوصية الخاصة بها.",
    ],
  },
  {
    title: "تحديثات السياسات",
    content: [
      "قد يتم تعديل هذه السياسات في أي وقت، وسيتم نشر التحديثات على هذه الصفحة.",
    ],
  },
  {
    title: "التواصل",
    content: [
      "للاستفسارات: يرجى التواصل معنا عبر وسائل التواصل المتاحة على الموقع.",
    ],
  },
];

const servicePolicySections = [
  {
    title: "نطاق الخدمات",
    content: [
      "بناء أنظمة النمو الرقمي المستدام.",
      "إدارة الحملات الإعلانية.",
      'خدمة "وثيق" لحماية حقوق النشر.',
      "بناء المواقع وصفحات الهبوط.",
    ],
  },
  {
    title: "طبيعة الخدمات",
    content: [
      "يتم تقديم الخدمات بشكل احترافي وفق أفضل الممارسات.",
      "لا يتم ضمان نتائج محددة.",
      "تعتمد النتائج على عوامل خارجية مثل: جودة المنتج، السوق، المحتوى، والتزام العميل.",
    ],
  },
  {
    title: "آلية الدفع",
    content: [
      "الدفع يتم مقدمًا حسب الاتفاق.",
      "لا يوجد استرداد بعد بدء التنفيذ.",
      "ميزانية الإعلانات تُدفع بشكل منفصل عبر تحويل مباشر أو بطاقة العميل.",
    ],
  },
  {
    title: "مسؤوليات العميل",
    content: [
      "تقديم معلومات دقيقة.",
      "توفير المحتوى اللازم.",
      "تجهيز الموقع أو صفحة الهبوط.",
      "الرد على العملاء وكافة الإجراءات اللوجستية.",
      "أي تقصير أو معلومات خاطئة يؤثر على النتائج ويكون ذلك مسؤولية العميل.",
    ],
  },
  {
    title: "إدارة الحملات الإعلانية",
    content: [
      "يقوم فريقنا بتحديد الاستراتيجية المناسبة للعميل.",
      "يتم تحديد الميزانية بالاتفاق مع العميل.",
      "يتم تحسين الأداء بشكل مستمر.",
      "إخلاء مسؤولية: لا نتحمل مسؤولية حظر الحسابات، إيقاف الإعلانات، أو قرارات المنصات.",
    ],
  },
  {
    title: 'خدمة "وثيق"',
    content: [
      "يتم رصد وتتبع الانتهاكات حسب الأدوات المتاحة بشكل قانوني.",
      "لا نضمن إزالة جميع الانتهاكات.",
      "النتائج تعتمد على المنصات والإجراءات القانونية.",
    ],
  },
  {
    title: "بناء المواقع وصفحات الهبوط",
    content: [
      "يتم تنفيذ المشروع حسب المتطلبات المتفق عليها.",
      "العميل مسؤول عن المحتوى والاستخدام النهائي.",
    ],
  },
  {
    title: "نظام النمو الرقمي",
    content: [
      "يتم تقديم استراتيجيات وأنظمة تسويق متوافقة مع مشروع كل عميل.",
      "نجاح النظام يعتمد على التزام العميل بالتنفيذ الدقيق وتوفير البيانات اللازمة.",
    ],
  },
  {
    title: "الإلغاء وإنهاء الخدمة",
    content: [
      "من طرف العميل: إشعار مسبق 30 يومًا مع تسديد المستحقات.",
      "من طرفنا: يحق إيقاف الخدمة في حال عدم التزام العميل بمسؤولياته، تقديم معلومات مضللة، تغيير النشاط التجاري دون إشعار، أو إضافة منتج أو خدمة تخالف معاييرنا.",
      "لا يتم استرداد أي مبالغ في حالات إنهاء الخدمة من طرفنا.",
    ],
  },
  {
    title: "تقديم الخدمة لعملاء سوريا",
    content: [
      "يتم تقديم الخدمة كوسيط تقني للوصول للمنصات.",
      "أي مسؤولية قانونية تقع على عاتق العميل.",
    ],
  },
];

const PoliciesPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"general" | "services">("general");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "services") setActiveTab("services");
    else setActiveTab("general");
  }, [searchParams]);

  const sections =
    activeTab === "general" ? generalPolicySections : servicePolicySections;

  return (
    <section
      className="w-full min-h-screen py-16 px-4 bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0]"
      dir="rtl"
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#113c56] mb-2">
            السياسات
          </h1>
          <p className="text-gray-500 text-sm">آخر تحديث: 01-05-2026</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 bg-white rounded-2xl p-2 shadow-md border border-gray-100">
          <button
            onClick={() => setActiveTab("general")}
            className={`flex-1 py-3 rounded-xl font-bold text-base transition-all duration-200 ${
              activeTab === "general"
                ? "bg-[#113c56] text-white shadow"
                : "text-[#113c56] hover:bg-gray-100"
            }`}
          >
            السياسات العامة
          </button>
          <button
            onClick={() => setActiveTab("services")}
            className={`flex-1 py-3 rounded-xl font-bold text-base transition-all duration-200 ${
              activeTab === "services"
                ? "bg-[#113c56] text-white shadow"
                : "text-[#113c56] hover:bg-gray-100"
            }`}
          >
            سياسات الخدمات
          </button>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-5">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8"
            >
              <h2 className="text-lg md:text-xl font-bold text-[#113c56] mb-4 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#113c56] text-white text-sm font-bold shrink-0">
                  {idx + 1}
                </span>
                {section.title}
              </h2>
              <ul className="flex flex-col gap-2">
                {section.content.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-base leading-relaxed">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PoliciesPageWrapper: React.FC = () => (
  <Suspense fallback={null}>
    <PoliciesPage />
  </Suspense>
);

export default PoliciesPageWrapper;
