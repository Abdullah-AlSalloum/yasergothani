"use client";
import React from "react";

const mystoryContent = [
  {
    title: "حين تكون الفكرة قوية… لكن المبيعات ضعيفة",
    text: `كثير من المشاريع تمتلك فكرة قوية أو ميزة تنافسية حقيقية، ومع ذلك تواجه تحديات في المبيعات والنمو.
    غالبًا لا تكون المشكلة في المنتج نفسه، بل في تسويقٍ منفصل عن واقع المشروع، لا يفهم أهدافه ولا عملياته، ويتعامل معه بعقلية باقات جاهزة تنتهي مهمتها عند النشر.
    هنا يتحول التسويق من أداة نمو إلى عبء لا يحقق الأثر المتوقع.`
  },
  {
    title: "هنا يبدأ الفرق",
    text: `اسمي ياسر الغوثاني، وأعمل في التسويق الرقمي منذ أكثر من 10 سنوات مع مشاريع تخصصية ذات طبيعة معرفية وهادفة.
    بدأ هذه الرحلة كعمل، ثم تحولت إلى شغف حقيقي، عندما رأيت كيف يمكن لاستراتيجية صحيحة أن تُنقذ مشروعًا تخصصيًا، وتحوّل حضوره الرقمي إلى نمو مستدام ونتائج واضحة، ونجاحات كبيرة.
    ما تعلّمته أن التسويق الفعّال لا يبدأ بالحملات الإعلانية، بل بالفهم الدقيق للمشروع أولًا.`
  },
  {
    title: "كيف نعمل؟",
    text: `نبدأ بتحليل تفصيلي للمشروع ودراسة دقيقة للسوق,
    ثم نبني الاستراتيجية المناسبة,
    ونضع آلية تنفيذ ومتابعة واضحة,
    مدعومة بتقارير تساعد على التحسين واتخاذ قرارات أكثر دقة ووضوحًا.
    أنا لا أبيع باقات ثابتة، ولا أقدّم خدمات منفصلة، بل أعمل كشريك يفهم المشروع من الداخل، ويجعل التسويق في خدمته… لا العكس.`
  },
  {
    title: "رؤيتي",
    text: `تمكين المشاريع المعرفية والهادفة، ودور النشر، والشخصيات العلمية، من اتخاذ خطوات تسويقية صحيحة في عالمٍ رقميّ يتغير بسرعة هائلة.`
  },
  {
    title: "الخطوة التالية",
    text: `إذا شعرت أن هذا الكلام يعبّر عن واقع مشروعك، فأنت في المكان الصحيح.
    الخطوة التالية هي اجتماع تعارف وتحليل أولي، نناقش فيه وضع مشروعك الحالي، ونحدّد بوضوح أين يمكن للتسويق أن يصنع الفرق فعلًا.`
  }
];

const MyStory: React.FC = () => (
  <section className="w-full py-16 px-4 bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] min-h-screen">
    <div className="max-w-3xl mx-auto flex flex-col gap-10 items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 text-center">قصتي ورؤيتي</h2>
      <div className="w-full flex flex-col gap-8">
        {mystoryContent.map((block, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-right border border-gray-100">
            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">{block.title}</h3>
            {block.text.split("\n").map((line, i) => (
              <p key={i} className="text-gray-700 text-lg leading-relaxed mb-2">{line}</p>
            ))}
          </div>
        ))}
        <div className="flex justify-center mt-4">
          <a href="/#solutions" className=" relative inline-flex items-center justify-center gap-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-primary font-extrabold py-3 px-30 rounded-xl text-center shadow-xl hover:from-yellow-500 hover:to-yellow-400 hover:scale-[1.03] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300">
            ابدأ من هنا
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default MyStory;
