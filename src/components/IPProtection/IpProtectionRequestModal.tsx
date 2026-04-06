"use client";

import React, { useEffect, useMemo, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { OPEN_IP_PROTECTION_FORM_EVENT } from "./ipProtectionFormEvent";

type FormState = {
  email: string;
  applicantName: string;
  phone: string;
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

const IpProtectionRequestModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM_STATE);

  useEffect(() => {
    const openForm = () => setIsOpen(true);
    window.addEventListener(OPEN_IP_PROTECTION_FORM_EVENT, openForm);
    return () => {
      window.removeEventListener(OPEN_IP_PROTECTION_FORM_EVENT, openForm);
    };
  }, []);

  const isSubmitDisabled = useMemo(() => {
    if (isSubmitting) return true;
    if (!formData.email.trim()) return true;
    if (!formData.applicantName.trim()) return true;
    if (!formData.phone.trim()) return true;
    if (!formData.socialLinks.trim()) return true;
    if (!formData.bookTitle.trim()) return true;
    if (!formData.authorName.trim()) return true;
    if (!formData.publisherName.trim()) return true;
    if (!formData.isbn.trim()) return true;
    if (!formData.publicationYear.trim()) return true;
    if (!formData.pageCount.trim()) return true;
    if (!formData.bookDigitalCopyInfo.trim()) return true;
    if (!formData.copyrightCertificateInfo.trim()) return true;
    if (!formData.otherSupportingDocsInfo.trim()) return true;
    if (!formData.foundPiratedCopies) return true;
    if (formData.foundPiratedCopies === "نعم" && !formData.piratedLinksDetails.trim()) return true;
    if (!formData.previousRemovalAction) return true;
    if (formData.previousRemovalAction === "نعم" && !formData.previousRemovalActionDetails.trim()) return true;
    if (!formData.monitoringPreference.trim()) return true;
    if (!formData.officialComplaintsPreference) return true;
    if (!formData.awarenessCampaignPreference) return true;
    return false;
  }, [formData, isSubmitting]);

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

          <form className="p-4 md:p-6 space-y-4" onSubmit={handleSubmit}>
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
              <label className="block text-[#113c56] font-bold text-xl mb-2">اسم مقدم الطلب <span className="text-red-500">*</span></label>
              <input name="applicantName" value={formData.applicantName} onChange={handleInputChange} required className={inputClassName} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">رقم الهاتف <span className="text-red-500">*</span></label>
              <input name="phone" value={formData.phone} onChange={handleInputChange} required className={inputClassName} />
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
              <label className="block text-[#113c56] font-bold text-xl mb-2">شهادة تسجيل الملكية الفكرية للكتاب </label>
              <textarea
                name="copyrightCertificateInfo"
                value={formData.copyrightCertificateInfo}
                onChange={handleInputChange}
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
              <label className="block text-[#113c56] font-bold text-xl mb-2">إذا نعم، يرجى تزويدنا بروابط المواقع أو المنصات التي تنشر النسخ المقرصنة</label>
              <textarea
                name="piratedLinksDetails"
                value={formData.piratedLinksDetails}
                onChange={handleInputChange}
                placeholder="اكتب الروابط أو التفاصيل"
                className={`${inputClassName} min-h-24`}
              />
            </div>

            {renderYesNoField("previousRemovalAction", "هل تم اتخاذ أي إجراء سابق لإزالة النسخ المقرصنة؟")}

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">إذا نعم، يرجى توضيح الإجراءات التي تمت والنتائج التي تحققت.</label>
              <textarea
                name="previousRemovalActionDetails"
                value={formData.previousRemovalActionDetails}
                onChange={handleInputChange}
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
            {successMessage && <p className="text-[#1a604f] font-bold text-lg text-right">{successMessage}</p>}

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
        </div>
      </div>
    </div>
  );
};

export default IpProtectionRequestModal;