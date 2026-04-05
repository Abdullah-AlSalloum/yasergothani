"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import ClearIcon from "@mui/icons-material/Clear";
import PhoneInput from "react-phone-input-2";
import ar from "react-phone-input-2/lang/ar.json";

type FormData = {
  fullName: string;
  role: string;
  email: string;
  country: string;
  phone: string;
};

type PhoneCountryData = {
  countryCode?: string;
};

const DEFAULT_COUNTRY = "sa";
const PHONE_DROPDOWN_CLASS = "guide-phone-dropdown !text-[#0f3b33]";
const FORM_CONTROL_CLASS =
  "w-full border border-[#d9e4e1] rounded-xl px-4 py-3 text-[#0f3b33] bg-white/95 text-right placeholder:text-[#6e8b84] placeholder:text-right focus:outline-none focus:ring-2 focus:ring-[#1a604f]/25 focus:border-[#1a604f] transition-all duration-200";
const PHONE_INPUT_CLASS =
  "!w-full !h-[50px] !pr-12 !pl-14 !rounded-xl !border !border-[#d9e4e1] !text-[#0f3b33] !text-left !bg-white placeholder:!text-[#6e8b84] placeholder:!text-right focus:!outline-none focus:!ring-2 focus:!ring-[#1a604f]/25 focus:!border-[#1a604f]";
const PHONE_BUTTON_CLASS = "!border !border-[#d9e4e1] !rounded-s-xl !bg-white hover:!bg-[#f2f7f5]";

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

const GuideAudienceSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setFormData((prev) => ({ ...prev, country: getDetectedCountry() }));
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("/api/self-monitoring-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "تعذر إرسال البيانات الآن.");
      }

      setSuccessMessage("تم إرسال البيانات بنجاح. سيتم تنزيل الدليل الآن.");
      window.open("/downloads/monitoring-guide.pdf", "_blank", "noopener,noreferrer");
      setTimeout(() => {
        setIsOpen(false);
        setFormData((prev) => ({ ...INITIAL_FORM_DATA, country: prev.country || DEFAULT_COUNTRY }));
        setSuccessMessage("");
      }, 700);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "حدث خطأ غير متوقع. حاول مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneChange = (value: string, countryData: PhoneCountryData | {}) => {
    const country = (countryData as PhoneCountryData)?.countryCode || DEFAULT_COUNTRY;
    setFormData((prev) => ({
      ...prev,
      phone: value,
      country,
    }));
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="guide-audience-section">
      <div className="mt-8 rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-10 text-right shadow-[0_20px_60px_rgba(8,31,27,0.25)] backdrop-blur-sm">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#f1f5fb]">لمن هذا الدليل</h2>
        <p className="text-[#d6e1de] text-base md:text-lg mb-6 leading-relaxed">
          دليل عملي يساعدك على فهم خطوات المراقبة والحماية قبل أن تتفاقم مشكلة قرصنة المحتوى.
        </p>
        <ul className="list-disc pr-6 space-y-3 text-lg md:text-xl text-[#f1f5fb]/90">
          <li>المؤلفين الذين تتعرض كتبهم للقرصنة.</li>
          <li>دور النشر التي تسعى لحماية كتبها من القرصنة.</li>
          <li>المدربين أو صناع المحتوى التعليمي.</li>
          <li>من يرغبون باتخاذ إجراءات احترازية قبل التعرض للقرصنة.</li>
        </ul>

        <div className="mt-8 flex justify-start">
          <button
            type="button"
            onClick={openModal}
            className="bg-[#f7d54b] text-[#0f3b33] px-8 py-3.5 rounded-xl font-bold text-lg shadow-[0_8px_20px_rgba(247,213,75,0.35)] hover:bg-[#f1c72e] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            أرسل لي الدليل
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#051512]/65 backdrop-blur-md"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
          >
            <motion.div
              className="w-full max-w-md rounded-3xl border border-[#dbe7e4] bg-[#f9fcfb] shadow-[0_24px_80px_rgba(7,33,28,0.28)] p-7 text-right"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.96 }}
              transition={{ duration: 0.24, ease: "easeInOut" }}
            >
              <div className="relative mb-6 pb-4 border-b border-[#dce8e5]">
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-[#5d7771] hover:text-[#0f3b33] text-2xl leading-none cursor-pointer transition-colors"
                  aria-label="إغلاق"
                >
                  <ClearIcon />
                </button>
                <h3 className="text-xl font-bold text-[#0f3b33] text-center">أدخل بياناتك للحصول على الدليل</h3>
                <p className="text-center text-sm text-[#6f8781] mt-2">لن يستغرق أكثر من دقيقة واحدة</p>
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
                    inputProps={{
                      name: "phone",
                      required: true,
                    }}
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
                {successMessage && <p className="text-[#1a604f] text-sm font-semibold text-right">{successMessage}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1a604f] text-white py-3.5 rounded-xl font-bold hover:bg-[#154d40] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-[0_10px_22px_rgba(26,96,79,0.3)] hover:-translate-y-0.5"
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
        .guide-audience-section,
        .guide-audience-section input,
        .guide-audience-section select,
        .guide-audience-section button,
        .guide-audience-section textarea,
        .guide-audience-section .react-tel-input,
        .guide-audience-section .react-tel-input * {
          font-family: 'TheYearOfTheCamel', 'Tajawal', Arial, Helvetica, sans-serif;
        }

        .guide-phone-dropdown .search {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #e4eeeb;
          padding: 10px 10px 8px 10px;
        }

        .guide-phone-dropdown .search-box {
          border: 1px solid #d9e4e1;
          border-radius: 10px;
          background: #fff;
          color: #0f3b33;
          min-height: 34px;
          width: 100%;
        }

        .guide-phone-dropdown .search-box:focus {
          border-color: #1a604f;
          box-shadow: 0 0 0 3px rgba(26, 96, 79, 0.18);
        }

        .guide-phone-dropdown .search-emoji {
          display: none;
        }

        .guide-phone-dropdown .country {
          transition: background-color 0.18s ease;
        }

        .guide-phone-dropdown .country:hover,
        .guide-phone-dropdown .country.highlight {
          background-color: #edf4f1;
        }

        .guide-phone-dropdown .guide-search-icon-host {
          width: 20px;
          height: 20px;
          margin-right: 6px;
          color: #0f3b33;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
};

export default GuideAudienceSection;
