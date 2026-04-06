"use client";

import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { OPEN_CASE_STUDY_FORM_EVENT } from "./caseStudyFormEvent";

type FormState = {
  email: string;
  applicantName: string;
  phone: string;
  country: string;
  bookTitle: string;
  authorName: string;
  publisherName: string;
  isbn: string;
  pageCount: string;
  publicationYear: string;
  officialPurchaseLink: string;
  piratedLink: string;
  foundPiratedOnline: string;
  piratedCopiesScale: string;
  triedToRemove: string;
  contactedLawyer: string;
  filedComplaint: string;
  officialRegistration: string;
  publishingContract: string;
  officialDigitalCopy: string;
  salesDecline: string;
  futurePlan: string;
};

const INITIAL: FormState = {
  email: "",
  applicantName: "",
  phone: "",
  country: "",
  bookTitle: "",
  authorName: "",
  publisherName: "",
  isbn: "",
  pageCount: "",
  publicationYear: "",
  officialPurchaseLink: "",
  piratedLink: "",
  foundPiratedOnline: "",
  piratedCopiesScale: "",
  triedToRemove: "",
  contactedLawyer: "",
  filedComplaint: "",
  officialRegistration: "",
  publishingContract: "",
  officialDigitalCopy: "",
  salesDecline: "",
  futurePlan: "",
};

const inputClass =
  "w-full rounded-xl border border-[#d9e4e1] bg-white px-4 py-3 text-[#0f3b33] placeholder:text-[#6e8b84] focus:outline-none focus:ring-2 focus:ring-[#1a604f]/30 focus:border-[#1a604f] transition-all";
const textareaClass =
  "w-full rounded-xl border border-[#d9e4e1] bg-white px-4 py-3 text-[#0f3b33] placeholder:text-[#6e8b84] focus:outline-none focus:ring-2 focus:ring-[#1a604f]/30 focus:border-[#1a604f] transition-all min-h-[90px] resize-y";
const cardClass = "bg-[#f5f7fb] border border-[#d9e4e1] rounded-xl p-5";
const labelClass = "block text-[#0f3b33] font-bold text-base mb-2";

