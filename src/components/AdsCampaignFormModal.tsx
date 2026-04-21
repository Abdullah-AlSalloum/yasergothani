"use client";

import { useMemo, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

type AdsFormState = {
  fullName: string;
  phone: string;
  projectName: string;
  city: string;
  socialLinks: string;
  previousAdsExperience: string;
  adImpactData: string;
  offerAndIdealCustomer: string;
  differentiation: string;
  adGoals: string[];
  successMetric90Days: string;
  landingPageFlow: string;
  monthlyBudget: string;
  expectedOutcome: string;
};

const INITIAL_STATE: AdsFormState = {
  fullName: "",
  phone: "",
  projectName: "",
  city: "",
  socialLinks: "",
  previousAdsExperience: "",
  adImpactData: "",
  offerAndIdealCustomer: "",
  differentiation: "",
  adGoals: [],
  successMetric90Days: "",
  landingPageFlow: "",
  monthlyBudget: "",
  expectedOutcome: "",
};

const AD_GOALS_OPTIONS = [
  "بناء وعي بالمشروع",
  "الحصول على جمهور وتفاعل ومشاهدات",
  "زيارات إلى موقع المشروع",
  "مبيعات أونلاين",
];

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AdsCampaignFormModal = ({ isOpen, onClose }: Props) => {
  const [formData, setFormData] = useState<AdsFormState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const inputClassName =
    "w-full rounded-xl border border-[#d7dfdc] bg-white px-4 py-3 text-[#113c56] placeholder:text-[#7b8c97] focus:outline-none focus:ring-2 focus:ring-[#1a604f]/30 focus:border-[#1a604f]";
  const cardClassName = "bg-[#f5f7fb] border border-[#d9dbe5] rounded-xl p-5 md:p-6";

  const isSubmitDisabled = useMemo(() => {
    if (isSubmitting) return true;
    if (!formData.fullName || !formData.phone || !formData.projectName || !formData.city) return true;
    if (!formData.socialLinks || !formData.previousAdsExperience || !formData.adImpactData) return true;
    if (!formData.offerAndIdealCustomer || !formData.differentiation || !formData.successMetric90Days) return true;
    if (!formData.landingPageFlow || !formData.monthlyBudget || !formData.expectedOutcome) return true;
    if (formData.adGoals.length === 0) return true;
    return false;
  }, [formData, isSubmitting]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => {
      const exists = prev.adGoals.includes(goal);
      return {
        ...prev,
        adGoals: exists ? prev.adGoals.filter((item) => item !== goal) : [...prev.adGoals, goal],
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/ads-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error || "تعذر إرسال النموذج في الوقت الحالي.");
      }

      setSuccessMessage("تم إرسال النموذج بنجاح. شكرًا لك، سنتواصل معك قريبًا.");
      setFormData(INITIAL_STATE);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "حدث خطأ غير متوقع، حاول مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[130] bg-black/60 backdrop-blur-sm px-3 py-6 md:py-10 overflow-y-auto"
      dir="rtl"
      onClick={onClose}
    >
      <div className="max-w-4xl mx-auto relative" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="absolute left-2 top-2 md:left-4 md:top-4 text-[#113c56] font-bold"
          onClick={onClose}
          aria-label="إغلاق"
        >
          <CloseIcon />
        </button>

        <div className="bg-[#f5f7fb] rounded-2xl border border-[#cfd6ea] shadow-2xl overflow-hidden">
          <div className="border-t-[8px] border-[#4256b8] p-6 md:p-8 border-b border-[#dde2f0] text-right">
            <h3
              className="text-3xl md:text-4xl font-bold text-[#113c56] mb-3"
              style={{ fontFamily: "TheYearOfTheCamel, Tajawal, Arial, Helvetica, sans-serif" }}
            >
              إدارة الحملات الإعلانية
            </h3>
            <p className="text-[#1a2f3d] text-lg leading-8">
              عبّئ النموذج التالي لنفهم وضع مشروعك ونبني خطة إعلانية دقيقة تناسب أهدافك الحالية.
            </p>
          </div>

          <form className="p-4 md:p-6 space-y-4" onSubmit={handleSubmit}>
            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">الاسم الكامل <span className="text-red-500">*</span></label>
              <input name="fullName" value={formData.fullName} onChange={handleInputChange} required className={inputClassName} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">رقم الهاتف <span className="text-red-500">*</span></label>
              <input name="phone" value={formData.phone} onChange={handleInputChange} required className={inputClassName} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">اسم المشروع <span className="text-red-500">*</span></label>
              <input name="projectName" value={formData.projectName} onChange={handleInputChange} required className={inputClassName} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">المدينة <span className="text-red-500">*</span></label>
              <input name="city" value={formData.city} onChange={handleInputChange} required className={inputClassName} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">حسابات وسائل التواصل الاجتماعي (رابط) <span className="text-red-500">*</span></label>
              <textarea name="socialLinks" value={formData.socialLinks} onChange={handleInputChange} required className={`${inputClassName} min-h-24`} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">هل سبق لك تشغيل إعلانات؟ وما النتيجة؟ <span className="text-red-500">*</span></label>
              <textarea name="previousAdsExperience" value={formData.previousAdsExperience} onChange={handleInputChange} required className={`${inputClassName} min-h-24`} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">من أثرها، وهل لديك بيانات منها؟ <span className="text-red-500">*</span></label>
              <textarea name="adImpactData" value={formData.adImpactData} onChange={handleInputChange} required className={`${inputClassName} min-h-24`} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">ماذا تبيع، ومن هو عميلك المثالي بالضبط؟ <span className="text-red-500">*</span></label>
              <textarea name="offerAndIdealCustomer" value={formData.offerAndIdealCustomer} onChange={handleInputChange} required className={`${inputClassName} min-h-24`} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">ما الذي يميزك عن المنافسين؟ <span className="text-red-500">*</span></label>
              <textarea name="differentiation" value={formData.differentiation} onChange={handleInputChange} required className={`${inputClassName} min-h-24`} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-3">ماذا تريد من الإعلانات الآن؟ <span className="text-red-500">*</span></label>
              <div className="space-y-3">
                {AD_GOALS_OPTIONS.map((goal) => (
                  <label key={goal} className="flex items-center gap-3 text-[#113c56] text-lg">
                    <input
                      type="checkbox"
                      checked={formData.adGoals.includes(goal)}
                      onChange={() => handleGoalToggle(goal)}
                    />
                    <span>{goal}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">ما الرقم الذي لو حققته خلال 90 يومًا تعتبر الحملة ناجحة؟ <span className="text-red-500">*</span></label>
              <input name="successMetric90Days" value={formData.successMetric90Days} onChange={handleInputChange} required className={inputClassName} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">هل لديك صفحة هبوط أو موقع إلكتروني، وكيف تستقبل العملاء؟ <span className="text-red-500">*</span></label>
              <textarea name="landingPageFlow" value={formData.landingPageFlow} onChange={handleInputChange} required className={`${inputClassName} min-h-24`} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">كم الميزانية الشهرية للإعلانات تحديدًا؟ <span className="text-red-500">*</span></label>
              <input name="monthlyBudget" value={formData.monthlyBudget} onChange={handleInputChange} required className={inputClassName} />
            </div>

            <div className={cardClassName}>
              <label className="block text-[#113c56] font-bold text-xl mb-2">ما الذي تتوقع حدوثه بعد الحصول على الخدمة تحديدًا؟ <span className="text-red-500">*</span></label>
              <textarea name="expectedOutcome" value={formData.expectedOutcome} onChange={handleInputChange} required className={`${inputClassName} min-h-24`} />
            </div>

            {errorMessage && <p className="text-red-600 font-bold text-lg text-right">{errorMessage}</p>}
            {successMessage && <p className="text-[#1a604f] font-bold text-lg text-right">{successMessage}</p>}

            <div className="flex justify-center md:justify-start pt-2">
              <button
                type="submit"
                disabled={isSubmitDisabled}
                className="bg-[#4256b8] hover:bg-[#36479a] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-lg text-lg transition-all"
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

export default AdsCampaignFormModal;
