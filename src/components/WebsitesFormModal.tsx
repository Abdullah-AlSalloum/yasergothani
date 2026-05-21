"use client";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ar from "react-phone-input-2/lang/ar.json";

export const OPEN_WEBSITES_FORM_EVENT = "open-websites-form";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  projectType: string;
  projectGoal: string;
  hasContent: string;
  hasWebsite: string;
  currentWebsiteUrl: string;
  socialLinks: string;
  budget: string;
};

type PhoneCountryData = { countryCode?: string };

const DEFAULT_COUNTRY = "sa";

const INITIAL_FORM_DATA: FormData = {
  fullName: "",
  email: "",
  phone: "",
  country: DEFAULT_COUNTRY,
  projectType: "",
  projectGoal: "",
  hasContent: "",
  hasWebsite: "",
  currentWebsiteUrl: "",
  socialLinks: "",
  budget: "",
};

const timezoneCountryMap: Record<string, string> = {
  "Asia/Riyadh": "sa",
  "Asia/Baghdad": "iq",
  "Asia/Damascus": "sy",
  "Asia/Amman": "jo",
  "Asia/Kuwait": "kw",
  "Asia/Qatar": "qa",
  "Asia/Dubai": "ae",
  "Africa/Cairo": "eg",
  "America/New_York": "us",
  "Europe/London": "gb",
};

const sanitizeCountryCode = (value: string | undefined) => {
  const code = (value || "").trim().toLowerCase();
  return /^[a-z]{2}$/.test(code) ? code : "";
};

const getCountryFromLocale = (locale: string | undefined) => {
  if (!locale) return "";
  const match = locale.match(/[-_]([A-Za-z]{2})\b/);
  return sanitizeCountryCode(match?.[1]);
};

const getDetectedCountry = () => {
  if (typeof window === "undefined") return DEFAULT_COUNTRY;

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timezoneCountry = sanitizeCountryCode(timezoneCountryMap[timezone]);
  if (timezoneCountry) return timezoneCountry;

  for (const locale of navigator.languages || []) {
    const localeCountry = getCountryFromLocale(locale);
    if (localeCountry) return localeCountry;
  }

  const singleLocaleCountry = getCountryFromLocale(navigator.language);
  return singleLocaleCountry || DEFAULT_COUNTRY;
};

const detectCountryWithIpFallback = async () => {
  const localDetected = getDetectedCountry();

  try {
    const response = await fetch("https://ipapi.co/country/", { cache: "no-store" });
    if (!response.ok) return localDetected;
    const country = sanitizeCountryCode(await response.text());
    return country || localDetected;
  } catch {
    return localDetected;
  }
};

const inputClassName =
  "w-full rounded-xl border border-[#d7dfdc] bg-white px-4 py-3 text-[#113c56] placeholder:text-[#7b8c97] focus:outline-none focus:ring-2 focus:ring-[#1a604f]/30 focus:border-[#1a604f]";
const cardClassName = "bg-[#f5f7fb] border border-[#d9dbe5] rounded-xl p-5 md:p-6";
const phoneInputClass =
  "!w-full !h-[50px] !pr-12 !pl-14 !rounded-xl !border !border-[#d7dfdc] !text-[#113c56] !text-left !bg-white focus:!outline-none focus:!ring-2 focus:!ring-[#1a604f]/30 focus:!border-[#1a604f]";
const phoneButtonClass =
  "!border !border-[#d7dfdc] !rounded-l-xl !bg-white hover:!bg-[#e6eef5]";

