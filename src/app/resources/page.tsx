"use client";
import React, { useEffect, useState } from "react";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import Snowfall from 'react-snowfall';
import DownloadIcon from '@mui/icons-material/Download';
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import ClearIcon from "@mui/icons-material/Clear";
import BarChartIcon from '@mui/icons-material/BarChart';
import CampaignIcon from '@mui/icons-material/Campaign';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import GroupIcon from '@mui/icons-material/Group';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { AnimatePresence, motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import ar from "react-phone-input-2/lang/ar.json";

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

type FormData = {
  fullName: string;
  role: string;
  email: string;
  country: string;
  phone: string;
};

type ResourceItem = {
  title: string;
  subtitle: string;
  file: string;
};

type PhoneCountryData = {
  countryCode?: string;
};

const DEFAULT_COUNTRY = "sa";
const PHONE_DROPDOWN_CLASS = "resources-phone-dropdown !text-[#113c56]";
const FORM_CONTROL_CLASS =
  "w-full border border-[#c8d7e5] rounded-xl px-4 py-3 text-[#113c56] bg-white/95 text-right placeholder:text-[#6b8298] placeholder:text-right focus:outline-none focus:ring-2 focus:ring-[#113c56]/20 focus:border-[#113c56] transition-all duration-200";
const PHONE_INPUT_CLASS =
  "!w-full !h-[50px] !pr-12 !pl-14 !rounded-xl !border !border-[#c8d7e5] !text-[#113c56] !text-left !bg-white placeholder:!text-[#6b8298] placeholder:!text-right focus:!outline-none focus:!ring-2 focus:!ring-[#113c56]/20 focus:!border-[#113c56]";
const PHONE_BUTTON_CLASS = "!border !border-[#c8d7e5] !rounded-s-xl !bg-white hover:!bg-[#e6eef5]";

const INITIAL_FORM_DATA: FormData = {
  fullName: "",
  role: "",
  email: "",
  country: DEFAULT_COUNTRY,
  phone: "",
};

const timezoneCountryMap: Record<string, string> = {
  "Asia/Riyadh": "sa",
  "Asia/Dubai": "ae",
  "Africa/Cairo": "eg",
  "Asia/Damascus": "sy",
  "Asia/Kuwait": "kw",
  "Asia/Qatar": "qa",
  "America/New_York": "us",
  "Europe/London": "gb",
};

const getDetectedCountry = () => {
  if (typeof window === "undefined") return DEFAULT_COUNTRY;
  const localeMatch = (navigator.language || "").match(/-([A-Za-z]{2})$/);
  const localeCountry = localeMatch?.[1]?.toLowerCase();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return localeCountry || timezoneCountryMap[timezone] || DEFAULT_COUNTRY;
};

const ResourcesPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setFormData((prev) => ({ ...prev, country: getDetectedCountry() }));
  }, []);

  const openModal = (resource: ResourceItem) => {
    setSelectedResource(resource);
    setErrorMessage("");
    setSuccessMessage("");
    setIsOpen(true);
  };

  const closeModal = () => {
    if (isSubmitting) return;
    setIsOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value: string, countryData: PhoneCountryData | unknown) => {
    const country = (countryData as PhoneCountryData)?.countryCode || DEFAULT_COUNTRY;
    setFormData((prev) => ({ ...prev, phone: value, country }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedResource) return;

    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("/api/resources-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          materialTitle: selectedResource.title,
          materialFile: selectedResource.file,
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error || "تعذر إرسال البيانات الآن.");
      }

      setSuccessMessage(result?.message || "تم الإرسال بنجاح. تفقد بريدك الإلكتروني للحصول على الدليل.");
      setTimeout(() => {
        setIsOpen(false);
        setSelectedResource(null);
        setFormData((prev) => ({ ...INITIAL_FORM_DATA, country: prev.country || DEFAULT_COUNTRY }));
        setSuccessMessage("");
      }, 1800);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "حدث خطأ غير متوقع. حاول مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
              <button
                type="button"
                onClick={() => openModal(res)}
                className="border font-bold py-2 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 bg-white text-[#113c56] hover:bg-[#e6eef5] hover:text-[#113c56]"
                style={{ borderColor: '#113c56' }}
              >
                <DownloadIcon fontSize="small" style={{ color: '#113c56' }} />
                تحميل الآن
              </button>
            </div>
          );
        })}
      </div>
    </div>

    <AnimatePresence>
      {isOpen && selectedResource && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#0b2134]/55 backdrop-blur-md"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
        >
          <motion.div
            className="w-full max-w-md rounded-3xl border border-[#c8d7e5] bg-[#f8fafc] shadow-[0_24px_80px_rgba(17,60,86,0.26)] p-7 text-right"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.96 }}
            transition={{ duration: 0.24, ease: "easeInOut" }}
          >
            <div className="relative mb-6 pb-4 border-b border-[#d4e1ec]">
              <button
                type="button"
                onClick={closeModal}
                className="text-[#5f7891] hover:text-[#113c56] text-2xl leading-none cursor-pointer transition-colors"
                aria-label="إغلاق"
              >
                <ClearIcon />
              </button>
              <h3 className="text-xl font-bold text-[#113c56] text-center">أدخل بياناتك للحصول على الدليل</h3>
              <p className="text-center text-sm text-[#6b8298] mt-2">لن يستغرق أكثر من دقيقة واحدة</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="الاسم الكامل"
                dir="rtl"
                className={FORM_CONTROL_CLASS}
              />

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                dir="rtl"
                className={FORM_CONTROL_CLASS}
              >
                <option value="" disabled>
                  الوصف
                </option>
                <option value="ناشر">ناشر</option>
                <option value="مؤلف">مؤلف</option>
                <option value="مدرب">مدرب</option>
              </select>

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                placeholder="البريد الإلكتروني"
                dir="rtl"
                className={FORM_CONTROL_CLASS}
              />

              <div dir="ltr">
                <PhoneInput
                  country={formData.country}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputProps={{ name: "phone", required: true }}
                  placeholder="رقم الجوال"
                  enableSearch
                  searchPlaceholder="ابحث عن الدولة..."
                  localization={ar}
                  countryCodeEditable={false}
                  containerClass="w-full"
                  inputClass={PHONE_INPUT_CLASS}
                  buttonClass={PHONE_BUTTON_CLASS}
                  dropdownClass={PHONE_DROPDOWN_CLASS}
                />
              </div>

              {errorMessage && <p className="text-[#b42318] text-sm font-semibold text-right">{errorMessage}</p>}
              {successMessage && <p className="text-[#113c56] text-sm font-semibold text-right">{successMessage}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#113c56] text-white py-3.5 rounded-xl font-bold hover:bg-[#0d2f45] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-[0_10px_22px_rgba(17,60,86,0.3)] hover:-translate-y-0.5"
              >
                <DownloadForOfflineIcon fontSize="small" />
                {isSubmitting ? "جاري الإرسال..." : "تحميل الدليل"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

    <style jsx global>{`
      .resources-phone-dropdown .search {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #d4e1ec;
        padding: 10px 10px 8px 10px;
      }

      .resources-phone-dropdown .search-box {
        border: 1px solid #c8d7e5;
        border-radius: 10px;
        background: #fff;
        color: #113c56;
        min-height: 34px;
        width: 100%;
      }

      .resources-phone-dropdown .search-box:focus {
        border-color: #113c56;
        box-shadow: 0 0 0 3px rgba(17, 60, 86, 0.16);
      }

      .resources-phone-dropdown .search-emoji {
        display: none;
      }

      .resources-phone-dropdown .country {
        transition: background-color 0.18s ease;
      }

      .resources-phone-dropdown .country:hover,
      .resources-phone-dropdown .country.highlight {
        background-color: #e6eef5;
      }
    `}</style>
  </section>
);
};

export default ResourcesPage;
