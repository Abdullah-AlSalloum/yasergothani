import React, { useEffect, useMemo, useState } from "react";
import { CheckCircleIcon, LightBulbIcon, PencilSquareIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import CloseIcon from '@mui/icons-material/Close';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ar from "react-phone-input-2/lang/ar.json";

const features = [
  { icon: <CheckCircleIcon className="h-7 w-7 text-white mx-auto mb-2" />, title: "تحليل مبدأي للوضع الحالي", /*desc: "تحليل الوضع الحالي لك"*/ },
  { icon: <LightBulbIcon className="h-7 w-7 text-white mx-auto mb-2" />, title: "توصيات عملية لحلول إسعافية	",/* desc: "أفكار يمكنك تنفيذها!"*/ },
  { icon: <PencilSquareIcon className="h-7 w-7 text-white mx-auto mb-2" />, title: "وضع الخطوات الرئيسية للخطة القادمة", /*desc: "مرحلة تخرج بخطة تنفيذ" */},
];

type FormState = {
  fullName: string;
  phone: string;
  projectName: string;
  city: string;
  businessSummary: string;
  biggestEffortArea: string;
  biggestEffortAreaOther: string;
  numbersTracking: string;
  upcomingGoal: string;
  upcomingGoalOther: string;
  previousAttempts: string;
  socialLinks: string;
};

const INITIAL_FORM_STATE: FormState = {
  fullName: "",
  phone: "",
  projectName: "",
  city: "",
  businessSummary: "",
  biggestEffortArea: "",
  biggestEffortAreaOther: "",
  numbersTracking: "",
  upcomingGoal: "",
  upcomingGoalOther: "",
  previousAttempts: "",
  socialLinks: "",
};

const biggestEffortOptions = [
  "المحتوى",
  "الإعلانات",
  "المبيعات",
  "المتجر الإلكتروني/الموقع",
  "جذب العملاء",
  "إدارة الوقت",
  "لا أعلم بشكل واضح",
  "Other",
];

const numbersTrackingOptions = [
  "نعم، الأرقام واضحة ومتابعة.",
  "جزئيًا، بعض الأرقام متوفرة.",
  "لا، لا يوجد نظام واضح.",
];

const upcomingGoalOptions = [
  "زيادة المبيعات",
  "تنظيم العمل والعمليات",
  "تحسين كفاءة الإعلانات",
  "بناء حضور رقمي قوي",
  "تقليل الخسائر والهدر",
  "Other",
];

const OPEN_CONSULTATION_FORM_EVENT = "open-consultation-form";

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
  if (typeof window === "undefined") return "sa";
  const localeMatch = (navigator.language || "").match(/-([A-Za-z]{2})$/);
  const localeCountry = localeMatch?.[1]?.toLowerCase();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return localeCountry || timezoneCountryMap[timezone] || "sa";
};