export default function WebsitesFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const initialCountry = getDetectedCountry();
    setFormData((prev) => ({ ...prev, country: initialCountry }));

    void detectCountryWithIpFallback().then((country) => {
      setFormData((prev) => {
        // Do not override user's selection/typing if they already interacted.
        if (prev.phone) return prev;
        return { ...prev, country };
      });
    });
  }, []);

  useEffect(() => {
    const open = () => {
      setErrorMessage("");
      setSuccessMessage("");
      const initialCountry = getDetectedCountry();
      setFormData({ ...INITIAL_FORM_DATA, country: initialCountry });

      void detectCountryWithIpFallback().then((country) => {
        setFormData((prev) => {
          if (prev.phone) return prev;
          return { ...prev, country };
        });
      });

      setIsOpen(true);
    };
    window.addEventListener(OPEN_WEBSITES_FORM_EVENT, open);
    return () => window.removeEventListener(OPEN_WEBSITES_FORM_EVENT, open);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleClose = () => { if (!isSubmitting) setIsOpen(false); };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "hasWebsite" && value === "لا" ? { currentWebsiteUrl: "" } : {}),
    }));
  };

  const handlePhoneChange = (value: string, countryData: PhoneCountryData | unknown) => {
    const country = (countryData as PhoneCountryData)?.countryCode || DEFAULT_COUNTRY;
    setFormData((prev) => ({ ...prev, phone: value, country }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("/api/websites-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          projectGoal: formData.projectGoal,
          hasContent: formData.hasContent,
          hasWebsite: formData.hasWebsite,
          currentWebsiteUrl: formData.currentWebsiteUrl,
          socialLinks: formData.socialLinks,
          budget: formData.budget,
        }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result?.error || "تعذر إرسال البيانات الآن.");

      setSuccessMessage(result?.message || "تم إرسال طلبك بنجاح. سنتواصل معك قريبًا.");
      setFormData({ ...INITIAL_FORM_DATA, country: getDetectedCountry() });
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "حدث خطأ غير متوقع. حاول مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[140] bg-black/60 backdrop-blur-sm px-3 py-6 md:py-10 overflow-y-auto"
      dir="rtl"
      onClick={handleClose}
    >
      <div className="max-w-3xl mx-auto relative" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="absolute left-2 top-2 md:left-4 md:top-4 text-[#113c56] font-bold"
          onClick={handleClose}
          aria-label="إغلاق"
        >
          <CloseIcon />
        </button>

        <div className="bg-[#f5f7fb] rounded-2xl border border-[#cfd6ea] shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="border-t-[8px] border-[#2563eb] p-6 md:p-8 border-b border-[#dde2f0] text-right">
            <h3 className="text-3xl md:text-4xl font-bold text-[#113c56] mb-3" style={{ fontFamily: "TheYearOfTheCamel, Tajawal, Arial, Helvetica, sans-serif" }}>
              بناء المواقع وصفحات الهبوط
            </h3>
            <p className="text-[#1a2f3d] text-lg leading-8">
              أخبرنا عن مشروعك لنتواصل معك في أقرب وقت.
            </p>
          </div>

          {successMessage ? (
            <div className="p-8 md:p-12 flex flex-col items-center text-center gap-6">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl md:text-3xl font-extrabold text-[#113c56]">تم استلام طلبك!</h4>
              <p className="text-[#1a2f3d] text-lg leading-8">سنتواصل معك في أقرب وقت ممكن لمناقشة تفاصيل مشروعك.</p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-[#113c56] font-extrabold py-3 px-10 rounded-xl shadow transition-all duration-200"
              >
                إغلاق
              </button>
            </div>
          ) : (
          <form className="p-4 md:p-6 space-y-4" onSubmit={handleSubmit}>

            {/* Error */}
            {errorMessage && (
              <div className="rounded-xl bg-red-50 border border-red-200 text-red-600 px-4 py-3 text-base text-center font-semibold">
                {errorMessage}
              </div>
            )}

            {/* الاسم الكامل */}
            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">
                الاسم الكامل <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className={inputClassName}
              />
            </div>

            {/* البريد الإلكتروني */}
            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">
                البريد الإلكتروني <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                dir="ltr"
                className={inputClassName + " text-left"}
              />
            </div>

            {/* رقم الجوال */}
            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">
                رقم الجوال <span className="text-red-500">*</span>
              </label>
              <div dir="ltr">
                <PhoneInput
                  country={formData.country}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  localization={ar}
                  inputClass={phoneInputClass}
                  buttonClass={phoneButtonClass}
                  containerClass="w-full"
                  disabled={isSubmitting}
                  countryCodeEditable={false}
                  inputProps={{ required: true, name: "phone" }}
                />
              </div>
            </div>

            {/* نوع المشروع */}
            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">
                نوع المشروع <span className="text-red-500">*</span>
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className={inputClassName}
              >
                <option value="" disabled>اختر نوع المشروع</option>
                <option value="صفحة هبوط">صفحة هبوط</option>
                <option value="موقع متعدد الصفحات">موقع متعدد الصفحات</option>
                <option value="متجر إلكتروني">متجر إلكتروني</option>
              </select>
            </div>

            {/* هدف الموقع */}
            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">
                ما هدف الموقع؟ <span className="text-red-500">*</span>
              </label>
              <select
                name="projectGoal"
                value={formData.projectGoal}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className={inputClassName}
              >
                <option value="" disabled>اختر الهدف الرئيسي</option>
                <option value="جمع عملاء محتملين">جمع عملاء محتملين</option>
                <option value="بيع منتجات">بيع منتجات</option>
                <option value="تقديم خدمات">تقديم خدمات</option>
                <option value="تعريف بالعلامة التجارية">تعريف بالعلامة التجارية</option>
              </select>
            </div>

            {/* هل لديك محتوى جاهز؟ */}
            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">
                هل لديك محتوى جاهز (نصوص، صور، شعار)؟ <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-6 text-[#113c56] text-lg">
                {["نعم", "لا"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hasContent"
                      value={opt}
                      checked={formData.hasContent === opt}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* هل لديك موقع حالي؟ */}
            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">
                هل لديك موقع حالي؟ <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-6 text-[#113c56] text-lg">
                {["نعم", "لا"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hasWebsite"
                      value={opt}
                      checked={formData.hasWebsite === opt}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>

              {formData.hasWebsite === "نعم" && (
                <div className="mt-4">
                  <label className="block text-[#113c56] font-semibold text-base mb-2">
                    رابط الموقع الحالي <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    name="currentWebsiteUrl"
                    value={formData.currentWebsiteUrl}
                    onChange={handleChange}
                    placeholder="https://example.com"
                    disabled={isSubmitting}
                    dir="ltr"
                    className={inputClassName + " text-left"}
                  />
                </div>
              )}
            </div>

            {/* وسائل التواصل الاجتماعي */}
            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">
                روابط وسائل التواصل الاجتماعي
              </label>
              <p className="text-[#7b8c97] text-sm mb-3">أضف روابط حساباتك على منصات التواصل (إنستغرام، تويتر، لينكدإن…).</p>
              <textarea
                name="socialLinks"
                value={formData.socialLinks}
                onChange={handleChange}
                placeholder="https://instagram.com/yourhandle"
                disabled={isSubmitting}
                rows={3}
                dir="ltr"
                className={inputClassName + " text-left resize-none"}
              />
            </div>

            {/* الميزانية التقريبية */}
            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">
                الميزانية التقريبية <span className="text-red-500">*</span>
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className={inputClassName}
              >
                <option value="" disabled>اختر النطاق التقريبي</option>
                <option value="أقل من 500$">أقل من 500$</option>
                <option value="500$ – 1500$">500$ – 1500$</option>
                <option value="أكثر من 1500$">أكثر من 1500$</option>
              </select>
            </div>

            {/* Submit */}
            <div className="pt-2 flex justify-center md:justify-start">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto md:min-w-[180px] bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-[#113c56] font-extrabold py-3 px-10 rounded-xl shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 disabled:opacity-60 disabled:cursor-not-allowed text-base"
              >
                {isSubmitting ? "جارٍ الإرسال…" : "أرسل طلبك"}
              </button>
            </div>
          </form>
          )}
        </div>
      </div>
    </div>
  );
}