export const CaseStudyModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormState>(INITIAL);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener(OPEN_CASE_STUDY_FORM_EVENT, open);
    return () => window.removeEventListener(OPEN_CASE_STUDY_FORM_EVENT, open);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isSubmitDisabled =
    isSubmitting ||
    !formData.email.trim() ||
    !formData.applicantName.trim() ||
    !formData.bookTitle.trim() ||
    !formData.authorName.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/case-study", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "تعذر إرسال البيانات.");
      setSuccessMessage("تم إرسال طلبك بنجاح. سنتواصل معك قريبًا.");
      setFormData(INITIAL);
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "حدث خطأ غير متوقع.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[130] bg-black/60 backdrop-blur-sm px-3 py-6 md:py-10 overflow-y-auto"
      dir="rtl"
      onClick={() => setIsOpen(false)}
    >
      <div className="max-w-4xl mx-auto relative" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="absolute left-2 top-2 md:left-4 md:top-4 text-[#0f3b33] font-bold z-10"
          onClick={() => setIsOpen(false)}
          aria-label="إغلاق"
        >
          <CloseIcon />
        </button>

        <div className="bg-[#f5f7fb] rounded-2xl border border-[#d9e4e1] shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="border-t-[8px] border-[#1a604f] p-6 md:p-8 border-b border-[#d9e4e1] text-right">
            <h3 className="text-3xl md:text-4xl font-bold text-[#0f3b33] mb-2">
              دراسة حالة مجانية
            </h3>
            <p className="text-[#437066] text-base leading-7">
              أجب على الأسئلة التالية لنتمكن من تقييم وضع كتابك وتقديم دراسة حالة مجانية.
            </p>
          </div>

          <form className="p-4 md:p-6 space-y-4" onSubmit={handleSubmit}>

            {/* ── بيانات مقدم الطلب ── */}
            <h4 className="text-[#1a604f] font-bold text-lg border-b border-[#d9e4e1] pb-2">بيانات مقدم الطلب</h4>

            <div className={cardClass}>
              <label className={labelClass}>اسم مقدم الطلب <span className="text-red-500">*</span></label>
              <input name="applicantName" value={formData.applicantName} onChange={handleChange} required className={inputClass} />
            </div>

            <div className={cardClass}>
              <label className={labelClass}>عنوان البريد الإلكتروني <span className="text-red-500">*</span></label>
              <input name="email" type="email" value={formData.email} onChange={handleChange} required className={inputClass} />
            </div>

            <div className={cardClass}>
              <label className={labelClass}>رقم الهاتف</label>
              <input name="phone" value={formData.phone} onChange={handleChange} className={inputClass} />
            </div>

            <div className={cardClass}>
              <label className={labelClass}>الدولة</label>
              <input name="country" value={formData.country} onChange={handleChange} className={inputClass} />
            </div>

            {/* ── معلومات الكتاب ── */}
            <h4 className="text-[#1a604f] font-bold text-lg border-b border-[#d9e4e1] pb-2 pt-2">معلومات الكتاب</h4>

            <div className={cardClass}>
              <label className={labelClass}>عنوان الكتاب <span className="text-red-500">*</span></label>
              <input name="bookTitle" value={formData.bookTitle} onChange={handleChange} required className={inputClass} />
            </div>

            <div className={cardClass}>
              <label className={labelClass}>اسم المؤلف <span className="text-red-500">*</span></label>
              <input name="authorName" value={formData.authorName} onChange={handleChange} required className={inputClass} />
            </div>

            <div className={cardClass}>
              <label className={labelClass}>دار النشر</label>
              <input name="publisherName" value={formData.publisherName} onChange={handleChange} className={inputClass} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={cardClass}>
                <label className={labelClass}>رقم ISBN</label>
                <input name="isbn" value={formData.isbn} onChange={handleChange} className={inputClass} />
              </div>
              <div className={cardClass}>
                <label className={labelClass}>عدد صفحات الكتاب</label>
                <input name="pageCount" value={formData.pageCount} onChange={handleChange} className={inputClass} />
              </div>
              <div className={cardClass}>
                <label className={labelClass}>سنة النشر</label>
                <input name="publicationYear" value={formData.publicationYear} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            <div className={cardClass}>
              <label className={labelClass}>رابط رسمي لشراء الكتاب (إن وجد)</label>
              <input name="officialPurchaseLink" value={formData.officialPurchaseLink} onChange={handleChange} className={inputClass} placeholder="https://" />
            </div>

            <div className={cardClass}>
              <label className={labelClass}>رابط أحد النسخ المقرصنة (إن وجد)</label>
              <input name="piratedLink" value={formData.piratedLink} onChange={handleChange} className={inputClass} placeholder="https://" />
            </div>

            {/* ── أسئلة استبيان القرصنة ── */}
            <h4 className="text-[#1a604f] font-bold text-lg border-b border-[#d9e4e1] pb-2 pt-2">أسئلة حول القرصنة</h4>

            {[
              { name: "foundPiratedOnline", label: "هل سبق لك أن وجدت كتابك منشورًا بشكل غير قانوني على الإنترنت؟ إذا نعم، فأين؟" },
              { name: "piratedCopiesScale", label: "هل لديك فكرة عن حجم انتشار النسخ المقرصنة من كتابك؟ (مثلاً: مواقع إلكترونية، مجموعات تواصل، قنوات تيليجرام، أسواق غير رسمية، إلخ)" },
              { name: "triedToRemove", label: "هل سبق لك أن حاولت حذف النسخ المسروقة؟ إذا نعم، ما الخطوات التي اتخذتها؟ وهل نجحت؟" },
              { name: "contactedLawyer", label: "هل سبق لك أن تواصلت مع محامٍ أو جهة قانونية بخصوص حماية حقوق كتابك؟ إذا نعم، ما الإجراءات التي تمت؟" },
              { name: "filedComplaint", label: "هل سبق أن تقدمت بشكوى لإدارة موقع أو منصة تواصل اجتماعي لحذف نسخ غير قانونية؟ إذا نعم، كيف كان ردهم؟" },
              { name: "officialRegistration", label: "هل قمت بتسجيل كتابك رسميًا لدى جهة حكومية لحماية حقوق الملكية الفكرية؟ إذا نعم، في أي دولة وتحت أي نظام؟" },
              { name: "publishingContract", label: "هل لديك عقد نشر مع دار نشر أو منصة إلكترونية؟ إذا نعم، هل يتضمن بندًا لحماية الملكية الفكرية ومكافحة القرصنة؟" },
              { name: "officialDigitalCopy", label: "هل لديك نسخة إلكترونية رسمية محمية (PDF مشفر أو منصة رسمية)؟ أم أن النسخ الإلكترونية غير رسمية؟" },
              { name: "salesDecline", label: "هل لاحظت انخفاضًا في مبيعات كتابك بسبب القرصنة؟ إذا نعم، هل لديك تقدير لنسبة الخسائر؟" },
              { name: "futurePlan", label: "ما هي خطتك لمواجهة القرصنة مستقبلاً؟ وهل لديك اهتمام بالاستثمار في حلول لحماية حقوق كتابك؟" },
            ].map(({ name, label }) => (
              <div key={name} className={cardClass}>
                <label className={labelClass}>{label}</label>
                <textarea
                  name={name}
                  value={(formData as Record<string, string>)[name]}
                  onChange={handleChange}
                  className={textareaClass}
                />
              </div>
            ))}

            {errorMessage && <p className="text-red-600 font-bold text-base text-right">{errorMessage}</p>}
            {successMessage && <p className="text-[#1a604f] font-bold text-base text-right">{successMessage}</p>}

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

export default CaseStudyModal;