const CTASection = ({ modalOnly = false }: { modalOnly?: boolean }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [phoneCountry, setPhoneCountry] = useState("sa");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM_STATE);

  const inputClassName =
    "w-full rounded-xl border border-[#d7dfdc] bg-white px-4 py-3 text-[#113c56] placeholder:text-[#7b8c97] focus:outline-none focus:ring-2 focus:ring-[#1a604f]/30 focus:border-[#1a604f]";

  const cardClassName = "bg-[#f5f7fb] border border-[#d9dbe5] rounded-xl p-5 md:p-6";

  const isOtherEffortSelected = formData.biggestEffortArea === "Other";
  const isOtherGoalSelected = formData.upcomingGoal === "Other";

  useEffect(() => {
    // Only the global modal instance should react to broadcast open events.
    if (!modalOnly) return;

    const openForm = () => setIsFormOpen(true);
    window.addEventListener(OPEN_CONSULTATION_FORM_EVENT, openForm);
    return () => {
      window.removeEventListener(OPEN_CONSULTATION_FORM_EVENT, openForm);
    };
  }, [modalOnly]);

  const isSubmitDisabled = useMemo(() => {
    if (isSubmitting) return true;
    if (!formData.fullName || !formData.phone || !formData.projectName || !formData.city) return true;
    if (!formData.businessSummary || !formData.biggestEffortArea || !formData.numbersTracking) return true;
    if (!formData.upcomingGoal || !formData.previousAttempts || !formData.socialLinks) return true;
    if (isOtherEffortSelected && !formData.biggestEffortAreaOther.trim()) return true;
    if (isOtherGoalSelected && !formData.upcomingGoalOther.trim()) return true;
    return false;
  }, [formData, isSubmitting, isOtherEffortSelected, isOtherGoalSelected]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          biggestEffortAreaOther: formData.biggestEffortArea === "Other" ? formData.biggestEffortAreaOther : "",
          upcomingGoalOther: formData.upcomingGoal === "Other" ? formData.upcomingGoalOther : "",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "تعذر إرسال النموذج في الوقت الحالي.");
      }

      setSuccessMessage("تم إرسال النموذج بنجاح. شكرًا لك، سنتواصل معك قريبًا.");
      setFormData(INITIAL_FORM_STATE);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "حدث خطأ غير متوقع، حاول مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <>
    {!modalOnly && (
  <section id="calltoaction" className="py-8 px-4 md:px-12 bg-[#113c56] text-white relative overflow-hidden animate-fade-in">
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-4">
        <span className="inline-block bg-[#fcd410] text-white text-sm font-bold rounded-full px-4 py-1 mb-2 animate-bounce">عرض خاص</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 animate-fade-in-up" style={{ fontFamily: 'TheYearOfTheCamel, Tajawal, Arial, Helvetica, sans-serif' }}>
          ابدأ رحلتك التسويقية معنا اليوم
        </h2>
        <p className="text-lg mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>احصل على استشارة مجانية لمدة 30 دقيقة مع أحد خبرائنا، للحصول على تحليل مبدأي للوضع الحالي مع حلول مقترحة وخطوات عملية يمكنك تطبيقها فورًا.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {features.map((f, idx) => (
          <div key={idx} className="bg-white/10 rounded-xl p-6 shadow flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>
            {f.icon}
            <div className="font-bold text-lg mb-1">{f.title}</div>
            {/* <div className="text-white/80 text-sm">{f.desc}</div> */}
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            setIsFormOpen(true);
          }}
          className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow flex items-center gap-2 animate-fade-in-up"
          style={{ animationDelay: '0.7s' }}
        >
          <InformationCircleIcon className="h-6 w-6" />
          احجز استشارة مجانية الآن
        </a>
        {/* <button className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <InformationCircleIcon className="h-6 w-6" />
          عرض مزيد من التفاصيل
        </button> */}
      </div>
      <div className="text-white/80 text-lg mt-2 animate-fade-in-up" style={{ animationDelay: '1s' }}>* متوفر لعدد محدود من العملاء. لا توجد رسوم أو التزامات، وسيتم تقييم ملاءمتك مجانًا.</div>
    </div>

    <style>{`
      @keyframes fade-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes fade-in-up {
        0% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 1s ease-in;
      }
      .animate-fade-in-up {
        animation: fade-in-up 0.8s cubic-bezier(.39,.575,.565,1) both;
      }
    `}</style>
  </section>
    )}
    {isFormOpen && (
      <div
        className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm px-3 py-6 md:py-10 overflow-y-auto"
        dir="rtl"
        onClick={() => setIsFormOpen(false)}
      >
        <div className="max-w-4xl mx-auto relative" onClick={(event) => event.stopPropagation()}>
          <button
            type="button"
            className="absolute left-2 top-2 md:left-4 md:top-4 text-[#113c56] font-bold"
            onClick={() => setIsFormOpen(false)}
            aria-label="إغلاق"
          >
            <CloseIcon />
          </button>

          <div className="bg-[#f5f7fb] rounded-2xl border border-[#cfd6ea] shadow-2xl overflow-hidden">
            <div className="border-t-[8px] border-[#4256b8] p-6 md:p-8 border-b border-[#dde2f0] text-right">
              <h3 className="text-3xl md:text-4xl font-bold text-[#113c56] mb-3" style={{ fontFamily: 'TheYearOfTheCamel, Tajawal, Arial, Helvetica, sans-serif' }}>
                استشارة تحليل مبدائي.
              </h3>
              <p className="text-[#1a2f3d] text-lg leading-8">
                من خلال هذا النموذج نقوم بإعداد استشارة مجانية تحليل مبدائي للوضع الحالي مع تقديم حلول مقترحة وخطوات عملية تساعد
                صاحب المشروع على تطبيقها بشكل فوري.
              </p>
            </div>

            <form className="p-4 md:p-6 space-y-4" onSubmit={handleSubmit}>
              <div className={cardClassName}>
                <label className="block text-[#113c56] font-bold text-xl mb-2">الاسم الكامل <span className="text-red-500">*</span></label>
                <input name="fullName" value={formData.fullName} onChange={handleInputChange} required className={inputClassName} />
              </div>

              <div className={cardClassName}>
                <label className="block text-[#113c56] font-bold text-xl mb-2">رقم الهاتف <span className="text-red-500">*</span></label>
                <div dir="ltr">
                  <PhoneInput
                    country={phoneCountry}
                    value={formData.phone}
                    onChange={(value, data: { countryCode?: string }) => {
                      setPhoneCountry((data as { countryCode?: string }).countryCode || phoneCountry);
                      setFormData((prev) => ({ ...prev, phone: value }));
                    }}
                    onMount={() => setPhoneCountry(getDetectedCountry())}
                    inputClass="!w-full !h-[50px] !rounded-xl !border !border-[#d7dfdc] !text-[#113c56] !bg-white focus:!outline-none focus:!ring-2 focus:!ring-[#1a604f]/30 focus:!border-[#1a604f]"
                    buttonClass="!border !border-[#d7dfdc] !rounded-l-xl !bg-white hover:!bg-[#f5f7fb]"
                    dropdownClass="!text-[#113c56]"
                    enableSearch
                    searchPlaceholder="ابحث عن الدولة..."
                    localization={ar}
                    inputProps={{ name: "phone", required: true }}
                  />
                </div>
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
                <label className="block text-[#113c56] font-bold text-xl mb-2">
                  كيف تصف عملك حاليًا باختصار؟ <span className="text-red-500">*</span>
                </label>
                <p className="text-[#1a2f3d] mb-3">نوع النشاط، طريقة البيع، المنصات التي تعتمد عليها</p>
                <textarea
                  name="businessSummary"
                  value={formData.businessSummary}
                  onChange={handleInputChange}
                  required
                  className={`${inputClassName} min-h-24`}
                />
              </div>

              <div className={cardClassName}>
                <label className="block text-[#113c56] font-bold text-xl mb-2">
                  أين تشعر أن الجهد الأكبر يُبذل دون نتيجة واضحة؟ <span className="text-red-500">*</span>
                </label>
                <p className="text-[#1a2f3d] mb-3">محتوى، إعلانات، مبيعات، متجر، متابعين، وقت</p>
                <div className="space-y-3">
                  {biggestEffortOptions.map((option) => (
                    <label key={option} className="flex items-center gap-3 text-[#113c56] text-lg">
                      <input
                        type="radio"
                        name="biggestEffortArea"
                        value={option}
                        checked={formData.biggestEffortArea === option}
                        onChange={handleInputChange}
                        required
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                {isOtherEffortSelected && (
                  <input
                    name="biggestEffortAreaOther"
                    value={formData.biggestEffortAreaOther}
                    onChange={handleInputChange}
                    required
                    className={`${inputClassName} mt-3`}
                    placeholder="اكتب الإجابة الأخرى"
                  />
                )}
              </div>

              <div className={cardClassName}>
                <label className="block text-[#113c56] font-bold text-xl mb-2">
                  هل تستطيع اليوم تتبع الأرقام الأساسية لعملك؟ <span className="text-red-500">*</span>
                </label>
                <p className="text-[#1a2f3d] mb-3">تكلفة العميل، مصدره، المبيعات، التحويل</p>
                <div className="space-y-3">
                  {numbersTrackingOptions.map((option) => (
                    <label key={option} className="flex items-center gap-3 text-[#113c56] text-lg">
                      <input
                        type="radio"
                        name="numbersTracking"
                        value={option}
                        checked={formData.numbersTracking === option}
                        onChange={handleInputChange}
                        required
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className={cardClassName}>
                <label className="block text-[#113c56] font-bold text-xl mb-2">
                  ما الهدف الذي تريد الوصول إليه خلال الأشهر القادمة؟ <span className="text-red-500">*</span>
                </label>
                <p className="text-[#1a2f3d] mb-3">نمو، استقرار، تقليل خسائر، تنظيم العمل</p>
                <div className="space-y-3">
                  {upcomingGoalOptions.map((option) => (
                    <label key={option} className="flex items-center gap-3 text-[#113c56] text-lg">
                      <input
                        type="radio"
                        name="upcomingGoal"
                        value={option}
                        checked={formData.upcomingGoal === option}
                        onChange={handleInputChange}
                        required
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                {isOtherGoalSelected && (
                  <input
                    name="upcomingGoalOther"
                    value={formData.upcomingGoalOther}
                    onChange={handleInputChange}
                    required
                    className={`${inputClassName} mt-3`}
                    placeholder="اكتب الإجابة الأخرى"
                  />
                )}
              </div>

              <div className={cardClassName}>
                <label className="block text-[#113c56] font-bold text-xl mb-2">
                  ما الذي جربته سابقًا ولم ينجح معك؟ <span className="text-red-500">*</span>
                </label>
                <p className="text-[#1a2f3d] mb-3">إعلانات، محتوى، وكالة، فريق داخلي</p>
                <textarea
                  name="previousAttempts"
                  value={formData.previousAttempts}
                  onChange={handleInputChange}
                  required
                  className={`${inputClassName} min-h-24`}
                />
              </div>

              <div className={cardClassName}>
                <label className="block text-[#113c56] font-bold text-xl mb-2">
                  روابط حسابات على وسائل التواصل <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="socialLinks"
                  value={formData.socialLinks}
                  onChange={handleInputChange}
                  required
                  className={`${inputClassName} min-h-24`}
                />
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
    )}

  </>
  );
};

export default CTASection;
