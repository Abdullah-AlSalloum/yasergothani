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

const generalPolicySectionsEn = [
  {
    title: "Scope of Use",
    content: [
      "By using this website or any of its services, you fully agree to these policies.",
      "These policies apply to all services provided through the website.",
    ],
  },
  {
    title: "Privacy and Data Collection",
    content: [
      "We may collect certain data such as: name, email address, and phone number.",
      "This is done with the user's consent, and the purpose is to improve the quality of our services.",
    ],
  },
  {
    title: "Data Protection",
    content: [
      "We are committed to implementing appropriate security measures to protect your data.",
      "However, complete security over the internet cannot be guaranteed 100%.",
    ],
  },
  {
    title: "Data Sharing",
    content: [
      "We do not sell or rent your data.",
      "We may share data with technical partners to operate the service.",
      "We may disclose data if required by law.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "We use cookies to enhance user experience and analyze performance.",
      "You can control cookie settings through your browser.",
    ],
  },
  {
    title: "User Rights",
    content: [
      "You have the right to request a copy of your data.",
      "You have the right to update your data.",
      "You have the right to request deletion of your data (unless legally required to retain it).",
    ],
  },
  {
    title: "External Links",
    content: [
      "The website may contain links to external websites. We are not responsible for their privacy policies.",
    ],
  },
  {
    title: "Policy Updates",
    content: [
      "These policies may be updated at any time. Updates will be published on this page.",
    ],
  },
  {
    title: "Contact",
    content: [
      "For inquiries, please reach us through the contact methods available on the website.",
    ],
  },
];

const servicePolicySectionsEn = [
  {
    title: "Scope of Services",
    content: [
      "Building sustainable digital growth systems.",
      "Advertising campaign management.",
      '"Wthiiq" copyright protection service.',
      "Website and landing page development.",
    ],
  },
  {
    title: "Nature of Services",
    content: [
      "Services are delivered professionally according to best practices.",
      "No specific results are guaranteed.",
      "Results depend on external factors such as: product quality, market conditions, content quality, and client commitment.",
    ],
  },
  {
    title: "Payment Terms",
    content: [
      "Payment must be made in advance as agreed.",
      "No refunds after work has started.",
      "Advertising budget is paid separately via direct transfer or client's payment card.",
    ],
  },
  {
    title: "Client Responsibilities",
    content: [
      "Provide accurate information.",
      "Provide required content.",
      "Prepare the website or landing page.",
      "Handle customer responses and all operational processes.",
      "Any shortcomings or inaccurate information will directly affect results and remain the client's responsibility.",
    ],
  },
  {
    title: "Advertising Campaign Management",
    content: [
      "Our team determines the appropriate strategy for each client.",
      "Budget is agreed upon with the client.",
      "Performance is continuously optimized.",
      "Disclaimer: We are not responsible for account suspensions, ad rejections, or platform decisions.",
    ],
  },
  {
    title: '"Wthiiq" Service',
    content: [
      "Violations are monitored and tracked using legally available tools.",
      "We do not guarantee full removal of all violations.",
      "Results depend on platforms and legal procedures.",
    ],
  },
  {
    title: "Website & Landing Page Development",
    content: [
      "Projects are executed according to agreed requirements.",
      "The client is responsible for content and final usage.",
    ],
  },
  {
    title: "Digital Growth System",
    content: [
      "Strategies and systems are tailored to each client's project.",
      "Success depends on the client's commitment to proper execution and data provision.",
    ],
  },
  {
    title: "Cancellation & Termination",
    content: [
      "By the client: 30 days prior notice with settlement of all dues.",
      "By us: We reserve the right to terminate services if the client fails to meet responsibilities, provides misleading information, changes business activity without notice, or adds products/services that violate our standards.",
      "No refunds will be issued in such cases.",
    ],
  },
  {
    title: "Service Provision for Clients in Syria",
    content: [
      "Services may be provided as a technical intermediary to access advertising platforms.",
      "Any legal responsibility related to the business or content remains solely with the client.",
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
  const [lang, setLang] = useState<"ar" | "en">("ar");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "services") setActiveTab("services");
    else setActiveTab("general");
  }, [searchParams]);

  const isEn = lang === "en";

  const sections =
    activeTab === "general"
      ? isEn ? generalPolicySectionsEn : generalPolicySections
      : isEn ? servicePolicySectionsEn : servicePolicySections;

  return (
    <section
      className="w-full min-h-screen py-16 px-4 bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0]"
      dir={isEn ? "ltr" : "rtl"}
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#113c56] mb-2">
            {isEn ? "Policies" : "السياسات"}
          </h1>
          <p className="text-gray-500 text-sm">
            {isEn ? "Last Updated: 01-05-2026" : "آخر تحديث: 01-05-2026"}
          </p>
        </div>

        {/* Language Toggle */}
        <div className="flex justify-center">
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            dir="ltr"
            className="relative flex items-center gap-3 bg-white border border-gray-200 shadow rounded-full px-2 py-1.5 cursor-pointer select-none"
            aria-label="Toggle language"
          >
            <span className={`text-sm font-bold px-3 py-1 rounded-full transition-all duration-200 ${lang === "ar" ? "bg-[#113c56] text-white" : "text-gray-400"}`}>
              العربية
            </span>
            <span className={`text-sm font-bold px-3 py-1 rounded-full transition-all duration-200 ${lang === "en" ? "bg-[#113c56] text-white" : "text-gray-400"}`}>
              English
            </span>
          </button>
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
            {isEn ? "General Policies" : "السياسات العامة"}
          </button>
          <button
            onClick={() => setActiveTab("services")}
            className={`flex-1 py-3 rounded-xl font-bold text-base transition-all duration-200 ${
              activeTab === "services"
                ? "bg-[#113c56] text-white shadow"
                : "text-[#113c56] hover:bg-gray-100"
            }`}
          >
            {isEn ? "Service Policies" : "سياسات الخدمات"}
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
