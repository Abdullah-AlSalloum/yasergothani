"use client";

import React, { useEffect, useMemo, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ar from "react-phone-input-2/lang/ar.json";
import { OPEN_IP_PROTECTION_FORM_EVENT } from "./ipProtectionFormEvent";

type PhoneCountryData = { countryCode?: string };

const DEFAULT_COUNTRY = "sa";

const timezoneCountryMap: Record<string, string> = {
  "Asia/Riyadh": "sa", "Asia/Baghdad": "iq", "Asia/Damascus": "sy",
  "Asia/Amman": "jo", "Asia/Kuwait": "kw", "Asia/Qatar": "qa",
  "Asia/Dubai": "ae", "Africa/Cairo": "eg",
};

const sanitizeCC = (v: string | undefined) => { const c = (v||"").trim().toLowerCase(); return /^[a-z]{2}$/.test(c) ? c : ""; };
const getCountryFromLocale = (l: string | undefined) => { if (!l) return ""; const m = l.match(/[-_]([A-Za-z]{2})\b/); return sanitizeCC(m?.[1]); };
const getDetectedCountry = () => {
  if (typeof window === "undefined") return DEFAULT_COUNTRY;
  const tz = sanitizeCC(timezoneCountryMap[Intl.DateTimeFormat().resolvedOptions().timeZone]);
  if (tz) return tz;
  for (const l of navigator.languages || []) { const c = getCountryFromLocale(l); if (c) return c; }
  return getCountryFromLocale(navigator.language) || DEFAULT_COUNTRY;
};

type FormState = {
  email: string;
  applicantName: string;
  phone: string;
  country: string;
  websiteUrl: string;
  socialLinks: string;
  bookTitle: string;
  authorName: string;
  publisherName: string;
  isbn: string;
  publicationYear: string;
  pageCount: string;
  officialPurchaseLink: string;
  bookDigitalCopyInfo: string;
  copyrightCertificateInfo: string;
  publishingContractInfo: string;
  otherSupportingDocsInfo: string;
  foundPiratedCopies: "" | "نعم" | "لا";
  piratedLinksDetails: string;
  previousRemovalAction: "" | "نعم" | "لا";
  previousRemovalActionDetails: string;
  monitoringPreference: string;
  officialComplaintsPreference: "" | "نعم" | "لا";
  awarenessCampaignPreference: "" | "نعم" | "لا";
  additionalNotes: string;
};

const INITIAL_FORM_STATE: FormState = {
  email: "",
  applicantName: "",
  phone: "",
  country: DEFAULT_COUNTRY,
  websiteUrl: "",
  socialLinks: "",
  bookTitle: "",
  authorName: "",
  publisherName: "",
  isbn: "",
  publicationYear: "",
  pageCount: "",
  officialPurchaseLink: "",
  bookDigitalCopyInfo: "",
  copyrightCertificateInfo: "",
  publishingContractInfo: "",
  otherSupportingDocsInfo: "",
  foundPiratedCopies: "",
  piratedLinksDetails: "",
  previousRemovalAction: "",
  previousRemovalActionDetails: "",
  monitoringPreference: "",
  officialComplaintsPreference: "",
  awarenessCampaignPreference: "",
  additionalNotes: "",
};

const inputClassName =
  "w-full rounded-xl border border-[#d7dfdc] bg-white px-4 py-3 text-[#113c56] placeholder:text-[#7b8c97] focus:outline-none focus:ring-2 focus:ring-[#1a604f]/30 focus:border-[#1a604f]";
const cardClassName = "bg-[#f5f7fb] border border-[#d9dbe5] rounded-xl p-5 md:p-6";
const phoneInputClass =
  "!w-full !h-[50px] !pr-12 !pl-14 !rounded-xl !border !border-[#d7dfdc] !text-[#113c56] !text-left !bg-white focus:!outline-none focus:!ring-2 focus:!ring-[#1a604f]/30 focus:!border-[#1a604f]";
const phoneButtonClass = "!border !border-[#d7dfdc] !rounded-l-xl !bg-white hover:!bg-[#e6eef5]";

const IpProtectionRequestModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState<FormState>({ ...INITIAL_FORM_STATE, country: getDetectedCountry() });

  const handlePhoneChange = (value: string, data: PhoneCountryData | unknown) => {
    const cc = (data as PhoneCountryData)?.countryCode || DEFAULT_COUNTRY;
    setFormData((prev) => ({ ...prev, phone: value, country: cc }));
  };

  useEffect(() => {
    const openForm = () => setIsOpen(true);
    window.addEventListener(OPEN_IP_PROTECTION_FORM_EVENT, openForm);
    return () => {
      window.removeEventListener(OPEN_IP_PROTECTION_FORM_EVENT, openForm);
    };
  }, []);

  const isSubmitDisabled = useMemo(() => isSubmitting, [isSubmitting]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const renderYesNoField = (
    name: "foundPiratedCopies" | "previousRemovalAction" | "officialComplaintsPreference" | "awarenessCampaignPreference",
    label: string,
  ) => (
    <div className={cardClassName}>
      <label className="block text-[#113c56] font-bold text-xl mb-2">{label} <span className="text-red-500">*</span></label>
      <div className="flex items-center gap-6 text-[#113c56] text-lg">
        <label className="flex items-center gap-2">
          <input type="radio" name={name} value="نعم" checked={formData[name] === "نعم"} onChange={handleInputChange} required />
          <span>نعم</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name={name} value="لا" checked={formData[name] === "لا"} onChange={handleInputChange} required />
          <span>لا</span>
        </label>
      </div>
    </div>
  );

  const handleClose = () => {
    if (isSubmitting) return;
    setIsOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("/api/ip-protection-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "تعذر إرسال النموذج في الوقت الحالي.");
      }

      setSuccessMessage("تم إرسال الطلب بنجاح. سنتواصل معك قريبًا.");
      setFormData(INITIAL_FORM_STATE);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "حدث خطأ غير متوقع، حاول مرة أخرى.");
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
      <div className="max-w-3xl mx-auto relative" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="absolute left-2 top-2 md:left-4 md:top-4 text-[#113c56] font-bold"
          onClick={handleClose}
          aria-label="إغلاق"
        >
          <CloseIcon />
        </button>

        <div className="bg-[#f5f7fb] rounded-2xl border border-[#cfd6ea] shadow-2xl overflow-hidden">
          <div className="border-t-[8px] border-[#1a604f] p-6 md:p-8 border-b border-[#dde2f0] text-right">
            <h3 className="text-3xl md:text-4xl font-bold text-[#113c56] mb-3" style={{ fontFamily: "TheYearOfTheCamel, Tajawal, Arial, Helvetica, sans-serif" }}>
              طلب حماية كتاب - وثيق
            </h3>
            <p className="text-[#1a2f3d] text-lg leading-8">
              يرجى تعبئة النموذج التالي. بالنسبة لحقول الملفات، أدخل رابط الملف أو وصفًا مختصرًا مؤقتًا.
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
              <p className="text-[#1a2f3d] text-lg leading-8">سنتواصل معك في أقرب وقت ممكن لمناقشة تفاصيل طلبك.</p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-[#113c56] font-extrabold py-3 px-10 rounded-xl shadow transition-all duration-200"
              >
                إغلاق
              </button>
            </div>
          ) : (
          <form className="p-4 md:p-6 space-y-4" onSubmit={handleSubmit}>
            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">اسم مقدم الطلب <span className="text-red-500">*</span></label>
              <input name="applicantName" value={formData.applicantName} onChange={handleInputChange} required className={inputClassName} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">عنوان البريد الإلكتروني <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={inputClassName}
              />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">رقم الهاتف <span className="text-red-500">*</span></label>
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

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">الموقع الإلكتروني (إن وجد)</label>
              <input name="websiteUrl" value={formData.websiteUrl} onChange={handleInputChange} className={inputClassName} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">حسابات التواصل الاجتماعي <span className="text-red-500">*</span></label>
              <textarea
                name="socialLinks"
                value={formData.socialLinks}
                onChange={handleInputChange}
                required
                className={`${inputClassName} min-h-24`}
              />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">عنوان الكتاب المطلوب حمايته <span className="text-red-500">*</span></label>
              <input name="bookTitle" value={formData.bookTitle} onChange={handleInputChange} required className={inputClassName} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">اسم المؤلف <span className="text-red-500">*</span></label>
              <input name="authorName" value={formData.authorName} onChange={handleInputChange} required className={inputClassName} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">دار النشر <span className="text-red-500">*</span></label>
              <input name="publisherName" value={formData.publisherName} onChange={handleInputChange} required className={inputClassName} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">رقم ISBN <span className="text-red-500">*</span></label>
              <input name="isbn" value={formData.isbn} onChange={handleInputChange} required className={inputClassName} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">سنة النشر <span className="text-red-500">*</span></label>
              <input name="publicationYear" value={formData.publicationYear} onChange={handleInputChange} required className={inputClassName} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">عدد صفحات الكتاب <span className="text-red-500">*</span></label>
              <input name="pageCount" value={formData.pageCount} onChange={handleInputChange} required className={inputClassName} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">رابط رسمي لشراء الكتاب ( إن وجد )</label>
              <input name="officialPurchaseLink" value={formData.officialPurchaseLink} onChange={handleInputChange} className={inputClassName} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">نسخة إلكترونية من الكتاب ( لمطابقتها مع النسخة المقرصنة ) <span className="text-red-500">*</span></label>
              <textarea
                name="bookDigitalCopyInfo"
                value={formData.bookDigitalCopyInfo}
                onChange={handleInputChange}
                required
                placeholder="أدخل رابط الملف أو وصفًا مختصرًا"
                className={`${inputClassName} min-h-20`}
              />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">شهادة تسجيل الملكية الفكرية للكتاب <span className="text-red-500">*</span></label>
              <textarea
                name="copyrightCertificateInfo"
                value={formData.copyrightCertificateInfo}
                onChange={handleInputChange}
                required
                placeholder="أدخل رابط الملف أو وصفًا مختصرًا"
                className={`${inputClassName} min-h-20`}
              />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">عقد النشر بين المؤلف والناشر (إن كان الناشر هو مقدم الطلب)</label>
              <textarea
                name="publishingContractInfo"
                value={formData.publishingContractInfo}
                onChange={handleInputChange}
                placeholder="أدخل رابط الملف أو وصفًا مختصرًا"
                className={`${inputClassName} min-h-20`}
              />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">أي مستندات أخرى تثبت حقوق الناشر أو المؤلف <span className="text-red-500">*</span></label>
              <textarea
                name="otherSupportingDocsInfo"
                value={formData.otherSupportingDocsInfo}
                onChange={handleInputChange}
                required
                placeholder="أدخل روابط الملفات أو وصفًا مختصرًا"
                className={`${inputClassName} min-h-20`}
              />
            </div>

            {renderYesNoField("foundPiratedCopies", "هل سبق وتم العثور على نسخ مقرصنة؟")}

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">
                إذا نعم، يرجى تزويدنا بروابط المواقع أو المنصات التي تنشر النسخ المقرصنة
                {formData.foundPiratedCopies === "نعم" && <span className="text-red-500"> *</span>}
              </label>
              <textarea
                name="piratedLinksDetails"
                value={formData.piratedLinksDetails}
                onChange={handleInputChange}
                required={formData.foundPiratedCopies === "نعم"}
                placeholder="اكتب الروابط أو التفاصيل"
                className={`${inputClassName} min-h-24`}
              />
            </div>

            {renderYesNoField("previousRemovalAction", "هل تم اتخاذ أي إجراء سابق لإزالة النسخ المقرصنة؟")}

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">
                إذا نعم، يرجى توضيح الإجراءات التي تمت والنتائج التي تحققت.
                {formData.previousRemovalAction === "نعم" && <span className="text-red-500"> *</span>}
              </label>
              <textarea
                name="previousRemovalActionDetails"
                value={formData.previousRemovalActionDetails}
                onChange={handleInputChange}
                required={formData.previousRemovalAction === "نعم"}
                placeholder="اكتب التفاصيل"
                className={`${inputClassName} min-h-24`}
              />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">هل ترغب في مراقبة الإنترنت بشكل عام أم منصات محددة؟ (إذا منصات محددة يرجى كتابة أسمائها) <span className="text-red-500">*</span></label>
              <textarea
                name="monitoringPreference"
                value={formData.monitoringPreference}
                onChange={handleInputChange}
                required
                className={`${inputClassName} min-h-24`}
              />
            </div>

            {renderYesNoField("officialComplaintsPreference", "في حال واجهنا مواقع لا تستجيب (ترفض الحذف) هل ستقدم شكاوى رسمية ضد المواقع المخالفة؟")}

            {renderYesNoField("awarenessCampaignPreference", "هل ترغب في حملة توعوية على وسائل التواصل حول القرصنة وأضرارها؟")}

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">هل لديك أي متطلبات أو ملاحظات إضافية؟</label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleInputChange}
                className={`${inputClassName} min-h-24`}
              />
            </div>

            {errorMessage && <p className="text-red-600 font-bold text-lg text-right">{errorMessage}</p>}

            <div className="flex justify-center md:justify-start pt-2">
              <button
                type="submit"
                disabled={isSubmitDisabled}
                className="bg-[#1a604f] hover:bg-[#154d40] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-lg text-lg transition-all"
              >
                {isSubmitting ? "جاري الإرسال..." : "إرسال"}
              </button>
            </div>
          </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default IpProtectionRequestModal;